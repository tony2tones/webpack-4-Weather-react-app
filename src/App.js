import React, { Component } from 'react';
import request from 'superagent';
import ReactDOM from "react-dom";

import Weather from './Components/Weather/Weather';
import Forecast from './Components/Forecast/Forecast';

// Constant variables
const apiKEY = '53f9d8e4213222cf517d86dc406d67fc';
const baseURL = 'http://api.openweathermap.org/data/2.5/weather';
const apiForeCast = 'http://api.openweathermap.org/data/2.5/forecast';

class App extends Component {
    static apiForeCast(latitude, longitude) {
        return `${apiForeCast}?lat=${latitude}&lon=${longitude}&appid=${apiKEY}`;
    }
    static apiUrl(latitude, longitude) {
        return `${baseURL}?lat=${latitude}&lon=${longitude}&appid=${apiKEY}`;
    }
    static convertKelvinToCel(deg) {
        return Math.round(parseInt(deg, 10) - 273.15);
    }
    // static getWeekDay(data) {
    //     this.setState({
    //         weekday:data.list.slice(0,7).map(function(day) {
    //         weekday = new Date(day.time * 1e3).getDay();
    //         }
    //     })
    // });

        
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
                fTomorrowWeather: '',
                cTomorrowWeather: '',
                weekday: [],
            },
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                curTime: new Date().getHours() + ':' + new Date().getMinutes()
            })
        }, 60000)

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
        const getLocation1 = ({ latitude, longitude }) => {
            request
                .get(App.apiForeCast(latitude, longitude))
                .set('accept', 'json')
                .then((res) => {
                    this.mapForecastData(res.body);
                })
                .catch(() => {
                    // err.message, err.response
                });
        };

        // This is if user accept location permission
        const geoSuccess = ({ coords }) => {
            this.setState({ showError: false });
            getLocation(coords);
            getLocation1(coords);
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
   
    mapForecastData(data) {
        const fTomorrowWeather = data.list[1].main.temp;
        const cTomorrowWeather = App.convertKelvinToCel(fTomorrowWeather);
        const weekday = App.getWeekDay(data);
        console.log(weekday);
        this.setState({
            ...this.setState,
            weather: {
                ...this.state.weather,
                cTomorrowWeather,
            }
        });
    }
    mapData(data) {
        const fTemp = data.main.temp;
        const fTempMax = data.main.temp_max;
        const fTempMin = data.main.temp_min;
        const cTemp = App.convertKelvinToCel(fTemp);
        const cTempMax = App.convertKelvinToCel(fTempMax);
        const cTempMin = App.convertKelvinToCel(fTempMin);
        const weatherNiceName = data.weather[0].description.toUpperCase();
        const location = data.name.toUpperCase();

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
                location,
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
                cTempMin,
                cTomorrowWeather,
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
                    cTomorrowWeather={cTomorrowWeather}
                />

            </div>
        )
    };
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));