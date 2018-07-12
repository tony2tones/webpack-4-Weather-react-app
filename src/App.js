import React, { Component } from 'react';
import request from 'superagent';
import ReactDOM from "react-dom";

import Weather from './Components/Weather/Weather';

// Constant variables
const apiKEY = '53f9d8e4213222cf517d86dc406d67fc';
const baseURL = 'http://api.openweathermap.org/data/2.5/weather';

class App extends Component {
    static apiUrl(latitude, longitude) {
        return `${baseURL}?lat=${latitude}&lon=${longitude}&appid=${apiKEY}`;
    }
    static convertKelvinToCel(deg) {
        return Math.round(parseInt(deg, 10) - 273.15);
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
            curTime: '',
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
        setInterval(() => {
            this.setState({
                curTime: new Date().getHours() + ':' + new Date().getMinutes()
            })
        }, 1000)

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
            this.setState({ showError: true })
        }

        const brokenError = () => {
            this.setState({ showError: true });
        }

        // What to do if location is found
        if (navigator.geolocation) {
            const gl = navigator.geolocation;
            gl.getCurrentPosition(geoSuccess, geoFail);
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

    mapData(data) {
        const fTemp = data.main.temp;
        const fTempMax = data.main.temp_max;
        const fTempMin = data.main.temp_min;
        const cTemp = App.convertKelvinToCel(fTemp);
        const cTempMax = App.convertKelvinToCel(fTempMax);
        const cTempMin = App.convertKelvinToCel(fTempMin);
        const weatherNiceName = data.weather[0].description.toUpperCase();
        const location = data.name.toUpperCase();
        console.log(data);

        this.setState({
            ...this.setState,
            weather: {
                fTemp,
                fTempMax,
                fTempMin,
                cTemp,
                cTempMax,
                cTempMin,
                weatherNiceName,
                location
            }
        });
    }

    render() {
        const {
            curTime,
            weather: {
                cTemp,
                weatherNiceName,
                location,
                cTempMax,
                cTempMin
            }
        } = this.state;
        return (
            <div>
                <Weather
                    cTemp={cTemp}
                    location={location}
                    weatherNiceName={weatherNiceName}
                    cTempMax={cTempMax}
                    cTempMin={cTempMin}
                    time={curTime}
                />
            </div>
        )
    };
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));