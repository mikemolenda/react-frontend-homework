import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
    const wrapper = shallow(<Button label="button" />);

    it('should render', () => {
        expect(wrapper.find('.button').exists()).toBe(true);
        expect(wrapper.find('.button').text()).toEqual('button');
    });
});