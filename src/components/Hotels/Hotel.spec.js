import React from 'react';
import { shallow } from 'enzyme';
import Hotel from './Hotel';

describe('Hotel', () => {
    let wrapper;

    const sampleData = {
        id: 1,
        hotelStaticContent: {
            mainImage: { url: '1.jpg' },
            name: 'Sample Hotel',
            neighborhoodName: 'Uptown',
        },
        lowestAveragePrice: {
            amount: 500,
            symbol: '&#36;'
        },
        rewards: {
            miles: 10000
        }
    };

    const missingData = {
        id: 1,
        lowestAveragePrice: {
            amount: 500,
            symbol: '&#36;'
        },
        rewards: {
            miles: 10000
        }
    };

    const emptyData = {};

    it('should render', () => {
        wrapper = shallow(<Hotel data={sampleData} index={1} />);
        expect(wrapper.find('.hotel-card').exists()).toBe(true);
        expect(wrapper.find('.image').prop('style')).toHaveProperty('backgroundImage', 'url(1.jpg)');
        expect(wrapper.find('.image').prop('style')).toHaveProperty('backgroundColor', 'gray');
        expect(wrapper.find('.hotel-name').text()).toEqual('Sample Hotel');
        expect(wrapper.find('.location').text()).toEqual('Uptown');
        expect(wrapper.find('.price').text()).toEqual('500');
        expect(wrapper.find('.rewards').text()).toEqual('10000 miles');
    });

    it('should render placeholders for missing data', () => {
        wrapper = shallow(<Hotel data={missingData} index={1} />);
        expect(wrapper.find('.hotel-card').exists()).toBe(true);
        expect(wrapper.find('.image').prop('style')).toHaveProperty('backgroundImage', 'url()');
        expect(wrapper.find('.hotel-name').text()).toEqual('Name Unavailable');
        expect(wrapper.find('.location').text()).toEqual('Location Unavailable');
    });

    it('should not render hotel without price or rewards data', () => {
        wrapper = shallow(<Hotel data={emptyData} index={1} />);
        expect(wrapper.find('.hotel-card').exists()).toBe(false);
    });

});