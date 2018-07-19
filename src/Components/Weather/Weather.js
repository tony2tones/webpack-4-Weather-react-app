import React from 'react';

import Forecast from '../Forecast/Forecast';
import "./Weather.css";

const Weather = (props) => (
    <div className="wrapper">
        <div className="card">
        <div>{props.time}</div>
            <div>
                <img src='../src/assets/img/darkimg.png' alt="moon image" width="370px" height="300px"></img>
            </div>
            <div className="location">{props.location}</div>
            <div className="WeatherName">{props.weatherNiceName}</div>
            <div className="centered">{props.cTemp}°</div>
            <Forecast 
            time1={props.time1}
            time2={props.time2}
            time3={props.time3}
            temp1={props.temp1}
            temp2={props.temp2}
            temp3={props.temp3}
            />
            <button onClick={props.getLocation}>REFRESH</button>
        </div>
    </div>
);

export default Weather;