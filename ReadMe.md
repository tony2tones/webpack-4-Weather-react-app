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
------------------------------------------------------------------
	- Install `jest` as a `devDependency`.

- Install `enzyme` and `enzyme-adapter-react-16` as `devDependecy`(ies).

- Build yourself a `jest.config.json` file.

- Add a `test-setup.js` file and add it to `jest.config.json`:

```// eslint-disable-next-line import/no-extraneous-dependencies

import { configure } from 'enzyme';

// eslint-disable-next-line import/no-extraneous-dependencies

import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });```

- Add a script for `jest`: `jest --config=./jest.config.json --coverage`

- Build a friggin' test

References:

Jest: https://jestjs.io/

Enzyme: http://airbnb.io/enzyme/ 