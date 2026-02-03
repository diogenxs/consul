/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: BUSL-1.1
 */

import classic from 'ember-classic-decorator';
import BaseAbility from './base';

@classic
export default class ZerviceAbility extends BaseAbility {
  resource = 'service';

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

  get canWrite() {
    return true;
  }
  /**/

  get isLinkable() {
    return this.item.InstanceCount > 0;
  }

  get canReadIntention() {
    if (typeof this.item === 'undefined' || typeof this.item.Resources === 'undefined') {
      return false;
    }
    const found = this.item.Resources.find(
      (item) => item.Resource === 'intention' && item.Access === 'read' && item.Allow === true
    );
    return typeof found !== 'undefined';
  }

  get canWriteIntention() {
    if (typeof this.item === 'undefined' || typeof this.item.Resources === 'undefined') {
      return false;
    }
    const found = this.item.Resources.find(
      (item) => item.Resource === 'intention' && item.Access === 'write' && item.Allow === true
    );
    return typeof found !== 'undefined';
  }

  get canCreateIntention() {
    return this.canWriteIntention;
  }

  get canUpdateIntention() {
    return this.canWriteIntention;
  }
}
