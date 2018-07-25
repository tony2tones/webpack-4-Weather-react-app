import React from 'react';

import "./Weather.css";

const Weather = (props) => (
    <div className="wrapper">
        <div>{props.time}</div>
        <div>
            <img src='../src/assets/img/darkimg.png' alt="moon image" width="370px" height="300px"></img>
        </div>
        <div className="location">{props.location}</div>
        <div className="WeatherName">{props.weatherNiceName}</div>
        <div className="centered">{props.cTemp}°</div>
        {/* {console.log('caamaan this is it',props.longitude,props.latitude )} */}
    </div>
);

export default Weather;