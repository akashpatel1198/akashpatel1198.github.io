import React from "react";
import LogoShield from "../../images/Logo_Shield.png"

const ENS = () => {
  return (
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
  );
};

export default ENS;