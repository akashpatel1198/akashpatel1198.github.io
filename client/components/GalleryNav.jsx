import React from "react";
import { Link } from "react-router-dom";

const GalleryNav = () => {
  return (
    <div id="navbar">
      <Link to='/'>
        <button id='home-btn'>Home</button>
      </Link>
      <div></div>
    </div>
  );
};

export default GalleryNav;