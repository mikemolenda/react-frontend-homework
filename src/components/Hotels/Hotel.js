import React from 'react';
import { Button } from '../Forms';

const Hotel = props => {
    const hotel = props.data;
    return (
        <div className="hotel-card" key={hotel.id}>
            <div
                className="image"
                style={{ backgroundImage: `url(${hotel.hotelStaticContent.mainImage.url})` }}>
            </div>
            <div className="hotel-details">
                <div className="hotel-name">
                    {hotel.hotelStaticContent.name}
                </div>
                <div className="location">
                    {hotel.hotelStaticContent.neighborhoodName}
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