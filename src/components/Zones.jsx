import React from 'react';
import {Navbar, Col, Panel, ListGroup, ListGroupItem} from 'react-bootstrap';

import Farva from '../actions/Farva.jsx';

export default class Zones extends React.Component {
  handlePanelClick(i) {
    Farva.changeActive(i);
  }

  render() {
    const zones = this.props.zones;
    return (
      <div>
        <Navbar staticTop>
          <Navbar.Header>
            <Navbar.Brand>Rooms</Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Col xs={12}>
          {zones.map((zone, i) => (
            <Panel key={i} header={(<h3 onClick={() => {this.handlePanelClick(i);}}>{zone.coordinator.roomName}</h3>)}>
              <ListGroup fill>
                {zone.members.map((speaker, j) => (
                  <ListGroupItem key={j}>
                    {speaker.roomName}
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Panel>
          ))}
        </Col>
      </div>
    );
  }
}
