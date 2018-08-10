import React from 'react';
import { shallow } from 'enzyme';

import Weather from './Weather';

const C_TEMP = 'C_TEMP';
const LOCATION = 'LOCATION';
const WEATHERNAME = 'WEATHERNICENAME';

test('should render an `location to exist`', () => {
    const wrapper = shallow(<Weather
        location={LOCATION}
        cTemp={C_TEMP}
        WEATHERNAME={WEATHERNAME}
    />);
    const expected = true;
    const actual = wrapper.find('.location').exists();
    expect(actual).toBe(expected);
});

test('Passes the props through correctly', () => {
    const wrapper = shallow(<Weather
        location={LOCATION}
        cTemp={C_TEMP}
        weatherNiceName={WEATHERNAME}
    />);
    const expectedLocation = LOCATION;
    const expectedCTemp = `${C_TEMP}°`;
    const expectedWeatherName = WEATHERNAME;

    const actualLocation = wrapper.find('[data-qa="weather__location"]').text();
    const actualCTemp = wrapper.find('[data-qa="centered__temp"]').text();
    const actualWeatherName = wrapper.find('[data-qa="weather__name"]').text();

    expect(actualLocation).toBe(expectedLocation);
    expect(actualCTemp).toBe(expectedCTemp);
    expect(actualWeatherName).toBe(expectedWeatherName);

});
