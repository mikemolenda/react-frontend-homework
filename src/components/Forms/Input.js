import React from 'react';

const Input = props => {
    const { name, label, value, handleChange } = props;

    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input type='text' className='input' name={name} value={value} onChange={e => handleChange(e.target.value)} />
        </div>
    );
}

export default Input;