import React, { Component } from 'react';
import request from 'superagent';
import ReactDOM from 'react-dom';
import moment from 'moment';

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
    static dateFormatter(date){
        console.log(moment(date).format('MM-DD HH:mm'));
    }

    // static getWeekDay(data) {
    //     this.setState({
    //         weekday:data.list.slice(0,7).map(function(day) {
    //         weekday = new Date(day.time * 1e3).getDay();
    //         }
    //     })
    // });    

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
                time: '',
                toDay: '',
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
                forecast: [],
            },
        };
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                curTime: new Date().getHours() + ':' + new Date().getMinutes()
            })
        }, 60000)

        // This is if user accept location permission
        const geoSuccess = ({ coords }) => {
            this.setState({ showError: false });
            this.getLocation(coords);
            this.getLocation1(coords);
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

    getLocation({ latitude, longitude }) {
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
    getLocation1({ latitude, longitude }) {
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

    mapForecastData(data) {
        const time = data.list[0].dt * 1000;
        toDay = App.dateFormatter(time);
        const fTomorrowWeather = data.list[0].main.temp;
        const cTomorrowWeather = App.convertKelvinToCel(fTomorrowWeather);
        console.log(data);
        console.log('this is the date: ', toDay);
        this.setState({
            ...this.setState,
            weather: {
                ...this.state.weather,
                time,
                cTomorrowWeather,
                // forecast : data.list.map(item => {
                //     date : MediaStreamErrorEvent(item.dt * 1000),
                //     temp: 
                // })
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
                // toDay,
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
                    // toDay={toDay}
                    cTomorrowWeather={cTomorrowWeather}
                    onClick={this.getLocation}
                />
            </div>
        )
    };
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));