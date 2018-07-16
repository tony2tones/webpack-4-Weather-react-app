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
            {/* <p>{props.cTempMax}° /{props.cTempMin}°</p> */}
            <Forecast cTomorrowWeather={props.cTomorrowWeather}/>
            <button onClick={window.location.reload}>REFRESH</button>
        </div>
    </div>
);

export default Weather;