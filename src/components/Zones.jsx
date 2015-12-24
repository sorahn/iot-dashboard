import React from 'react';
import {Panel, ListGroup, ListGroupItem} from 'react-bootstrap';

import Farva from '../actions/Farva.jsx';
import ZoneStore from '../stores/Zones.jsx';

export default class Zones extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zones: []
    };

    this.handleZonesUpdate = this.handleZonesUpdate.bind(this);
  }

  handleZonesUpdate() {
    this.setState({
      zones: ZoneStore.getZones()
    });
  }

  componentDidMount() {
    ZoneStore.addListener(this.handleZonesUpdate);
    Farva.getZones();
  }

  componentWillUnmount() {
    ZoneStore.removeListener(this.handleZonesUpdate);
  }

  render() {
    return (
      <Panel header={<h3 className="panel-title">Rooms</h3>} bsStyle="primary">
        {this.state.zones.map((zone, i) => (
          <Panel key={i} header={<h3>{zone.coordinator.roomName}</h3>}>
            <ListGroup fill>
              {zone.members.map((speaker, j) => (
                <ListGroupItem key={j}>
                  {speaker.roomName}
                </ListGroupItem>
              ))}
            </ListGroup>
          </Panel>
        ))}
      </Panel>
    );
  }
}
