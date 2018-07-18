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
                        {props.temp1}
                    </div>
                </div>
                <div>
                    
                    <p>{props.later}</p>
                    <div id="item1">
                        {props.temp2}
                    </div>
                </div>
                <div>
                    
                    <p>{props.later}</p>
                    <div id="item1">
                        {props.temp3}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forecast;