import React from 'react';

import "./Weather.css";

const Weather = (props) => (
    <div className="wrapper">
        <div className="card">
            <img src='https://www.farmersalmanac.com/wp-content/uploads/2009/08/blueMoon2-600x398.jpg' alt="moon image" width="410px" height="400px"></img>
            <h4 className="topper">{props.location}</h4> 
            <h3 className="centered">{props.cTemp}°</h3>
            <p>{props.weatherNiceName}</p>
            <p>{props.cTemp}</p>
            <p><button>REFRESH</button></p>
        </div>
    </div>
);

export default Weather;