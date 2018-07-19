import React from 'react';

import './forecast.css';

const Forecast = (props) => {
    return (
        <div>
            <p>Later today</p>
            <div className="grid">
                <div>

                    <p>{props.temp1}</p>
                    <div className="time">
                        {props.time1}
                    </div>
                </div>
                <div>

                    <p>{props.temp2}</p>
                    <div className="time">
                        {props.time2}
                    </div>
                </div>
                <div>

                    <p id="item3">{props.temp3}</p>
                    <div className="time">
                        {props.time3}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Forecast;