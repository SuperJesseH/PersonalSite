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
      {name: "DIY Doom Index", imageSrc: "./imgs/doom.png", projLink: "https://doom-index.herokuapp.com", subText: "React Web App with Rails Backend", desc: "DIY Doom Index uses macroeconomic, political and environmental data to create a daily index of doom and turmoil. Users can weight and enable provided datasets that will contribute to a calculated doom value."},


      {name: "Sound Level Sign", imageSrc: "./imgs/HonkSign.png", projLink: "http://11bsouth.com/?p=343", subText: "Arduino powered interactive street sign with audio DSP, LED board and solar power", desc: "Modeled after the successful \"Your speed is...\" signs, the Sound Level Sign attempts to address vehicular noise pollution around major intersections. The Sign listens to ambient noise and counts the number of loud peaks it hears (typically car horns). As the Sign hears more loud sounds, the emoji face on the LED board becomes increasingly disgruntled providing emotional feedback to drivers. This project was designed to run on solar power and was made from a modified highway grade street sign."},

      {name: "Radius", imageSrc: "./imgs/radius.png", projLink: "https://doom-index.herokuapp.com", subText: "A people counting device built with an ESP8266 Wifi module", desc: "My graduate school thesis project, a wearable device that uses Wifi packet sniffing to estimate the nearby population. Data are visualized in realtime on the device and stored in CSV format. The goal is to establish a new urban metric of “experienced population density” to fill important gaps in current census based density metrics."}
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
