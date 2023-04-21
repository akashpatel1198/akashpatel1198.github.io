import React from "react";
import Background from "./Background";
import Gallery from "./Gallery";
import { useNavContext } from "../contexts/NavContext";


const MainContainer = () => {
  const navState = useNavContext().navState
  let page = <div>No Page Loaded</div>
  if (navState === 'Home') page = <Background></Background>;
  else if (navState === 'Gallery') page = <Gallery></Gallery>;

  return (
    <div>
      {page}
    </div>
  );
};

export default MainContainer;