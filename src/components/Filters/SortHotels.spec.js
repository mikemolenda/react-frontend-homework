import React from 'react';
import { mount } from 'enzyme';
import SortHotels from './SortHotels';

describe('SortHotels', () => {
    let wrapper;

    const sort = jest.fn();

    beforeEach(() => {
        wrapper = mount(<SortHotels handleSort={sort} selected="" />);
    });

    it('should render', () => {
        expect(wrapper.find('Select').exists()).toBe(true);
    });

    it('should handle sort', () => {
        wrapper.find('select').simulate('change', { target: { value: 'recommended' } });
        expect(sort).toHaveBeenCalledWith('recommended');
    });

});