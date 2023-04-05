import React, { useRef } from "react";
import Ocean from "../../images/Ocean.png"
import LogoMain from "../../images/Logo_Main.png"
import LogoShield from "../../images/Logo_Shield.png"
import Rope from "../../images/Rope_Crop.png"
import Rainforest from "../../images/Rainforest.png"
import Navbar from "./Navbar";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// sticky={{start: 0, end: 3}
const Background = () => {
  const mainRef = useRef();

  return (
    <Parallax id="p-container" pages={7.3} ref={mainRef}>
      <ParallaxLayer offset={0} speed={1} sticky={{start: 0, end: 1.4}}
      style={{height: '60px', overflow: 'hidden'}}
      id='nav-container'>
          <Navbar></Navbar>
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={-.6}
      style={{}}>
        <img src={LogoShield} style={{width: '10%'}}></img>
      </ParallaxLayer>

      <ParallaxLayer offset={.1} speed={-.4} 
      style={{}}
      id='logo-main'>
        <img src={LogoMain} style={{width: '60%'}}></img>
        <h1>A Web 3 Initiative made for the fans of full send </h1>
        <p>*Unaffiliated with Nelk*</p>
      </ParallaxLayer>

      <ParallaxLayer offset={.7} speed={0} factor={2}
      style={{backgroundImage: `url(${Ocean})`, backgroundSize: '100% 100%', overflow: 'hidden'}}
      id='ocean-container'>
        {/* <img src={Ocean} style={{width: '2000px'}}></img> */}
        <div id='ocean-title'>
          <h1>JOIN THE SEND COLLECTIVE!</h1>
        </div>
        <div id='ocean-text'>
          <h4>ART x LORE
          Our Mission is to use art and storytelling 
          to create a visual component to the Full 
          Send Web 3 Timeline.
          </h4>
          <h4>Empower Community:
          Our first and foremost priority
          is community. We value community
          feedback from you guys and want 
          to serve as a Web 3 extension
          of the Full Send Community. We also
          understand the investment into
          metacards and plan on adding value 
          to them every step of the way.
          </h4>
          <h4>Further Brand:
          We want to utilize the 
          power of the community by
          creating a funnel to contribute
          towards creation, reach, branding
          while rewarding users for 
          participation
          </h4>
        </div>
      </ParallaxLayer>

      <ParallaxLayer sticky={{start: 2.7, end:3.7}} speed={0} 
      style={{backgroundColor: 'black'}}
      id='black-section'>
        <h1>h1 test</h1>
      </ParallaxLayer>
      
      <ParallaxLayer sticky={{start: 2.7, end:4.7}} speed={0} factor={2}
      style={{}}>
        <img src={Rope} style={{width: '100vw', top: '-15px', position: 'relative'}}></img>
      </ParallaxLayer>

      <ParallaxLayer sticky={{start: 4.7, end:4.7}} speed={0} 
      style={{}}>
        <img src={Rope} style={{width: '100vw', top: '-15px', position: 'relative'}}></img>
      </ParallaxLayer>

      <ParallaxLayer offset={4.7} speed={0} factor={1.3} 
      style={{backgroundImage: `url(${Rainforest})`, backgroundSize: '100% 100%', overflow: 'hidden'}}
      id='rainforest'>
      </ParallaxLayer>

      <ParallaxLayer offset={4.7} speed={.4} 
      style={{}}
      id='rainforest-text'>
        <div id='rf-inner'>
          <div id='logo'>
            <h1>ENS Governance</h1>
            <img src={LogoShield} style={{width: '19%'}}></img>
          </div>
          <div id='text'>
            <p>
              We here at DCLA hold the keys 
              to fullsend.eth, nelk.eth, and 
              stevewilldoit.eth.
            </p>
            <p>
              We’re aiming to use these assets 
              as tools to empower the SC and 
              Metacard Community while furthering 
              the FS Brand. We have a very skilled 
              team of designers and artists and 
              we've been active members of the 
              Web 3 community for over 2 years now.
            </p>
          </div>
        </div>
      </ParallaxLayer>
      
      <ParallaxLayer offset={6} speed={0}
      style={{backgroundColor: "black"}}
      id='none'>
      </ParallaxLayer>

      <ParallaxLayer offset={7} speed={0} factor={.3}
      style={{backgroundColor: "white"}}
      id='none2'>
      </ParallaxLayer>

    </Parallax>
  );
};

export default Background;