import React from "react";
import { useNavContext } from "../contexts/NavContext";

const Navbar = () => {
  const setNavState = useNavContext().setNavState;
  const changePage = () => {
    setNavState('Gallery')
  }

  return (
    <div id="navbar">
      <button id='gallery-btn' onClick={changePage}>Gallery</button>
      <button id='connect-btn'>Connect Wallet</button>
    </div>
  );
};

export default Navbar;