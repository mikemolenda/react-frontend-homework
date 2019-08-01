import React from 'react';
import { Select } from '../Forms';

const SortHotels = props => {
    const { handleSort, selected } = props;

    const options = [
        { name: 'Select', value: '' },
        { name: 'Recommended', value: 'recommended' },
        { name: 'Price low-to-high', value: 'price_asc' },
        { name: 'Price high-to-low', value: 'price_desc' }
    ];

    return (
        <div className='sort-hotels'>
            <Select name='sort' label='Sort' options={options} handleChange={handleSort} selected={selected} />
        </div>
    );
}

export default SortHotels;