import React from 'react';

const Select = props => {
    const { name, label, options, handleChange, selected } = props;
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <select name={name} className="select" onChange={e => handleChange(e.target.value)} value={selected}>
                {options &&
                    options.map((option, index) => (
                        <option key={index} value={option.value}>{option.name}</option>)
                    )
                }
            </select >
        </div>
    );
}

export default Select;    