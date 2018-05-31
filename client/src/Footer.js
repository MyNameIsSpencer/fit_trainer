import {
  Link
} from 'react-router-dom';

import React, { Component } from 'react';
import './css/Footer.css';


const Footer = (props) => {
  return(
    <div className="bottom-footer">
      <div className="contact-us">
        <h2> Contact Us </h2>
        <p>

          Phone<br/>   <b>  647-573-2636</b><br/><br/>

          Email<br/>     <b> biologicfitnessandhealth@gmail.com</b><br/><br/>
        </p>
      </div>
      <div className="contact-us">
        <h2> About Us </h2>

        <p>
          BioLogic Health and Fitness specializes in health and fitness programs for individuals over 50.
          Your needs are unique and we can work with you to build a program tailored made to you.<br/>
        </p>
      </div>
      <nav className="footer-nav">
        <Link to="/" className={"footer-nav-item"}>Home</Link>
        <Link to="/services" className={"footer-nav-item"}>Services</Link>
        <Link to="/about" className={"footer-nav-item"}>About</Link>
        <Link to="/fittips" className={"footer-nav-item"}>Fit-Tips</Link>
      </nav>
    </div>
  )

}


export default Footer;
