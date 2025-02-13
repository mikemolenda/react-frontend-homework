import React from 'react';

const Button = props => {
    const { label, handleClick } = props;
    return (
        <button className="button" onClick={handleClick}>{label}</button>
    );
}

export default Button;