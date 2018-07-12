import React from 'react';

import "./Weather.css";

const Weather = (props) => (
    <div className="wrapper">
        <div className="card">
            <div>
                <img src='https://www.farmersalmanac.com/wp-content/uploads/2009/08/blueMoon2-600x398.jpg' alt="moon image" width="370px" height="300px"></img>
            </div>
            <div className="location">{props.location}</div>
            <div className="WeatherName">{props.weatherNiceName}</div>
            <div className="centered">{props.cTemp}°</div>
            <p>{props.cTempMax}° /{props.cTempMin}°</p>
            <p>Gibberish</p>
            <button onClick={() => window.location.reload()}>REFRESH</button>
        </div>
    </div>
);

export default Weather;