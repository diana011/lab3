import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Home from './Home';
import Medication from './Medication';
import Patients from './Patients';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="wrapper">
              <nav className="menu">
                  <ul className="clearfix">
                      <li>
                        <Link to={'/Home'}> Home </Link>
                      </li>
                      <li>
                        <Link to={'/Patients'}> Patients </Link>
                      </li>
                      <li>
                        <Link to={'/Medication'}> Medication </Link>
                      </li>
                  </ul>
              </nav>

              <Switch>
                <Route path='/home' component={Home} />
                <Route path='/patients' component={Patients} />
                <Route path='/medication' component={Medication} />
              </Switch>

          </div>

        </div>
      </Router>
    );
  }
}

export default App;
