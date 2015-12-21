import React from 'react';
import ReactDOM from 'react-dom';
import RiotDashboard, { element } from './components/RiotDashboard.jsx';

if (element) {
  ReactDOM.render(<RiotDashboard />, element);
}
