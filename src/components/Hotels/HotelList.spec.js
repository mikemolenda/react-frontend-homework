import React from 'react';
import { shallow } from 'enzyme';
import HotelList from './HotelList';

describe('HotelList', () => {
    let wrapper;

    const sampleHotels = [
        {
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
        },
        {
            id: 2,
            hotelStaticContent: {
                mainImage: { url: '2.jpg' },
                name: 'Example Inn',
                neighborhoodName: 'Downtown',
            },
            lowestAveragePrice: {
                amount: 600,
                symbol: '&#36;'
            },
            rewards: {
                miles: 15000
            }
        }
    ];

    it('should render', () => {
        wrapper = shallow(<HotelList hotels={sampleHotels} />);
        expect(wrapper.find('.hotel-list').exists()).toBe(true);
    });

    it('should render each hotel', () => {
        wrapper = shallow(<HotelList hotels={sampleHotels} />);
        expect(wrapper.find('.hotel-list').children().length).toEqual(2);
    });

    it('should render error message on failed fetch', () => {
        wrapper = shallow(<HotelList hotels={[]} error="error" />);
        expect(wrapper.find('.hotel-list').exists()).toBe(false);
        expect(wrapper.find('.error-card').exists()).toBe(true);
        expect(wrapper.find('.error-card').text()).toEqual('error');
    });

});