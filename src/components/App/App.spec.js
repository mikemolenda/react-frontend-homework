import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';

describe('App', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<App />);
    });

    it('should render', () => {
        expect(wrapper.find('.app-container').exists()).toBe(true);
        expect(wrapper.find('Filters').exists()).toBe(true);
        expect(wrapper.find('HotelList').exists()).toBe(true);
    });

    it('should load hotels', () => {
        // TODO
    });

    it('should filter by name', () => {
        // TODO
    });

    it('should sort hotel list', () => {
        // TODO
    });

});