import React, { Component } from 'react';
import ReactDOM from "react-dom";

const apiKEY = '53f9d8e4213222cf517d86dc406d67fc';
const baseURL = 'http://api.openweathermap.org/data/2.5/weather';

const App = () => {
    return (
        <div>
            <p>React here! Toasty</p>
        </div>
    );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));