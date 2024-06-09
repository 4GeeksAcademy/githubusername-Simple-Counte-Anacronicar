import React from "react";
import PropTypes from 'prop-types'; 

const CounterSecond = (props) => {
  return (
    <div className="container-fluid col-10 d-flex justify-content-center bg-primary py-4 text-white rounded-3">
      <h1 className="m-3">{props.hoursV} h </h1>
      <h1 className="m-3"> {props.minutesV} m</h1>
      <h1 className="m-3"> {props.secondsV} s</h1>
    </div>
  );

};
CounterSecond.propTypes = {
    hoursV: PropTypes.number,
    minutesV: PropTypes.number,
    secondsV: PropTypes.number,
  };

export default CounterSecond