import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('Input', () => {
    let wrapper;

    const handleChange = jest.fn();

    beforeEach(() => {
        wrapper = shallow(<Input name="name" label="label" value="value" handleChange={handleChange} />);
    });

    it('should render', () => {
        expect(wrapper.find('label').text()).toEqual('label');
        expect(wrapper.find('input').exists()).toBe(true);
        expect(wrapper.find('input').prop('name')).toEqual('name');
        expect(wrapper.find('input').prop('value')).toEqual('value');
        wrapper.find('input').simulate('change', { target: { value: 'changed' } });
        expect(handleChange).toHaveBeenCalledWith('changed');
    });
});