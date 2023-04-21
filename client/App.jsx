import React from "react";
import MainContainer from "./containers/MainContainer";
import { NavContextProvider} from "./contexts/NavContext";

const App = () => {

  return (
    <NavContextProvider>
      <MainContainer></MainContainer>
    </NavContextProvider>
  );
};

export default App;