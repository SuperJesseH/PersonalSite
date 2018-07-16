import React, { Component } from 'react';
import Header from "./Header"
import Section from "./Section"
import Footer from "./Footer"
import './App.css';

class App extends Component {

  constructor(){
    super()

  }


  render() {
    const FeaturedWork = [
      {name: "DIY Doom Index", imageSrc: "src/imgs/DoomIndex.png", projLink: "https://doom-index.herokuapp.com", subText: "React Web App with Rails Backend", desc: "DIY Doom Index uses macroeconomic, political and environmental data to create a daily index of doom and turmoil. Users can weight and enable provided datasets that will contribute to a calculated doom value."}
    ]

    const SoftwareWork = [
      {name: "DIY Doom Index", imageSrc: "src/imgs/DoomIndex.png",}
    ]

    const HardwareWork = [
      {name: "DIY Doom Index", imageSrc: "src/imgs/DoomIndex.png",}
    ]
    return (
      <div className="App">
        <Header />
          <Section secName={"Featured"} content={FeaturedWork}/>
          {/* <Section secName={"Software"} content={SoftwareWork}/>
          <Section secName={"Hardware"} content={HardwareWork}/> */}
        <Footer />
      </div>
    );
  }
}

export default App;
