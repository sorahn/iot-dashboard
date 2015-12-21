import React from 'react';
import Farva from '../actions/Farva.jsx';
import ZoneStore from '../stores/Zones.jsx';
import FavoriteStore from '../stores/Favorites.jsx';

export default class RiotDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zones: [],
      favorites: []
    };

    this.onZonesUpdate = this.onZonesUpdate.bind(this);
    this.onFavoritesUpdate = this.onFavoritesUpdate.bind(this);
  }

  componentDidMount() {
    ZoneStore.addListener(this.onZonesUpdate);
    FavoriteStore.addListener(this.onFavoritesUpdate);

    if (!this.state.zones.length) {
      Farva.getZones();
    }

    if (!this.state.favorites.length) {
      Farva.getFavorites();
    }
  }

  componentWillUnmount() {
    ZoneStore.removeListener(this.onZonesUpdate);
    FavoriteStore.removeListener(this.onFavoritesUpdate);
  }

  onZonesUpdate() {
    const zones = ZoneStore.getZones();

    this.setState({zones});
  }

  onFavoritesUpdate() {
    const favorites = FavoriteStore.getFavorites();

    this.setState({favorites});
  }

  render() {
    return (
      <div className="container">
        <h1>Zones</h1>

        {this.state.zones.map((zone, i) => (
          <fieldset key={i}>
            <legend>{zone.coordinator.roomName}</legend>
            {zone.members.map((speaker, j) => (
              <h3 key={j}>{speaker.roomName}</h3>
            ))}
          </fieldset>
        ))}

        <h1>Favorites</h1>
        {this.state.favorites.map((fav, i) => (
          <span key={i}>{fav}</span>
        ))}

      </div>
    );
  }
}

export const element = document.getElementById('riot-dashboard');
