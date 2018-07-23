import React, { Component } from 'react';
import request from 'superagent';
import ReactDOM from 'react-dom';
import moment from 'moment';

import Weather from './Components/Weather/Weather';
import Forecast from './Components/Forecast/Forecast';
import ErrorMessage from './Components/ErrorMessages/ErrorMessage';

// Constant variables
const apiKEY = '53f9d8e4213222cf517d86dc406d67fc';
const baseURL = 'http://api.openweathermap.org/data/2.5/weather';
const apiForeCast = 'http://api.openweathermap.org/data/2.5/forecast';

// let loader = 

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
    static dateFormatter(date) {
        return moment(date).format('MMMM');
    }
    static timeFormatter(time) {
        return moment(time * 1000).format('HH:mm');
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
                temp1: '',
                temp2: '',
                temp3: '',
                cTemp1: '',
                cTemp2: '',
                cTemp3: '',
                time1: '',
                time2: '',
                time3: '',
                laterTime: '',
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
                fTime1: '',
                fTime2: '',
                fTime3:'',
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
                this.setState({ broken: true });
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
                this.setState({ broken: true });
            });
    };

    mapForecastData(data) {
        const time1 = data.list[0].dt;
        const fTime1 = App.timeFormatter(time1);
        const time2 = data.list[1].dt;
        const fTime2 = App.timeFormatter(time2);
        const time3 = data.list[2].dt;
        const fTime3 = App.timeFormatter(time3);
        const temp1 = data.list[0].main.temp;
        const cTemp1 = App.convertKelvinToCel(temp1);
        const temp2 = data.list[1].main.temp;
        const cTemp2 = App.convertKelvinToCel(temp2);
        const temp3 = data.list[2].main.temp;
        const cTemp3 = App.convertKelvinToCel(temp3);
        this.setState({
            ...this.setState,
            weather: {
                ...this.state.weather,
                cTemp1,
                cTemp2,
                cTemp3,
                fTime1,
                fTime2,
                fTime3,
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
            showError,
            isLoading,
            curTime,
            weather: {
                cTemp,
                weatherNiceName,
                location,
                cTempMax,
                cTempMin,
                cTemp1,
                cTemp2,
                cTemp3,
                fTime1,
                fTime2,
                fTime3,
            }
        } = this.state;
        return (
            <div>
                <div className="icon" />
                {showError && <ErrorMessage />}
                {isLoading && <div className="loader" />}
                {!showError &&
                <Weather
                    cTemp={cTemp}
                    location={location}
                    weatherNiceName={weatherNiceName}
                    cTempMax={cTempMax}
                    cTempMin={cTempMin}
                    time={curTime}
                    time1={fTime1}
                    time2={fTime2}
                    time3={fTime3}
                    temp1={cTemp1}
                    temp2={cTemp2}
                    temp3={cTemp3}
                    onClick={this.getLocation}
                /> }
            </div>
        )
    };
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));