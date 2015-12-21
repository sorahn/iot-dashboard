import React from 'react';
import {
  Grid,
  Row,
  Col,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';

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
        <Grid><Row>
          <Col sm={3}>
            <h1>Zones</h1>
            {this.state.zones.map((zone, i) => (

              <ListGroup key={i}>
                {zone.members.map((speaker, j) => {

                  return (
                    <ListGroupItem
                      header={ j === 0 ? zone.coordinator.roomName : null }
                      key={j}
                      href="#">
                        {speaker.roomName}
                    </ListGroupItem>
                  );
                })}
              </ListGroup>
            ))}
          </Col>

          <Col sm={5}>
            <h1>Active</h1>
          </Col>

          <Col sm={4}>
            <h1>Favorites</h1>
            <ListGroup>
              {this.state.favorites.map((fav, i) => (
                <ListGroupItem key={i} href="#">{fav}</ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row></Grid>
      </div>
    );
  }
}

export const element = document.getElementById('riot-dashboard');
