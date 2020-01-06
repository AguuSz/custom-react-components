import React from 'react';
import './input.styles.scss';

const Input = ({ className, ...props }) => (
    <div>
        <input className={`input ${className}`} {...props} />
    </div>
)

export default Input;