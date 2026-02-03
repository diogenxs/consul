/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: BUSL-1.1
 */

import BaseAbility from './base';
import { inject as service } from '@ember/service';

export default class OverviewAbility extends BaseAbility {
  @service('env') env;

  resource = 'operator';
  segmented = false;

  /**/
  // Temporarily revert to pre-1.10 UI functionality by overwriting frontend
  // permissions. These are used to hide certain UI elements, but they are
  // still enforced on the backend.
  // This temporary measure should be removed again once https://github.com/hashicorp/consul/issues/11098
  // has been resolved
  get canRead() {
    return true;
  }
  /**/

  get canAccess() {
    return !this.env.var('CONSUL_HCP_ENABLED') && this.canRead;
  }
}
