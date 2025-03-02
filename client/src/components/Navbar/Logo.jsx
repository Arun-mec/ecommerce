import React from 'react'

const Logo = ({logo}) => {
  return (
    <div className='flex justify-start font-logo font-bold text-4xl cursor-pointer'>{logo}</div>
  )
}

export default Logo