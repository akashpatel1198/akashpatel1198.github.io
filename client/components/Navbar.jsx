import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to='/Gallery'>
        <button className='style-btn' id='gallery-btn'>Gallery</button>
      </Link>

      <button className='style-btn' id='connect-btn'>Connect Wallet</button>
    </div>
  );
};

export default Navbar;