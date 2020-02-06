import React from "react";
import {WelcomeScreen} from "./welcome-screen";

export const App = (props) => {
  return (
    // eslint-disable-next-line react/prop-types
    <WelcomeScreen mistakes={props.mistakes}/>
  );
};
