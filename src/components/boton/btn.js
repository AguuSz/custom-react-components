import React from 'react';
import './btn.styles.scss'

const Button = ({ children, ...props }) => (
    <>
        <button className={`btn ${props.className}`}>{children}</button>
    </>
)

export default Button;