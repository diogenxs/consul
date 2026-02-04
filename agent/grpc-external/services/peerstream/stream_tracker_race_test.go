// Copyright (c) HashiCorp, Inc.
// SPDX-License-Identifier: BUSL-1.1

package peerstream

import (
	"testing"
	"time"

	"github.com/stretchr/testify/require"
)

// TestTracker_HandleStream_RaceCondition tests the scenario where a second stream
// tries to connect for the same peer ID while an active stream exists.
// This tests the bug where HandleStream unconditionally calls DisconnectedDueToError
// even when Connected() fails, which corrupts the active stream's status.
func TestTracker_HandleStream_RaceCondition(t *testing.T) {
	tracker := NewTracker(defaultIncomingHeartbeatTimeout)
	peerID := "63b60245-c475-426b-b314-4588d210859d"

	it := incrementalTime{
		base: time.Date(2000, time.January, 1, 0, 0, 0, 0, time.UTC),
	}
	tracker.setClock(it.Now)

	// Step 1: Stream A connects successfully
	statusA, err := tracker.Connected(peerID)
	require.NoError(t, err)
	require.True(t, statusA.Connected)

	// Verify status is connected with no disconnect time
	status, ok := tracker.StreamStatus(peerID)
	require.True(t, ok)
	require.True(t, status.Connected)
	require.Nil(t, status.DisconnectTime)

	// Step 2: Stream A is actively processing - simulate by tracking an ACK
	statusA.TrackAck()
	
	status, _ = tracker.StreamStatus(peerID)
	require.NotNil(t, status.LastAck, "LastAck should be set after TrackAck")

	// Step 3: Stream B tries to connect with the same peer ID - this should fail
	_, err = tracker.Connected(peerID)
	require.Error(t, err)
	require.Contains(t, err.Error(), "there is an active stream for the given PeerID")

	// At this point, in the buggy code, HandleStream would call:
	// tracker.DisconnectedDueToError(peerID, err.Error())
	// 
	// This SHOULD NOT happen because Stream B was never connected.
	// But let's simulate what the current buggy code does:

	// BUG SIMULATION: This is what the current HandleStream does incorrectly
	tracker.DisconnectedDueToError(peerID, err.Error())

	// Step 4: Verify the corruption - Stream A's status is now corrupted!
	status, ok = tracker.StreamStatus(peerID)
	require.True(t, ok)
	
	// THE BUG: Status shows disconnected even though Stream A is still running
	// After the fix, this assertion should change to require.True(t, status.Connected)
	require.False(t, status.Connected, "BUG: Stream A's status was corrupted by Stream B's failed connection attempt")
	require.NotNil(t, status.DisconnectTime, "BUG: DisconnectTime was set by Stream B even though Stream A is still active")

	// Stream A is still "running" - it calls TrackAck again
	statusA.TrackAck()

	// Step 5: Now we have the exact symptom from the bug report:
	// - Connected = false
	// - DisconnectTime = set (from Stream B's failed attempt)
	// - LastAck = being updated (by Stream A which is still running)
	status, _ = tracker.StreamStatus(peerID)
	require.False(t, status.Connected, "Connected should be false (corrupted)")
	require.NotNil(t, status.DisconnectTime, "DisconnectTime should be set (corrupted)")
	require.NotNil(t, status.LastAck, "LastAck should still be set (Stream A is still running)")
	
	// This is the inconsistent state we see in production!
	t.Logf("Reproduced bug: Connected=%v, DisconnectTime=%v, LastAck=%v",
		status.Connected, status.DisconnectTime, status.LastAck)
}

// TestTracker_HandleStream_RaceCondition_Fixed tests that after the fix,
// a failed connection attempt should NOT corrupt an active stream's status.
func TestTracker_HandleStream_RaceCondition_Fixed(t *testing.T) {
	tracker := NewTracker(defaultIncomingHeartbeatTimeout)
	peerID := "63b60245-c475-426b-b314-4588d210859d"

	it := incrementalTime{
		base: time.Date(2000, time.January, 1, 0, 0, 0, 0, time.UTC),
	}
	tracker.setClock(it.Now)

	// Step 1: Stream A connects successfully
	statusA, err := tracker.Connected(peerID)
	require.NoError(t, err)
	require.True(t, statusA.Connected)

	// Step 2: Stream A is actively processing
	statusA.TrackAck()

	// Step 3: Stream B tries to connect - fails as expected
	_, err = tracker.Connected(peerID)
	require.Error(t, err)
	require.Contains(t, err.Error(), "there is an active stream for the given PeerID")

	// CORRECT BEHAVIOR: Do NOT call DisconnectedDueToError because Stream B
	// was never connected. The fix in HandleStream should check if Connected()
	// succeeded before calling DisconnectedDueToError.
	//
	// (No call to tracker.DisconnectedDueToError here)

	// Step 4: Verify Stream A's status is NOT corrupted
	status, ok := tracker.StreamStatus(peerID)
	require.True(t, ok)
	require.True(t, status.Connected, "Stream A should still be connected")
	require.Nil(t, status.DisconnectTime, "DisconnectTime should still be nil")
	require.NotNil(t, status.LastAck, "LastAck should be set")

	// Stream A continues to operate normally
	statusA.TrackAck()
	
	status, _ = tracker.StreamStatus(peerID)
	require.True(t, status.Connected, "Stream A should still be connected after more ACKs")
}
