import React, { useState, useEffect } from 'react';
import './App.style.scss';
import { Filters } from '../Filters';
import { HotelList } from '../Hotels';

import hotelResultService from '../../services/hotel-result/hotel-result.service';

const App = () => {
    const [hotels, setHotels] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [sortFn, setSortFn] = useState(() => (a, b) => 0);

    const filterByName = value => {
        setFiltered(hotels.filter(hotel => hotel.hotelStaticContent.name.toLowerCase().includes(value.toLowerCase())));
    }

    const sortBy = criteria => {
        switch (criteria) {
            case 'price_asc':
                setSortFn(() => (a, b) => a.lowestAveragePrice.amount - b.lowestAveragePrice.amount);
                break;
            case 'price_desc':
                setSortFn(() => (a, b) => b.lowestAveragePrice.amount - a.lowestAveragePrice.amount);
                break;
            case 'recommended':
                setSortFn(() => (a, b) => b.hotelStaticContent.rating - a.hotelStaticContent.rating);
                break;
            default:
                setSortFn(() => (a, b) => 0);
        }
    }

    const resetFilters = () => {
        setFiltered([...hotels]);
        setSortFn(() => (a, b) => 0);
    }

    useEffect(() => {
        hotelResultService.get()
            .then(response => {
                setHotels(response.results.hotels)
            })
            .catch(error => {
                console.error(error)
            })
    }, []);

    return (
        <div className="app-container">
            <div className="content">
                <Filters filterByName={filterByName} sortBy={sortBy} resetFilters={resetFilters} />
                <HotelList hotels={filtered.length > 0 && filtered.sort(sortFn) || [...hotels].sort(sortFn)} />
            </div>
        </div>
    )
}

export default App;
