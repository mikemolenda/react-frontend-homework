import React from 'react';
import { act } from 'react-dom/test-utils';
import hotelResultService from '../../services/hotel-result/hotel-result.service';
import { shallow, mount } from 'enzyme';
import App from './App';
import mockResponse from '../../testutils/mockResponse';

describe('App', () => {
    let wrapper;

    it('should render', () => {
        wrapper = shallow(<App />);
        expect(wrapper.find('.app-container').exists()).toBe(true);
        expect(wrapper.find('Filters').exists()).toBe(true);
        expect(wrapper.find('HotelList').exists()).toBe(true);
    });

    it('should load hotels', done => {
        jest.spyOn(hotelResultService, 'get').mockResolvedValue(mockResponse);
        wrapper = mount(<App />);
        expect(hotelResultService.get).toHaveBeenCalled();
        Promise.resolve(wrapper)
            .then(() => {
                wrapper.update();
                expect(wrapper.find('HotelList').prop('hotels').length).toEqual(20);
                done();
            });
    });

    it('should catch hotel load error', done => {
        jest.spyOn(hotelResultService, 'get').mockRejectedValue(new Error('error'));
        wrapper = mount(<App />);
        expect(hotelResultService.get).toHaveBeenCalled();
        Promise.resolve(wrapper)
            .then(() => {
                done();
            })
            .catch(error => {
                wrapper.update();
                expect(wrapper.find('HotelList').prop('error')).toBeDefined();
                done();
            });
    });

    it('should filter by name', done => {
        jest.spyOn(hotelResultService, 'get').mockResolvedValue(mockResponse);
        wrapper = mount(<App />);
        expect(hotelResultService.get).toHaveBeenCalled();
        Promise.resolve(wrapper)
            .then(() => {
                wrapper.update();
                wrapper.find('.hotel-name').find('input').simulate('change', { target: { value: 'hotel' } });
                expect(wrapper.find('HotelList').prop('hotels').length).toEqual(5);
                done();
            });
    });

    it('should sort hotel list', done => {
        jest.spyOn(hotelResultService, 'get').mockResolvedValue(mockResponse);
        wrapper = mount(<App />);
        expect(hotelResultService.get).toHaveBeenCalled();
        Promise.resolve(wrapper)
            .then(() => {
                wrapper.update();
                wrapper.find('.sort-hotels').find('select').simulate('change', { target: { value: 'recommended' } });
                expect(wrapper.find('HotelList').prop('hotels')[0].hotelStaticContent.name).toEqual('The Talbott Hotel');
                wrapper.find('.sort-hotels').find('select').simulate('change', { target: { value: 'price_asc' } });
                expect(wrapper.find('HotelList').prop('hotels')[0].hotelStaticContent.name).toEqual('Homewood Suites by Hilton Chicago-Lincolnshire');
                wrapper.find('.sort-hotels').find('select').simulate('change', { target: { value: 'price_desc' } });
                expect(wrapper.find('HotelList').prop('hotels')[0].hotelStaticContent.name).toEqual(`Hilton Garden Inn Chicago O'Hare Airport`);
                done();
            });
    });

});