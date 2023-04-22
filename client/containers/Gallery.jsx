import React from "react";
import GalleryNav from "../components/GalleryNav";
import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <motion.div id="Gallery"
    initial={{opacity: 0, x: -500}}
    animate={{opacity: 1, x: 0}}
    exit={{opacity: 0, x: -500}}
    >
      <GalleryNav></GalleryNav>
      <div>Gallery PlaceHolderText</div>
    </motion.div>
  );
};

export default Gallery;