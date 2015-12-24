import { Store } from 'flux/utils';
import { Radio, Yelling } from '../actions/Farva.jsx';
import _ from 'lodash';

let zones = [];

class ZoneStore extends Store {
  getZones() {
    return zones;
  }

  getZoneByUUID(uuid) {
    return zones[_.findIndex(zones, {uuid})];
  }

  __onDispatch(action) {
    switch (action.type) {
      case Yelling.GOT_ZONES:
        zones = action.data;
        break;

      default: break;
    }

    this.__emitChange();
  }
}

export default new ZoneStore(Radio);
