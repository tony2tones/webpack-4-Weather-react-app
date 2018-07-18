import React from 'react';

import './forecast.css';

const Forecast = (props) => {
    return (
        <div>
            <p>Later today</p>
            <div className="grid">
            
                <div>
                    
                    <p>{props.later}</p>
                    <div id="item1">
                        {props.cTomorrowWeather}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forecast;