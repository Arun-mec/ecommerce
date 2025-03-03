import React from 'react'
import Button from '../Button/Button'

const AdBanner = ({
        content,
        subcontent
    }) => {

      const buttonTag = <i className="material-icons cursor-pointer">arrow_forward</i> 

  return (
    <div className='bg-ad-navbar-onlight-bg text-light flex flex-col justify-center items-center gap-2 p-5'>
       <span className='font-adfont text-2xl font-semibold'>{content}</span> 
       <span className='font-adfont text-sm font-normal'>{subcontent}</span> 
       <Button className="bg-light text-dark" tag={buttonTag} >SHOP NOW</Button>
    </div>
  )
}

export default AdBanner