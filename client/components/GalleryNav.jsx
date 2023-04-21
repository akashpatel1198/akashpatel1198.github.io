import React from "react";
import { useNavContext } from "../contexts/NavContext";

const GalleryNav = () => {
  const setNavState = useNavContext().setNavState;
  const changePage = () => {
    setNavState('Home')
  }

  return (
    <div id="navbar">
      <button id='home-btn' onClick={changePage}>Home</button>
      <div></div>
    </div>
  );
};

export default GalleryNav;