import React from "react";
import GalleryNav from "../components/GalleryNav";
import BoxesContainer from "./BoxesContainer";
import Traits from "../components/Traits";
import { motion } from "framer-motion";
import { FilterContextProvider } from "../contexts/FilterContext.jsx";

const Gallery = () => {
  return (
    <FilterContextProvider>
    <motion.div id="gallery-container"
    initial={{opacity: 0, x: -500}}
    animate={{opacity: 1, x: 0}}
    exit={{opacity: 0, x: -500}}
    >
      <GalleryNav></GalleryNav>
      <div id='gallery-main'>
      <Traits></Traits>
      <BoxesContainer></BoxesContainer>
      </div>
    </motion.div>
    </FilterContextProvider>
  );
};

export default Gallery;