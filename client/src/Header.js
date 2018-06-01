import {
  Link
} from 'react-router-dom';


import React, { Component } from 'react';


class Header extends Component {
  changeBgColor( e ) {
    let colors = [ 'red', 'blue', 'green', 'orange' ];
    e.target.style.backgroundColor = colors[ Math.floor( Math.random() * colors.length ) ];
  }

  render() {
    return(
      <header id="theHeader">

          <nav className="nav-header">
            <Link to="/" className={"list-item"}>Home</Link>
            <Link to="/services" className={"list-item"}>Services</Link>
            <Link to="/about" className={"list-item"}>About</Link>
            <Link to="/fittips" className={"list-item"}>Fit-Tips</Link>
          </nav>
          <div className="hamburg-container" onClick={this.props.toggleMenu}>
            <div className="hamburg-paddie"> </div>
            <div className="hamburg-paddie"> </div>
            <div className="hamburg-paddie"> </div>
          </div>
          {
          this.props.isMenuOpen? (
              <div className="hamburger-dropdown">
                <nav className="small-nav-header">
                  <Link to="/" className={"drop-item"} onClick={this.props.toggleMenu}>Home</Link>
                  <Link to="/services" className={"drop-item"} onClick={this.props.toggleMenu}>Services</Link>
                  <Link to="/about" className={"drop-item"} onClick={this.props.toggleMenu}>About</Link>
                  <Link to="/contact" className={"drop-item"} onClick={this.props.toggleMenu}>Contact</Link>
                </nav>
              </div>
            ): null
          }
      </header>
    )
  }


}

export default Header;
