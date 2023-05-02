import React, { useState } from "react";
import SingleTrait from "./SingleTrait";

const Traits = () => {

  return (
    <div id="traits">
      <h1>Traits</h1>
      <SingleTrait layer={'Background'}></SingleTrait>
      <SingleTrait layer={'Skin'}></SingleTrait>
      <SingleTrait layer={'Eyes'}></SingleTrait>
      <SingleTrait layer={'Outfit'}></SingleTrait>
      <SingleTrait layer={'Eyewear'}></SingleTrait>
      <SingleTrait layer={'Mouth'}></SingleTrait>
      <SingleTrait layer={'Hat'}></SingleTrait>
      <SingleTrait layer={'Earring'}></SingleTrait>
    </div>
  );
};

export default Traits;