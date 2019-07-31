import React from 'react';

const Select = props => {
    const { name, label } = props;
    return (
        <div>
            <label for={name}>{label}</label>
            <select name={name} className="select">
                <option value="">Recommended</option>
                <option value="">Price low-to-high</option>
                <option value="">Price high-to-low</option>
            </select >
        </div>
    );
}

export default Select;    