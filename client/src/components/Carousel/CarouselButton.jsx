import React from 'react'

const CarouselButton = ({
    onclick,
    content,
    tag,
    isActive,
    type = 'Button',
    varient = 'Primary',
    disabled = false,
    className
}) => {
    const buttonClass = ` w-fit p-2 border-2 border-black font-adfont font-semibold text-sm hover:cursor-pointer hover:bg-dark hover:text-light
    ${varient} ${disabled ? 'disabled':''} ${className} ${isActive && 'bg-dark text-light'}`;

  return (
    <button   
          className={buttonClass}
          type={type}
          onClick={onclick}
          disabled={disabled} >
          {content}
          {tag}
    </button>
  )
}

export default CarouselButton