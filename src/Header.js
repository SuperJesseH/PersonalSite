import React, { Component } from 'react';
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
            <button onClick={()=>this.props.changePage("about")}>About Me</button>
            <button onClick={()=>this.props.changePage("projects")}>Projects</button>
            <a href="http://11bsouth.com/?page_id=566"><button>Blog</button></a>
          </span>
          <br />
        </div>
      </React.Fragment>
    )
  }
}

export default Header;
