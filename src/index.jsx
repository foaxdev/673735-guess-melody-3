import ReactDOM from "react-dom";
import React from "react";
import {App} from "./components/app/app";

const POSSIBLE_MISTAKES_QUANTITY = 5;

ReactDOM.render(
    <App mistakes={POSSIBLE_MISTAKES_QUANTITY}/>,
    document.getElementById(`root`)
);
