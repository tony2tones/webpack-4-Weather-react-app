import React from 'react';

const Weather = (props) => (

    <div className="card">
        <img src='https://www.farmersalmanac.com/wp-content/uploads/2009/08/blueMoon2-600x398.jpg' alt="moon image" width="25%"></img>
        <h1>{props.location}</h1>
        <p>{props.fTemp}</p>
    </div>

);

export default Weather;