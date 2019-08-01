import React from 'react';
import { mount } from 'enzyme';
import Filters from './Filters';

describe('Filters', () => {
    let wrapper;

    const filter = jest.fn();
    const sort = jest.fn();
    const reset = jest.fn();

    beforeEach(() => {
        wrapper = mount(<Filters filterByName={filter} sortBy={sort} resetFilters={reset} />);
    });

    it('should render', () => {
        expect(wrapper.find('.filters').exists()).toBe(true);
        expect(wrapper.find('HotelName').exists()).toBe(true);
        expect(wrapper.find('SortHotels').exists()).toBe(true);
        expect(wrapper.find('Button').exists()).toBe(true);
    });

    it('should handle filter change', () => {
        wrapper.find('input').simulate('change', { target: { value: 'changed' } });
        expect(filter).toHaveBeenCalledWith('changed');
        expect(wrapper.find('input').prop('value')).toEqual('changed');
    });

    it('should handle sort selection', () => {
        wrapper.find('select').simulate('change', { target: { value: 'recommended' } });
        expect(sort).toHaveBeenCalledWith('recommended');
        expect(wrapper.find('select').prop('value')).toEqual('recommended');
    });

    it('should handle reset', () => {
        wrapper.find('input').simulate('change', { target: { value: 'changed' } });
        wrapper.find('select').simulate('change', { target: { value: 'recommended' } });
        expect(wrapper.find('input').prop('value')).toEqual('changed');
        expect(wrapper.find('select').prop('value')).toEqual('recommended');
        wrapper.find('button').simulate('click');
        expect(reset).toHaveBeenCalled();
        expect(wrapper.find('input').prop('value')).toEqual('');
        expect(wrapper.find('select').prop('value')).toEqual('');
    });

});