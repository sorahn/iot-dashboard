import {Store} from 'flux/utils';
import {Radio, Yelling} from '../actions/Farva.jsx';

let favorites = [];

class FavoriteStore extends Store {
  getFavorites() {
    return favorites;
  }

  __onDispatch(action) {
    switch (action.type) {
      case Yelling.GOT_FAVORITES:
        favorites = action.data;
        break;

      default:
        break;
    }

    this.__emitChange();
  }
}

export default new FavoriteStore(Radio);
