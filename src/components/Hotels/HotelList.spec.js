import React from 'react';
import { shallow } from 'enzyme';
import HotelList from './HotelList';

describe('HotelList', () => {
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

    const wrapper = shallow(<HotelList hotels={sampleHotels} />);

    it('should render each hotel', () => {
        expect(wrapper.find('.hotel-list').children().length).toEqual(2);
    });
});