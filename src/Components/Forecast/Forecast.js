import React from 'react';

import './forecast.css';

const Forecast = (props) => {
    return (
        <div>
            <div className="label">Later today</div>
            <div className="grid">
                <div>
                    <p className="temp">{props.temp1}°</p>
                    <div className="time">
                        {props.time1}
                    </div>
                </div>
                <div>
                    <p className="temp">{props.temp2}°</p>
                    <div className="time">
                        {props.time2}
                    </div>
                </div>
                <div>
                    <p className="temp">{props.temp3}°</p>
                    <div className="time">
                        {props.time3}
                    </div>
                </div>
            </div>
            <button onClick={() => { props.onClick(props.longitude, props.latitude) }}>REFRESH</button>
        </div>
    )
}

export default Forecast;