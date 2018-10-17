import React from 'react';

import "./Weather.css";
import WeatherType from './WeatherType/WeatherType';

const Weather = (props) => (
    <div>
        
        <div>{props.time}</div>
        <WeatherType
            weatherType={props.weatherNiceName}
        />
        <div className="location" data-qa="weather__location">{props.location}</div>
        <div className="WeatherName" data-qa="weather__name">{props.weatherNiceName}</div>
        <div className="centered" data-qa="centered__temp">{props.cTemp}°</div>
    </div>
);

export default Weather;