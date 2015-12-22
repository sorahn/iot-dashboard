import React from 'react';
import { Flex, Block } from 'jsxstyle';

import Farva from '../actions/Farva.jsx';
import ZoneStore from '../stores/Zones.jsx';

import Favorites from './Favorites.jsx';
import NowPlaying from './NowPlaying.jsx';
import Zones from './Zones.jsx';

export default class RiotDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      zones: [],
      favorites: [],
      active: {},
      activeUUID: ''
    };

    this.onZonesUpdate = this.onZonesUpdate.bind(this);
  }

  componentDidMount() {
    ZoneStore.addListener(this.onZonesUpdate);

    if (!this.state.zones.length) {
      Farva.getZones();
    }
  }

  componentWillUnmount() {
    ZoneStore.removeListener(this.onZonesUpdate);
  }

  onZonesUpdate() {
    const zones = ZoneStore.getZones();
    const active = ZoneStore.getActive();


    this.setState({zones, active});
  }

  render() {
    return (
      <Flex>
        <Block flex="10">
          <Zones zones={this.state.zones} />
        </Block>

        <Block flex="12">
          {this.state.active &&
            <NowPlaying active={this.state.active}/>
          }
        </Block>

        <Block flex="16">
          <Favorites favorites={this.state.favorites} />
       </Block>
      </Flex>
    );
  }
}

export const element = document.getElementById('riot-dashboard');
