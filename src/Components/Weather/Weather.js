import React from 'react';

import "./Weather.css";

const Weather = (props) => (
    <div>
        {console.log(props)}
        <div>{props.time}</div>
        <img src='../src/assets/img/darkimg.png' alt="moon image" width="370px" height="300px"></img>
        <div className="location" data-qa="weather__location">{props.location}</div>
        <div className="WeatherName" data-qa="weather__name">{props.weatherNiceName}</div>
        <div className="centered" data-qa="centered__temp">{props.cTemp}°</div>
    </div>
);

export default Weather;