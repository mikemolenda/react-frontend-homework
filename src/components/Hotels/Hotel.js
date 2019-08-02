import React from 'react';
import { Button } from '../Forms';

const Hotel = props => {
    const hotel = props.data;
    const image = hotel.hotelStaticContent && hotel.hotelStaticContent.mainImage && hotel.hotelStaticContent.mainImage.url;
    const name = hotel.hotelStaticContent && hotel.hotelStaticContent.name;
    const location = hotel.hotelStaticContent && hotel.hotelStaticContent.neighborhoodName;

    return (
        hotel && hotel.lowestAveragePrice && hotel.rewards &&
        <div className="hotel-card" key={hotel.id}>
            <div className="image" style={{ backgroundImage: `url(${image || ''})`, backgroundColor: 'gray' }}>
                {!image && 'No image available'}
            </div>
            <div className="hotel-details">
                <div className="hotel-name">
                    {name || 'Name Unavailable'}
                </div>
                <div className="location">
                    {location || 'Location Unavailable'}
                </div>
            </div>
            <div className="price-details">
                <span className="price">
                    <span dangerouslySetInnerHTML={{ __html: hotel.lowestAveragePrice.symbol }}></span>
                    {hotel.lowestAveragePrice.amount}
                </span>
                <span className="rewards">
                    {hotel.rewards.miles} miles
                    </span>
                <Button label='Select' />
            </div>
        </div>
    );
}

export default Hotel;