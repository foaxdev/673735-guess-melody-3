import React from "react";
import PropTypes from "prop-types";
import {WelcomeScreen} from "../welcome-screen/welcome-screen";

export const App = (props) => {
  return (
    <WelcomeScreen mistakes={props.mistakes} onWelcomeButtonClick={props.onWelcomeButtonClick}/>
  );
};

App.propTypes = {
  mistakes: PropTypes.number.isRequired,
  onWelcomeButtonClick: PropTypes.func.isRequired
};
