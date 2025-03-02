import React from 'react'

const PriceBadge = ({
    oldPrice,
    nwPrice,
    className
    }) => {
    const badgeClass = `bg-light text-dark max-w-fit font-adfont p-1 flex gap-1 text-md ${className}`;
    return (
      <div className={badgeClass} >
        <span className='text-grey line-through'>{oldPrice}</span>
        <span className='text-red-700'>{nwPrice}</span>
      </div>
    )
}

export default PriceBadge