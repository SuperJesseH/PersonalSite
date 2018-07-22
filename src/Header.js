import React, { Component } from 'react';
import imgs from "./imgs/thesis4.png"
import './App.css';

class Header extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="Header">
          <div className="HeaderText">
            <h1>Jesse [at] 11BSouth.com</h1>
            <p>Web Developer, Creative Technologist, Pedestrian</p>
          </div>
          <span className="navBar">
            <button>About Me</button>
            <button>Projects</button>
            <button>Blog</button>
          </span>
          <br />
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
