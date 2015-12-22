import React from 'react';
import { Col, Navbar, ListGroup, ListGroupItem } from 'react-bootstrap';
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

  componentDidMount() {
    FavoriteStore.addListener(this.onFavoritesUpdate);
    Farva.getFavorites();
  }

  componentWillUnmount() {
    FavoriteStore.removeListener(this.onFavoritesUpdate);
  }

  onFavoritesUpdate() {
    const favorites = FavoriteStore.getFavorites();

    this.setState({favorites});
  }

  handleFavoriteClick(favorite) {
    if (this.state.active) {
      Farva.playFavorite(this.state.active.roomName, favorite);
    }
  }

  render() {
    const favorites = this.state.favorites;
    return (
      <div>
        <Navbar staticTop>
          <Navbar.Header>
            <Navbar.Brand>Favorites</Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Col xs={12}>
          <ListGroup>
            {favorites.map((favorite, i) => (
              <ListGroupItem key={i} onClick={() => {this.handleFavoriteClick(favorite);}}>{favorite}</ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </div>
    );
  }
}
