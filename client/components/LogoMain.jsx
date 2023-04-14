import React from "react";
import LogoMainSrc from "../../images/Logo_Main.png"

const LogoMain = () => {
  return (
    <div id='logo-main'>
      <img src={LogoMainSrc} style={{width: '60%'}}></img>
      <h1>A Web 3 Initiative made for the fans of full send </h1>
      <p>*Unaffiliated with Nelk*</p>
    </div>
  );
};

export default LogoMain;