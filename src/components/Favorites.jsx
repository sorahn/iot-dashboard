import React from 'react';
import { Panel, ListGroup, ListGroupItem } from 'react-bootstrap';
import Farva from '../actions/Farva.jsx';
import FavoriteStore from '../stores/Favorites.jsx';

export default class Favorites extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      favorites: []
    };

    this.onFavoritesUpdate = this.onFavoritesUpdate.bind(this);
  }

  onFavoritesUpdate() {
    this.setState({
      favorites: FavoriteStore.getFavorites()
    });
  }

  componentDidMount() {
    FavoriteStore.addListener(this.onFavoritesUpdate);
    Farva.getFavorites();
  }

  componentWillUnmount() {
    FavoriteStore.removeListener(this.onFavoritesUpdate);
  }

  handleFavoriteClick(favorite) {
    if (this.state.active) {
      Farva.playFavorite(this.state.active.roomName, favorite);
    }
  }

  render() {
    const favorites = this.state.favorites;
    return (
      <Panel header={<h3>Favorites</h3>} bsStyle="primary">
        <ListGroup>
          {favorites.map((favorite, i) => {
            return <ListGroupItem key={i}>{favorite}</ListGroupItem>;
          })}
        </ListGroup>
      </Panel>
    );
  }
}
