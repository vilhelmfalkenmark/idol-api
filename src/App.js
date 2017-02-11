import React from 'react';
import LandingPage from './components/LandingPage/';
import Participants from './components/Participants/';
import ParticipantFull from './components/ParticipantFull/';
import '../css/stylesheet.css';
import { BrowserRouter as Router,  Match, Miss, Link } from 'react-router';


export default class App extends React.Component {
  render() {
    return (
        <div className="App">
          <div className="Site-container">
            <a href="/" className="Site-logo"><h1>Vilhelm Falkenmark Arbetsprov</h1></a>

            <Router>
             <div>
              <menu className="A-Menu">
               <ul className="A-Menu-list">
                 <li><Link to={`/`}>Hem</Link></li>
                 <li><Link to={`/idol-deltagare`} className="is-active"><i className="flaticon-folded-newspaper"></i>Visa alla deltagare</Link></li>
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
