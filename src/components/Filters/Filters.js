import React from 'react';
import { Button, Input, Select } from '../Forms';

const Filters = props => {
    return (
        <div>
            <div className="filters">
                <Input name='filter' label='Hotel Name' maxLength={1} />
                <Select name='sort' label='Price' />
                <Button label='Reset' />
            </div>
        </div>
    );
}

export default Filters;