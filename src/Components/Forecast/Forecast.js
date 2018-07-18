import React from 'react';

import './forecast.css';

const Forecast = (props) => {
    return (
        <div>
            <div className="grid">
                <div>
                    {/* <p>{props.toDay}</p> */}
                    <div id="item1">
                        {props.cTomorrowWeather}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forecast;