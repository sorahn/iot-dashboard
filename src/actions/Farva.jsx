import {Dispatcher} from 'flux';
import SonosApi from '../helpers/SonosApi.jsx';

export const Radio = new Dispatcher();

export const Yelling = {
  GOT_ZONES: 'GotZones',
  GOT_FAVORITES: 'GotFavorites',
  CHANGE_ACTIVE: 'ChangeActive'
};

const Farva = {
  getZones() {
    SonosApi.getZones().then((zones) => {
      Radio.dispatch({
        type: Yelling.GOT_ZONES,
        data: zones
      });
    });
  },

  getFavorites() {
    SonosApi.getFavorites().then((favorites) => {
      Radio.dispatch({
        type: Yelling.GOT_FAVORITES,
        data: favorites
      });
    });
  },

  changeActive(active) {
    Radio.dispatch({
      type: Yelling.CHANGE_ACTIVE,
      data: active
    });
  },

  playFavorite(roomName, favorite) {
    SonosApi.sendRoomCommand(roomName, 'favorite', favorite).then(() => {
      Radio.dispatch({
        type: Yelling.RELOAD_ZONES
      });
    });
  }
};

export default Farva;
