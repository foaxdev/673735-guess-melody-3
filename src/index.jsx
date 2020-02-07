import ReactDOM from "react-dom";
import React from "react";
import {App} from "./components/app/app";

const POSSIBLE_MISTAKES_QUANTITY = 5;
const WELCOME_BUTTON_HANDLER = () => {};

ReactDOM.render(
    <App mistakes={POSSIBLE_MISTAKES_QUANTITY} onWelcomeButtonClick={WELCOME_BUTTON_HANDLER}/>,
    document.getElementById(`root`)
);
