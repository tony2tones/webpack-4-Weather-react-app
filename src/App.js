import React, { Component } from 'react';
import request from 'superagent';
import ReactDOM from "react-dom";

// Constant variables
const apiKEY = '53f9d8e4213222cf517d86dc406d67fc';
const baseURL = 'http://api.openweathermap.org/data/2.5/weather';

class App extends Component {
    static apiUrl(latitude,longitude){
        return `${baseURL}?lat=${latitude}&lon=${longitude}&appid=${apiKEY}`;
    }
    constructor() {
        super();
        this.state = {
            showWeather: false,
            broken: false,
            isLoading: true,
            latitude: null,
            longitude: null,
            error: null,
            showError: false,
            weather: {
                cTemp: '',
                fTemp: '',
                weatherNiceName: '',
                cTempMin: '',
                cTempMax: '',
                fTempMin: '',
                fTempMax: '',
                location: '',
                icon: '',
            },
        };
    }

    componentDidMount() {
        // Get location, and cater for if location is provided
        const getLocation = ({ latitude, longitude }) => {
            request
                .get(App.apiUrl(latitude, longitude))
                .set('accept', 'json')
                .then((res) => {
                    this.mapData(res.body);
                })
                .catch(() => {
                    // err.message, err.response
                });
        };

        // This is if user accept location permission
        const geoSuccess = ({ coords }) => {
            this.setState({ showError: false });
            getLocation(coords);
        }

        // If user declines location permission
        const geoFail = () => {
            this.setState({ showError: true})
        }

        const brokenError = () => {
            this.setState({ showError: true});
        }

        // What to do if location is found
        if (navigator.geolocation) {
            const gl = navigator.geolocation;
            gl.getCurrentPosition(geoSuccess,geoFail);
        } else {
            brokenError();
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
            },
            error => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
        );
    };

    mapData(data){
        const temp = data.main.temp;
        const tempMax = data.main.temp_max;
        const tempMin = data.main.temp_min;
        const weatherNiceName = data.weather[0].description;
        const location = data.name;
        console.log(data);
        console.log(weatherNiceName + ' ' + location);
    }

    render() {
        return (
            <div>
                <p>React here! Toasty</p>
            </div>
        )
    };
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));