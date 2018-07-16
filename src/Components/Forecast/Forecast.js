import React from 'react';

import './forecast.css';

const Forecast = (props) => {
    return (
        <div className="grid">
            <div id="item1">{props.cTomorrowWeather}</div>
            <div id="item2">233</div>
        </div>
    )
}

export default Forecast;