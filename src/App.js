import React, { Component } from 'react';
import Header from "./Header"
import Section from "./Section"
import About from "./About"
import imgs from "./imgs/thesis4.png"
import './App.css';

class App extends Component {

  constructor(){
    super()

    this.state = {
      page:"projects"
    }

  }


  // Changes state to selected page on button click
  // this function is gonna get passed down to header
  changePage = (toPage) =>{
    this.setState({page:`${toPage}`})
  }


  render() {
    const FeaturedWork = [
      {name: "DIY Doom Index", imageSrc: "./imgs/doom.png", projLink: "https://doom-index.herokuapp.com", subText: "React Web App with Rails Backend", desc: "DIY Doom Index uses macroeconomic, political and environmental data to create a daily index of doom and turmoil. Users can weight and enable provided datasets that will contribute to a calculated doom value."},


      {name: "Sound Level Sign", imageSrc: "./imgs/HonkSign.png", projLink: "http://11bsouth.com/?p=343", subText: "Arduino powered interactive street sign with audio DSP, LED board and solar power", desc: "Modeled after the successful \"Your speed is...\" signs, the Sound Level Sign attempts to address vehicular noise pollution around major intersections. The Sign listens to ambient noise and counts the number of loud peaks it hears (typically car horns). As the Sign hears more loud sounds, the emoji face on the LED board becomes increasingly disgruntled providing emotional feedback to drivers. This project was designed to run on solar power and was made from a modified highway grade street sign."},

      {name: "Radius", imageSrc: "./imgs/radius.png", projLink: "https://itp.nyu.edu/thesis2017/project/jesse-a-horwitz", subText: "A people counting device built with an ESP8266 Wifi module", desc: "My graduate school thesis project, a wearable device that uses Wifi packet sniffing to estimate the nearby population. Data are visualized in realtime on the device and stored in CSV format. The goal is to establish a new urban metric of “experienced population density” to fill important gaps in current census based density metrics."}
    ]

    const SoftwareWork = [
      {name: "Spots", imageSrc: "./imgs/spots.png", projLink: "https://github.com/LaneMiller/Spots", subText: "A vanilla Javascript and Rails based geolocation app", desc: "Spots is an app that helps people meet up at a central location. Simply enter your location and the locations of your friends and click a destination category. Spots will calculate the average point between your group and find the closest restaurant, bar or movie theater. In addition users can add new destinations to their spots database using the google places API."},

      {name: "New DensCity", imageSrc: "./imgs/dencity.png", projLink: "https://api.mapbox.com/styles/v1/superjesseh/cilk3zlya004jaqludlse9hel.html?title=true&access_token=pk.eyJ1Ijoic3VwZXJqZXNzZWgiLCJhIjoiY2lrc2trd3R2MDAwNXVmamNobmNzN3dqbCJ9.6YQ41FTM1t3QfhTEbGgSpA#13/40.7308/-73.96831/29", subText: "A Mapbox project with land use and subway crowding data", desc: "A digital mapping project that highlights the relationship between New York’s over crowded  subways and new construction projects. Data from New York’s planning department was used in conjunction with crowd ratings from a transit advocacy non-profit. Subway lines are color coded based on crowding and the new buildings by number of floors."},

      {name: "Crowd Detector", imageSrc: "./imgs/crowd.png", projLink: "https://docs.google.com/presentation/d/1dCJz6-dolcK_QX40a1dPm8yoPmERUgrKicgm4sFW260/edit?pli=1#slide=id.p", subText: "An image classification project using Python and Tensorflow", desc: "This machine learning project classifies crowding using a retrained convolutional neural net (CNN).  The project is based on Tensorflow, the Imagenet dataset, and three hundred tagged images from various public webcams. The output can be used with a python script on low powered devices such as the RaspberryPi to classify live images."},
    ]

    const HardwareWork = [
      {name: "Everyday Spectacle", imageSrc: "./imgs/spectical.png", projLink: "http://11bsouth.com/?p=452", subText: "A display piece built from canvas and EL wire", desc: "Everyday Spectacle compares the spectacle of New York as a global icon with the quotidian paths of its residents. A series of routes are highlighted in EL wire to construct a an image of NYC carved by its own people. New routes are regularly added ontop of one another to create a bright protruding mesh of illuminated wire that forms a tableau of the city."},

      {name: "ZombieBook Pro", imageSrc: "./imgs/zombie.png", projLink: "https://itpreadymades.wordpress.com/2017/03/22/zombiebook-pro/", subText: "An interactive artwork built with Arduino and salvaged Macbook parts", desc: "A readymade instructional artwork that references the infamous Milgrahm experiments. The user is asked to perform a variety of bizarre tasks to fix a broken computer. It seems to respond to the users attempts with lights and sounds until they are ultimately instructed to pull the plug and bring the computers “life” to an end."},

      {name: "Ahead of the Times", imageSrc: "./imgs/ahead.png", projLink: "https://itpreadymades.wordpress.com/2017/05/05/ahead-of-the-times/", subText: "A shoe with on board Raspberry Pi and mini projector", desc: "Another readymade project. Satbir Multani and I built a pair of shoes that projected news headlines behind the user as they walked around. The objective was to contrast global events with the metaphorical “ground truth” of the user’s present environment. A second pair was made for commercial use with instagram content."},

      {name: "Pointers Chess Set", imageSrc: "./imgs/chess.png", projLink: "http://11bsouth.com/?p=474", subText: "A 3D design project", desc: "A chess set designed with new players in mind. Each piece has a crown that indicates the types of moves it can make on the board. The knight, for instance, has its points arranged in L-shapes and the queen has outward facing points in all eight directions. Prototypes were made using a 4-axis mill and the final set is currently on order for high quality 3D printing."},
    ]

    const Ventures = [{name: "ProDigit Accessories", imageSrc: "./imgs/prodigit.png", projLink: "https://theprodigit.com/", subText: "A 3D printed smartphone accessories company", desc: "ProDigit Accessories designs and fabricates smartphone grips an accessories. I personally design and fabricate our current product and work with my co-founder Scott Tong on manufacturing logistics, packaging and retail. Contact me for bulk orders or custom designs!"}]

    const About = [{name: "Jesse Horwitz", imageSrc: "./imgs/thesis4.png", projLink: "https://www.linkedin.com/in/j-horwitz/", subText:"<button><a href='https://www.linkedin.com/in/j-horwitz/'>Linkedin</a></button><button><a href='https://github.com/SuperJesseH'>Github</a></button><button><a href='http://www.twitter.com/superjesseh'>Twitter</a></button>", desc: "Full stack web developer with a passion for solving urban issues and finding new applications for emerging technology. I have experience working with Ruby on Rails, JavaScript, and React and a background in social science, digital media, hardware and product development. <p> I like working on projects that take complex data sets or systems and make them casually accessible for users.</p><p> When I was an Analyst at MTV I would work with analytics data from 12 different mobile apps and build reports, presentations and interactive spreadsheets to help others in the company make decisions about content and marketing. In graduate school at NYU’s ITP, I built interactive tech products that would collect unusual datasets and surface this information to users in fun or provocative ways. A good example of this is my thesis project, Radius, which was a compact device that could sniff WiFi signals and estimate how many people were in the surrounding area. This data was then exported to mapping applications and used to create a new type of geo-social dataset reflecting the “experienced population density” in cities, towns, and rural areas. Since then I’ve focused on solidifying my software development abilities so I can apply my existing interests and skills to a new set of problems, collaborate with bigger teams and build products that reach a larger audience. </p> <p> Going forward I’m interested in working on web based apps, hardware, and data analysis. Anything related to civic/urban tech, infrastructure or interactivity is appealing to me. Outside of those interests, I’ve been studying Machine Learning with Tensorflow, decentralized computing and digital fabrication with 3D printers, Laser cutters and CNCs.</p> <p>I’m also co-founder of ProDigit Accessories where I manufacture smartphone and other tech accessories on a part-time basis.</p> <p> I can be reached by email, on LinkedIn or twitter. Let me know how we can work together.</p>"}]

    return (
      <div className="App">
        <Header changePage={this.changePage}/>
        {this.state.page === "about" ? <Section secName={"About"} content={About}/> :
        <React.Fragment>
          <Section secName={"Top Projects"} content={FeaturedWork}/>
          <Section secName={"Software"} content={SoftwareWork}/>
          <Section secName={"Hardware"} content={HardwareWork}/>
          <Section secName={"Ventures"} content={Ventures}/>
        </React.Fragment>
        }
      </div>
    );
  }
}

export default App;
