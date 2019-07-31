import React from 'react';

const Input = props => {
    const { name, label, maxLength } = props;
    return (
        <div>
            <label for={name}>{label}</label>
            <input type='text' className='input' name={name} maxLength={1} />
        </div>
    );
}

export default Input;