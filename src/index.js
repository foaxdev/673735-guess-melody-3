import ReactDOM from "react-dom";
import {App} from "./components/app";
import React from "react";

const POSSIBLE_MISTAKES_QUANTITY = 5;

ReactDOM.render(
    <App mistakes={POSSIBLE_MISTAKES_QUANTITY}/>,
    document.getElementById(`root`)
);
