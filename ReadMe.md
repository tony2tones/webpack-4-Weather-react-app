Webpack 4 setup and configuration

tutorial can be found in the following link
https://www.valentinog.com/blog/webpack-tutorial/

Carousel

https://react-slick.neostack.com/docs/get-started

Weather forecast
https://stackoverflow.com/questions/37082501/how-to-get-7-day-forecast-from-openweathermap-using-json-data

async getForecastData() {
		this.setState({ loading: true });
		const result = await fetchForecastByCityName(this.cityName);
		this.setState({
			loading: false,
			forecast: result.list.map(item => ({
				date: moment(item.dt * 1000),
				temp: item.main.temp,
				humidity: item.main.humidity,
				weather: item.weather[0],
			}))
		});
	}