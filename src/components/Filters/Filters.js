import React, { useState } from 'react';
import HotelName from './HotelName';
import SortHotels from './SortHotels';
import { Button } from '../Forms';

const Filters = props => {
    const [filterValue, setFilterValue] = useState('');
    const [selectedSort, setSelectedSort] = useState('');

    const { filterByName, sortBy, resetFilters } = props;

    const handleFilter = value => {
        setFilterValue(value);
        filterByName(value)
    }

    const handleSort = value => {
        setSelectedSort(value);
        sortBy(value);
    }

    const handleReset = () => {
        setFilterValue('');
        setSelectedSort('');
        resetFilters();
    }

    return (
        <div>
            <div className="filters">
                <HotelName handleFilter={handleFilter} name='filter' label='Hotel Name' value={filterValue} />
                <SortHotels handleSort={handleSort} selected={selectedSort} />
                <Button label='Reset' handleClick={handleReset} />
            </div>
        </div>
    );
}

export default Filters;