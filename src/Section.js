import React, { Component } from 'react';
import imgs from "./imgs/DoomIndex.png"
import Project from "./Project"
import './App.css';

class Section extends Component {

  render() {
    return (
      <React.Fragment>
        <div className="SecHeader">
          <h2>{this.props.secName}</h2>
        </div>
        <div className="Projects">
          {this.props.content.map((project)=><Project key={project.name} content={project}/>)}
        </div>
      </React.Fragment>
    );
  }
}

export default Section;
