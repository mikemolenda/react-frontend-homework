import React from 'react';
import { shallow } from 'enzyme';
import Select from './Select';

describe('Filters', () => {
    const wrapper = shallow(<Select name="name" label="label" />);

    it('should render', () => {
        expect(wrapper.find('label').text()).toEqual('label');
        expect(wrapper.find('select').exists()).toBe(true);
        expect(wrapper.find('select').prop('name')).toEqual('name');

    });
});