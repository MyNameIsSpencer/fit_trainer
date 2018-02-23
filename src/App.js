import {
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

class App extends Component{
  state = {
    isMenuOpen: false
  }

  toggleMenu = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
  }
  render(){

  return (<div>
    <header>
      <img src={logo} className="App-logo" alt="logo" />
      <nav className="nav-header">
        <Link to="/" className={"list-item"}>Home</Link>
        <Link to="/services" className={"list-item"}>Services</Link>
        <Link to="/about" className={"list-item"}>About</Link>
        <Link to="/contact" className={"list-item"}>Contact</Link>
      </nav>
      <div className="hamburg-container" onClick={this.toggleMenu}>
        <div className="hamburg-paddie"> </div>
        <div className="hamburg-paddie"> </div>
        <div className="hamburg-paddie"> </div>
      </div>
      {
      this.state.isMenuOpen? (
          <div className="hamburger-dropdown">
            <nav className="small-nav-header">
              <Link to="/" className={"drop-item"} onClick={this.toggleMenu}>Home</Link>
              <Link to="/services" className={"drop-item"} onClick={this.toggleMenu}>Services</Link>
              <Link to="/about" className={"drop-item"} onClick={this.toggleMenu}>About</Link>
              <Link to="/contact" className={"drop-item"} onClick={this.toggleMenu}>Contact</Link>
            </nav>
          </div>
        ): null
      }
      </header>
      <div>
      <Route exact path="/"component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />

      </div>
    <div>
    </div>


  </div>);
  }
}


export default App;
