import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const GalleryNav = () => {
  return (
    <div id="gallery-navbar">
      <Link to='/'>
        <button className='style-btn' id='home-btn'>Home</button>
      </Link>
      <h1>Gallery</h1>
      <div></div>
    </div>
  );
};

export default GalleryNav;