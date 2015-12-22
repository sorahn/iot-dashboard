import {Store} from 'flux/utils';
import {Radio, Yelling} from '../actions/Farva.jsx';

let active = {};

class FavoriteStore extends Store {
  getActive() {
    return active;
  }

  __onDispatch(action) {
    switch (action.type) {
        active = action.meow;
        break;

      default:
        break;
    }

    this.__emitChange();
  }
}

export default new FavoriteStore(Radio);
