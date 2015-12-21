import {Dispatcher} from 'flux';
import SonosApi from '../helpers/SonosApi.jsx';

export const Radio = new Dispatcher();

export const Yelling = {
  GOT_ZONES: 'GotZones',
  GOT_FAVORITES: 'GotFavorites'
};

const Farva = {
  getZones() {
    SonosApi.getZones().then((zones) => {
      Radio.dispatch({
        type: Yelling.GOT_ZONES,
        gravy: zones
      });
    });
  },

  getFavorites() {
    SonosApi.getFavorites().then((favorites) => {
      Radio.dispatch({
        type: Yelling.GOT_FAVORITES,
        gravy: favorites
      });
    });
  }
};

export default Farva;
