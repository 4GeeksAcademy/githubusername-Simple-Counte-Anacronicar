//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

let hours = 0;
let minutes = 0;
let seconds = 0;
let counter = null

const startCount = () => {
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
    }
    if (minutes == 60) {
      minutes = 0;
      hours++;
    }
    displayTime();
}
//render your react application
const displayTime = () => {
    ReactDOM.render(<Home hoursV = {hours} minutesV = {minutes} secondsV = {seconds} />, document.querySelector("#app"));
}

counter = setInterval(startCount, 1000);
displayTime();
