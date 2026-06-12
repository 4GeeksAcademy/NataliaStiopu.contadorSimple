import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "../styles/index.css";

import Home from "./components/Home";

let seconds = 0;
let alerted = false;

const root = ReactDOM.createRoot(document.getElementById("root"));

setInterval(function () {
    root.render(<Home seconds={seconds} />);
     if (seconds === 10 && !alerted) {
        alert("⏰ Llegaste a 10 segundos");
        alerted = true;
    }
    seconds++;

}, 1000);