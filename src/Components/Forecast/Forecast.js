import React from 'react';

import './forecast.css';

const Forecast = (props) => {
    return (
        <div>
            <div className="label">Later today</div>
            <div className="grid">
                <div>
                    <p className="temp" data-qa="temp_one">{props.temp1}°</p>
                    <div className="time" data-qa="time_one">
                        {props.time1}
                    </div>
                </div>
                <div>
                    <p className="temp" data-qa="temp_two">{props.temp2}°</p>
                    <div className="time" data-qa="time_two">
                        {props.time2}
                    </div>
                </div>
                <div>
                    <p className="temp" data-qa="temp_three">{props.temp3}°</p>
                    <div className="time" data-qa="time_three">
                        {props.time3}
                    </div>
                </div>
            </div>
            {/* <button onClick={() => { props.onClick(props.longitude, props.latitude) }}>REFRESH</button> */}
        </div>
    )
}

export default Forecast;