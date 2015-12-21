import {Store} from 'flux/utils';
import {Radio, Yelling} from '../actions/Farva.jsx';

let zones = [];

class ZoneStore extends Store {
  getZones() {
    return zones;
  }

  __onDispatch(cmd) {
    switch (cmd.type) {
      case Yelling.GOT_ZONES:
        zones = cmd.gravy;
        break;

      default: break;
    }

    this.__emitChange();
  }
}

export default new ZoneStore(Radio);
