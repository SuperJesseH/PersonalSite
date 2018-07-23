import React, { Component } from 'react';
import './App.css';


class Project extends Component {


  render() {
    // {name: "DIY Doom Index", imageSrc: "src/imgs/DoomIndex.png", projLink: "https://doom-index.herokuapp.com", subText: "React Web App with Rails Backend", desc: "DIY Doom Index uses macroeconomic, political and environmental data to create a daily index of doom and turmoil. Users can weight and enable provided datasets that will contribute to a calculated doom value."}

    return (

      <React.Fragment>
        <a href={this.props.content.projLink} className="project" id="Feat1">
          <img src={require(`${this.props.content.imageSrc}`)} alt={this.props.content.name}/>
          <div className="Text">
            <h2 className="ProjectTitle">{this.props.content.name}</h2>
            <div className="ProjectSubtext">{this.props.content.subText}</div>
            <p className="ProjectText">{this.props.content.desc}</p>
          </div>
        </a>
      </React.Fragment>
    );
  }
}

export default Project;
