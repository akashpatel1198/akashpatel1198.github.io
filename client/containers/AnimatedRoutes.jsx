import React from "react";
import Background from "./Background";
import Gallery from "./Gallery";
import { Route, Routes, useLocation } from "react-router-dom";
// import {} from 'framer-motion/dist/framer-motion'
import { AnimatePresence } from 'framer-motion'

const MainContainer = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
    <Routes location={location} key={location.pathname}>
      <Route path='/' element={<Background></Background>}>
      </Route>
      <Route path='/Gallery' element={<Gallery></Gallery>}>
      </Route>
    </Routes>
    </AnimatePresence>
  );
};

export default MainContainer;