import React from 'react';

import LandingPage from './components/LandingPage/';
import Participants from './components/Participants/';
import ParticipantFull from './components/ParticipantFull/';

import { connect } from "react-redux";
import { getAllData } from "./actions/ApiActions";
import { BrowserRouter as Router,  Match, Miss, Link } from 'react-router';

import '../css/stylesheet.css';

class App extends React.Component {
 componentDidMount() {
  this.props.dispatch(getAllData());
 }

  render() {
    return (
        <div className="App">
          <div className="Site-container">
            <a href="/" className="Site-logo"><h1>Vilhelm Falkenmark Idol API</h1></a>
            <Router>
             <div>
              <menu>
               <ul>
                 <li><Link to={`/`}>Hem</Link></li>
                 <li><Link to={`/idol-deltagare`}>Visa alla deltagare</Link></li>
               </ul>
              </menu>
             <Match exactly pattern="/" component={LandingPage}/>
             <Match exactly pattern="/idol-deltagare" component={Participants}/>
             <Match pattern="/idol-deltagare/:id" component={ParticipantFull}/>
            </div>
           </Router>
          </div>
        </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    participants: state.participants
  }
}
export default connect(mapStateToProps)(App);
