import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Filters', () => {
    const wrapper = shallow(<Input name="name" label="label" />);

    it('should render', () => {
        expect(wrapper.find('label').text()).toEqual('label');
        expect(wrapper.find('input').exists()).toBe(true);
        expect(wrapper.find('input').prop('name')).toEqual('name');

    });
});