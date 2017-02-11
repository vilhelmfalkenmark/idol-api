import React from 'react';
import { BrowserRouter as Router } from 'react-router';
import Channels from './components/Channels/';
// import data from './data';
import '../css/stylesheet.css';
// import { connect } from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="Site-grid">
            <a href="/" className="Site-logo"><h1>Comhemplay</h1></a>
            <Channels />
          </div>
        </div>
      </Router>
    );
  }
}
