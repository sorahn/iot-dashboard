import React from 'react';
import { Grid, Navbar } from 'react-bootstrap';

const NowPlaying = (({active}) => {
  return (
    <div>
      <Navbar staticTop>
        <Navbar.Header>
          <Navbar.Brand>&nbsp;</Navbar.Brand>
        </Navbar.Header>
      </Navbar>
      <Grid>
        {active.coordinator &&
          <h1>{active.coordinator.roomName}</h1>
        }
      </Grid>
    </div>
  );
});

export default NowPlaying;
