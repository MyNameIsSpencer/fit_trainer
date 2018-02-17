import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './Home.js';
import './App.css';


const App = () => (
  <div>
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Router>
        <div>
          <nav class="nav-header">
            <Link to="/" class="list-item">Home</Link>{'  '}
          </nav>

          <Route exact path="/"component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />

        </div>
      </Router>
    </header>

  </div>
)


export default App;
