import React, { useState } from 'react'

const ImgCard = ({
    image,
    content
}) => {
    const [isHover, setIsHover] = useState(false);
    const cardImgClass = `bg-cover bg-[url(${image})] w-64 h-96 p-1 ${isHover ? 'ease-in duration-300' : 'ease-in duration-300'}`
    const cardClass = `flex flex-col max-w-fit p-[0.2rem] ${isHover ? 'border-[0.08rem] border-dark' : 'border-[0.08rem] border-offer-navbar-onlight-bg'}`
  return (
    <div className={cardClass} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>{setIsHover(false)}}>
        <div className={cardImgClass}>
           <img src={image} alt="" className="w-full w- h-full object-cover" />
        </div>
        <div className='p-4 flex flex-row justify-between gap-1'>
            <span className='font-adfont text-sm flex flex-col font-bold underline underline-offset-2'>{content}</span>
        </div>
        
    </div>
  )
}

export default ImgCard