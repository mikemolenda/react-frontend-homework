import React, { useState } from 'react';
import { Input } from '../Forms';

const HotelName = props => {
    const { name, label, handleFilter, value } = props;
    return (
        <div className="hotel-name">
            <Input name={name} label={label} value={value} handleChange={handleFilter} />
        </div>
    );
}

export default HotelName;