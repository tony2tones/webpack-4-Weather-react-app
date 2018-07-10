import React from 'react';

import "./Weather.css";

const Weather = (props) => (
    <div className="wrapper">
        <div className="card">
            <img src='https://www.farmersalmanac.com/wp-content/uploads/2009/08/blueMoon2-600x398.jpg' alt="moon image" width="400px"></img>
            <h3 className="centered">{props.location}</h3>
            <p>{props.fTemp}</p>
        </div>
    </div>
);

export default Weather;