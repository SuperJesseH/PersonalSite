import React, { Component } from 'react';
import imgs from "./imgs/DoomIndex.png"
import './App.css';

class Header extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="Header">
          <h1>Jesse [at] 11BSouth.com</h1>
          <p>Web Developer, Creative Technologist, Pedestrian</p>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
