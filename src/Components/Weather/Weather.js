import React from 'react';

import "./Weather.css";

const Weather = (props) => (
    <div>
        <div>{props.time}</div>
        <img src='../src/assets/img/darkimg.png' alt="moon image" width="370px" height="300px"></img>
        <div className="location">{props.location}</div>
        <div className="WeatherName">{props.weatherNiceName}</div>
        <div className="centered">{props.cTemp}°</div>
    </div>
);

export default Weather;