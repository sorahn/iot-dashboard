import {Store} from 'flux/utils';
import {Radio, Yelling} from '../actions/Farva.jsx';

let zones = [];
let active = {};

class ZoneStore extends Store {
  getZones() {
    return zones;
  }

  getActive() {
    if (!active) {
      active = zones[0];
    }
    return active;
  }

  __onDispatch(cmd) {
    switch (cmd.type) {
      case Yelling.GOT_ZONES:
        zones = cmd.meow;
        break;

      case Yelling.CHANGE_ACTIVE:
        active = zones[cmd.meow];
        break;

      default: break;
    }

    this.__emitChange();
  }
}

export default new ZoneStore(Radio);
