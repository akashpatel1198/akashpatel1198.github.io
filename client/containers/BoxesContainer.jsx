import React from "react";
import CurrentFilters from "../components/CurrentFilters";
import BoxesMain from "./BoxesMain";


const BoxesContainer = () => {
  return (
    <div id="boxes-container">
      <h1>Explore</h1>
      <CurrentFilters></CurrentFilters>
      <BoxesMain></BoxesMain>
    </div>
  );
};

export default BoxesContainer;