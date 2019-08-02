import React from 'react';
import Hotel from './Hotel';

const HotelList = props => {
    const { hotels, error } = props;

    return !error &&
        (
            <div className="hotel-list">
                {hotels.map((hotel, index) => <Hotel data={hotel} key={index} />)}
            </div>
        ) || (
            <div className="error-card">{error}</div>
        );
}

export default HotelList;