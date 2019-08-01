import React from 'react';
import { mount } from 'enzyme';
import HotelName from './HotelName';

describe('HotelName', () => {
    let wrapper;

    const filter = jest.fn();

    beforeEach(() => {
        wrapper = mount(<HotelName name="name" label="label" value="value" handleFilter={filter} />);
    });

    it('should render', () => {
        expect(wrapper.find('Input').exists()).toBe(true);
    });

    it('should handle change', () => {
        wrapper.find('input').simulate('change', { target: { value: 'changed' } });
        expect(filter).toHaveBeenCalledWith('changed');
    });
});