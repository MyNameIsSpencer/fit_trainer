import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import React, { Component } from 'react';
import logo from './logo.svg';
import Home from './Home.js';
import Services from './Services.js';
import About from './About.js';
import Contact from './Contact.js';
import './App.css';


const App = () => (
  <div>
    <header class="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <Router>
        <div>
          <nav class="nav-header">
            <Link to="/" class="list-item">Home</Link>
            <Link to="/services" class="list-item">Services</Link>
            <Link to="/about" class="list-item">About</Link>
            <Link to="/contact" class="list-item">Contact</Link>
          </nav>

          <Route exact path="/"component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />

        </div>
      </Router>
    </header>

    <div>
    </div>
    

  </div>
)


export default App;
