import React from 'react';
import Hotel from './Hotel';

const HotelList = props => {
    return (
        <div className="hotel-list">
            {props.hotels.map((hotel, index) => <Hotel data={hotel} key={index} />)}
        </div>
    );
}

export default HotelList;