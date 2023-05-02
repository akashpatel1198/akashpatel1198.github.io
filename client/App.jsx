import React from "react";
import MainContainer from "./containers/MainContainer";
import { BrowserRouter } from "react-router-dom";

const App = () => {

  return (
    <BrowserRouter>
      <MainContainer></MainContainer>
    </BrowserRouter>
  );
};

export default App;