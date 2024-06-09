import React from "react";
import CounterSecond from "./CounterSecond";
import "../index.js"

//include images into your bundle


//create your first component
const Home = (props) => {
	return (
		<div className="text-center">
			<CounterSecond hoursV = {props.hoursV} minutesV = {props.minutesV} secondsV = {props.secondsV} />
		</div>
	);
};

export default Home;
