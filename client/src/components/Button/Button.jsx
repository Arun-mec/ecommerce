import React from 'react'

const Button = ({
    onclick,
    children,
    type = 'Button',
    varient = 'Primary',
    disabled = false,
    className
}) => {
    const buttonClass = `btn ${varient} ${disabled ? 'disabled':''} ${className}`;
  return (
    <div 
        className={buttonClass}
        type={type}
        onClick={onclick}
        disabled={disabled} >
        {children}
    </div>
  )
}

export default Button