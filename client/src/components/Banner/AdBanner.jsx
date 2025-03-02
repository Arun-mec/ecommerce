import React from 'react'

const AdBanner = ({
        content,
        subcontent
    }) => {
  return (
    <div className='bg-ad-navbar-onlight-bg text-light flex flex-col justify-center items-center gap-2 p-5'>
       <span className='font-adfont text-2xl font-semibold'>{content}</span> 
       <span className='font-adfont text-sm font-normal'>{subcontent}</span> 
    </div>
  )
}

export default AdBanner