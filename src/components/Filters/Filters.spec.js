import React from 'react';
import { shallow } from 'enzyme';
import Filters from './Filters';

describe('Filters', () => {
    const wrapper = shallow(<Filters />);

    it('should render', () => {
        expect(wrapper.find('.filters').exists()).toBe(true);
        expect(wrapper.find('Input').exists()).toBe(true);
        expect(wrapper.find('Select').exists()).toBe(true);
        expect(wrapper.find('Button').exists()).toBe(true);
    });
});