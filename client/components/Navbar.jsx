import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar">
      <Link to='/Gallery'>
        <button id='gallery-btn'>Gallery</button>
      </Link>

      <button id='connect-btn'>Connect Wallet</button>
    </div>
  );
};

export default Navbar;