/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: BUSL-1.1
 */

import BaseAbility from './base';

export default class IntentionAbility extends BaseAbility {
  resource = 'intention';

  /**/
  // Temporarily revert to pre-1.10 UI functionality by overwriting frontend
  // permissions. These are used to hide certain UI elements, but they are
  // still enforced on the backend.
  // This temporary measure should be removed again once https://github.com/hashicorp/consul/issues/11098
  // has been resolved
  get canRead() {
    return true;
  }

  get canList() {
    return true;
  }
  /**/

  get canWrite() {
    // Peered intentions aren't writable
    if (typeof this.item !== 'undefined' && typeof this.item.SourcePeer !== 'undefined') {
      return false;
    }
    // Temporarily allowing all writes since permissions enforcement happens on the backend
    return typeof this.item === 'undefined' || !this.canViewCRD;
  }
  get canViewCRD() {
    return typeof this.item !== 'undefined' && this.item.IsManagedByCRD;
  }
}
