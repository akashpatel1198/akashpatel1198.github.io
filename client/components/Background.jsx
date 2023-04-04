import React, { useRef } from "react";
import Ocean from "../../images/Ocean.png"
import LogoMain from "../../images/Logo_Main.png"
import LogoShield from "../../images/Logo_Shield.png"
import Rope from "../../images/Rope_Crop.png"
import Navbar from "./Navbar";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// sticky={{start: 0, end: 3}
const Background = () => {
  const mainRef = useRef();

  return (
    <Parallax id="p-container" pages={8} ref={mainRef}>
      <ParallaxLayer offset={0} speed={1} sticky={{start: 0, end: 1}}
      style={{backgroundColor: 'violet', opacity: '.7' ,height: '60px', overflow: 'hidden'}}
      id='nav-container'>
          <Navbar></Navbar>
      </ParallaxLayer>

      <ParallaxLayer offset={.1} speed={-.6}
      style={{}}>
        <img src={LogoShield} style={{width: '10%'}}></img>
      </ParallaxLayer>

      <ParallaxLayer offset={.2} speed={-.4} 
      style={{}}>
        <img src={LogoMain} style={{width: '60%'}}></img>
      </ParallaxLayer>

      <ParallaxLayer offset={.7} speed={0} factor={2}
      style={{backgroundImage: `url(${Ocean})`, backgroundSize: '100% 100%', overflow: 'hidden'}}
      id='ocean-container'>
        {/* <img src={Ocean} style={{width: '2000px'}}></img> */}
        <div id='ocean-text'>
          <h4>THIS IS SOME TEXT</h4>
          <h4>THIS IS SOME TEXT</h4>
          <h4>THIS IS SOME TEXT</h4>
        </div>
      </ParallaxLayer>

      <ParallaxLayer offset={2.7} sticky={{start: 2.7, end:3.8}} speed={0} 
      style={{backgroundColor: 'violet', opacity: '.7'}}>
        <img src={Rope} style={{width: '100vw'}}></img>
        <div>Inner text for Violet Test</div>
      </ParallaxLayer>

      {/* <ParallaxLayer speed={1} sticky={{start: 1.7, end: 2.7}}
      style={{}}>
        <img src={Rope} style={{position: 'absolute', top: '0px', left: '0px', width: '100vw'}}></img>
      </ParallaxLayer> */}

    </Parallax>
  );
};

export default Background;