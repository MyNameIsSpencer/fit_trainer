import {
  Route,
  Link
} from 'react-router-dom';

import React, { Component } from 'react';
import Scroller from './Scroller.js';
import Home from './Home.js';
import Services from './Services.js';
import About from './About.js';
import FitTips from './FitTips.js';
import Header from './Header.js';
import Footer from './Footer.js';
import './css/App.css';

class App extends Component{
  constructor() {
    super();

    this.state = {
      response: '',
      isMenuOpen: false,
      animationHasStarted: false,
    };
  }


  toggleMenu() {
    this.setState( {
      isMenuOpen: !this.state.isMenuOpen,
    } );
  }

  render(){
    return (
      <div>
        <Header toggleMenu={this.toggleMenu.bind( this )} isMenuOpen={this.state.isMenuOpen}/>
        <h1 className="top-logo">BFH </h1>
        <h2 className="top-info"> East Scarborough / Pickering <b>|</b> 647-573-2636 <b>|</b> biologicfitnessandhealth@gmail.com</h2>
        {/*<h2 className="top-info"> E: biologicfitnessandhealth@gmail.com</h2>*/}
        <p> { this.state.response } </p>
        <div className="header-navigation">
          <Route exact path="/"component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/about" component={About} />
          <Route path="/fittips" component={FitTips} />
        </div>
        <Footer />
      </div>
    );
  }
}


export default App;
