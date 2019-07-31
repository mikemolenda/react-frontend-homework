import React from 'react';
import { shallow } from 'enzyme';
import Hotel from './Hotel';

describe('Hotel', () => {
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

    const wrapper = shallow(<Hotel data={sampleData} index={1} />);

    it('should render', () => {
        expect(wrapper.find('.hotel-card').exists()).toBe(true);
        expect(wrapper.find('.image').prop('style')).toHaveProperty('backgroundImage', 'url(1.jpg)');
        expect(wrapper.find('.hotel-name').text()).toEqual('Sample Hotel');
        expect(wrapper.find('.location').text()).toEqual('Uptown');
        expect(wrapper.find('.price').text()).toEqual('500');
        expect(wrapper.find('.rewards').text()).toEqual('10000 miles');
    });
});