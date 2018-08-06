import React from 'react';
import { shallow } from 'enzyme';

import Weather from './Weather';

// const C_TEMP = 'C_TEMP';
const LOCATION = 'LOCATION';
// const WEATHERNICENAME = 'WEATHERNICENAME';
// const C_TEMP_MIN = 'C_TEMP_MIN';
// const WEATHER_NAME = 'WEATHER_NAME';
// const ICON = 'ICON';

test('should render an `location to exist`', () => {
  const wrapper = shallow(<Weather />);
    location={LOCATION}
    // cTemp={C_TEMP}
    // cTempMax={WEATHERNICENAME}
    // cTempMin={C_TEMP_MIN}
    // WEATHERNICENAME={WEATHER_NAME}
    // icon={ICON}
//   />);
  const expected = true;

  const actual = wrapper.find('.location').exists();

  expect(actual).toBe(expected);
});

// test('Passes the props through correctly', () => {
//   const wrapper = shallow(<Weather
//     location={LOCATION}
//     cTemp={C_TEMP}
//     cTempMax={WEATHERNICENAME}
//     cTempMin={C_TEMP_MIN}
//     WEATHERNICENAME={WEATHER_NAME}
//     icon={ICON}
//   />);
//   const expectedLocation = LOCATION;
//   const expectedCTemp = `${C_TEMP}°C`;
//   const expectedMaxCTemp = `${WEATHERNICENAME}°C`;
//   const expectedMinCTemp = `${C_TEMP_MIN}°C`;
//   const expectedWeatherName = WEATHER_NAME;

//   const actualLocation = wrapper.find('[data-qa="weather__location"]').text();
//   const actualCTemp = wrapper.find('[data-qa="weather__temperature__celcius"]').text();
//   const actualMaxCTemp = wrapper.find('[data-qa="weather__temperature__celcius__max"]').text();
//   const actualMinCTemp = wrapper.find('[data-qa="weather__temperature__celcius__min"]').text();
//   const actualWeatherName = wrapper.find('[data-qa="weather__name"]').text();

//   expect(actualLocation).toBe(expectedLocation);
//   expect(actualCTemp).toBe(expectedCTemp);
//   expect(actualMaxCTemp).toBe(expectedMaxCTemp);
//   expect(actualMinCTemp).toBe(expectedMinCTemp);
//   expect(actualWeatherName).toBe(expectedWeatherName);
// });

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
