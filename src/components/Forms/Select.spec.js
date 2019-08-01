import React from 'react';
import { shallow } from 'enzyme';
import Select from './Select';

describe('Filters', () => {
    let wrapper;

    const options = [
        { name: 'Select', value: '' },
        { name: 'Recommended', value: 'recommended' },
        { name: 'Price low-to-high', value: 'price_asc' },
        { name: 'Price high-to-low', value: 'price_desc' }
    ];

    beforeEach(() => {
        wrapper = shallow(<Select name="name" label="label" options={options} selected="" />);
    });

    it('should render', () => {
        expect(wrapper.find('label').text()).toEqual('label');
        expect(wrapper.find('select').exists()).toBe(true);
        expect(wrapper.find('select').prop('name')).toEqual('name');
        expect(wrapper.find('select').prop('value')).toEqual('');
        expect(wrapper.find('option').length).toEqual(4);
    });
});