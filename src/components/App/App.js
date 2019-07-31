import React, { useState, useEffect } from 'react';
import './App.style.scss';
import { Filters } from '../Filters';
import { HotelList } from '../Hotels';
import { Button, Input, Select } from '../Forms';

import hotelResultService from '../../services/hotel-result/hotel-result.service';

const App = () => {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        hotelResultService.get().then(response => {
            setHotels(response.results.hotels)
        })
    }, []);

    return (
        <div className="app-container">
            <div className="content">
                <Filters />
                <HotelList hotels={hotels} />
            </div>
        </div>
    )
}

export default App;
