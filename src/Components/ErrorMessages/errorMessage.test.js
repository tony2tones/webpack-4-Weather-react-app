import React from 'react';
import { shallow } from 'enzyme';

import ErrorMessage from './ErrorMessage';

test('should have the following error message', () => {
    const wrapper = shallow(<ErrorMessage />);
    const expected = 'Please allow us to use your location for the latest weather updates.';

    const actual = wrapper.find('span').text();

    expect(actual).toBe(expected);
});
