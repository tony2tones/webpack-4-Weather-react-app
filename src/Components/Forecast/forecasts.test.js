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
        temp1={TEMP1}
        time1={TIME1}
        temp2={TEMP2}
        time2={TIME2}
        temp3={TEMP3}
        time3={TIME3}
    />);
    const expected = true;
    const actual = wrapper.find('.grid').exists();
    expect(actual).toBe(expected);
});

test('Passes the props through correctly', () => {
    const wrapper = shallow(<Forecast
        temp1={TEMP1}
        time1={TIME1}
        temp2={TEMP2}
        time2={TIME2}
        temp3={TEMP3}
        time3={TIME3}
    />);

    const expectedTemp1 = `${TEMP1}°`;
    const expectedTime1 = TIME1;
    const expectedTemp2 = `${TEMP2}°`;
    const expectedTime2 = TIME2;
    const expectedTemp3 = `${TEMP3}°`;
    const expectedTime3 = TIME3;

    const actualTemp1 = wrapper.find('[data-qa="temp_one"]').text();
    const actualTime1 = wrapper.find('[data-qa="time_one"]').text();
    const actualTemp2 = wrapper.find('[data-qa="temp_two"]').text();
    const actualTime2 = wrapper.find('[data-qa="time_two"]').text();
    const actualTemp3 = wrapper.find('[data-qa="temp_three"]').text();
    const actualTime3 = wrapper.find('[data-qa="time_three"]').text();

    expect(actualTemp1).toBe(expectedTemp1);
    expect(actualTime1).toBe(expectedTime1);
    expect(actualTemp2).toBe(expectedTemp2);
    expect(actualTime2).toBe(expectedTime2);
    expect(actualTemp3).toBe(expectedTemp3);
    expect(actualTime3).toBe(expectedTime3);

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
