import React from 'react';

import './errorMessage.css';

const ErrorMessage = () => {
    return (
        <div className="wrapper">
            <div className="card">
                <img src='../src/assets/img/mushie-worries2.png' alt="moon image" width="370px" height="300px"></img>
                <span>Please allow us to use your location for the latest weather updates.</span>
            </div>
        </div>
    )
}

export default ErrorMessage;