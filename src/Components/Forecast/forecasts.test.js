import React from 'react';
import { shallow } from 'enzyme';

import Forecast from './Forecast';

const TEMP1 = 'TEMP1';
const TIME1 = 'TIME1';
const TEMP2 = 'TEMP2';
const TIME2 = 'TIME2';
const TEMP3 = 'TEMP3';
const TIME3 = 'TIME3';

test('should render an `location to exist`', () => {
    const wrapper = shallow(<Forecast
        location={LOCATION}
        cTemp={C_TEMP}
        WEATHERNAME={WEATHERNAME}
    />);
    const expected = true;
    const actual = wrapper.find('.location').exists();
    expect(actual).toBe(expected);
});

test('Passes the props through correctly', () => {
    const wrapper = shallow(<Forecast
        location={LOCATION}
        cTemp={C_TEMP}
        WEATHERNAME={WEATHERNAME}
    />);
    const expectedLocation = LOCATION;
    const expectedCTemp = `${C_TEMP}°`;
    const expectedWeatherName = WEATHERNAME;

    const actualLocation = wrapper.find('[data-qa="weather__location"]').text();
    const actualCTemp = wrapper.find('[data-qa="centered__temp"]').text();
    const actualWeatherName = wrapper.find('[data-qa="weather__name"]').text();

    expect(actualLocation).toBe(expectedLocation);
    expect(actualCTemp).toBe(expectedCTemp);
    console.log(WEATHERNAME, ' ', LOCATION, ' ',C_TEMP);
    expect(actualWeatherName).toBe(expectedWeatherName);

});

// test('should check for classname iconHeader', () => {
//   const wrapper = shallow(<Weather
//     location={LOCATION}
//     cTemp={C_TEMP}
//     cTempMax={WEATHERNICENAME}
//     cTempMin={C_TEMP_MIN}
//     weatherNiceName={WEATHER_NAME}
//     icon={ICON}
//   />);

//   const expected = true;
//   const actual = wrapper.find('.iconHeader').exists();

//   expect(actual).toBe(expected);
// });
