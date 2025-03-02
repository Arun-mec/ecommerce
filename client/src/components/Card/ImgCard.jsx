import React, { useState } from 'react'

const ImgCard = ({
    image,
    content
}) => {
    const [isHover, setIsHover] = useState(false);
    const cardImgStyle =  {
        backgroundImage : `url(${image})`,
        backgroundSize : 'cover',
    }
    const cardImgClass = `w-72 h-96 ${isHover ? 'p-2 ease-in duration-300' : 'p-0 ease-in duration-300'}`
    const cardClass = `flex flex-col max-w-fit p-[0.1rem] ${isHover ? 'border-[0.08rem] border-dark' : 'border-[0.08rem] border-offer-navbar-onlight-bg'}`
  return (
    <div className={cardClass} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>{setIsHover(false)}}>
        <div className={cardImgClass} style={cardImgStyle}>
            Hello
        </div>
        <div className='p-4 flex flex-row justify-between gap-1'>
            <span className='font-adfont text-sm flex flex-col font-bold underline underline-offset-2'>{content}</span>
        </div>
        
    </div>
  )
}

export default ImgCard