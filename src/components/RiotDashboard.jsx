import React from 'react';
import { Navbar, Grid, Row, Col } from 'react-bootstrap';

// import Farva from '../actions/Farva.jsx';
import Favorites from './Favorites.jsx';
import NowPlaying from './NowPlaying.jsx';
import Zones from './Zones.jsx';

export default class RiotDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <main>

        <Navbar staticTop>
          <Navbar.Header>
            <Navbar.Brand>Riot Dashboard</Navbar.Brand>
          </Navbar.Header>
        </Navbar>

        <Grid>
          <Row>
            <Col sm={3}>
              <Zones />
            </Col>

            <Col sm={5}>
              <NowPlaying />
            </Col>

            <Col sm={4}>
              <Favorites />
            </Col>
          </Row>
        </Grid>
      </main>
    );
  }
}

export const element = document.getElementById('riot-dashboard');
