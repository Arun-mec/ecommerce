import React, { useState } from 'react'
import Badge from '../Banner/Badge';
import PriceBadge from './PriceBadge';

const Card = () => {
    const [isHover, setIsHover] = useState(false);
    const badgeContent = "-45%"
    const cardClass = `flex flex-col max-w-fit ${isHover ? 'border-[0.08rem] border-dark' : 'border-[0.08rem] border-offer-navbar-onlight-bg'}`
    
  return (
    <div className={cardClass} onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>{setIsHover(false)}}>
        <div className={`bg-[url(./images/X_PLR_Pulse_Shoes_White_IE8473_01_standard.jpg)] bg-cover w-72 h-72 ${isHover ? 'p-2 ease-in duration-300' : 'p-0 ease-in duration-300'}`}>
            <Badge content={badgeContent}></Badge>
            <PriceBadge oldPrice="$500" nwPrice="$400" />
        </div>
        <div className='p-2 flex flex-row justify-between gap-1'>
            <span className='font-adfont text-sm flex flex-col'>SuperStar Shoes <span className='font-adfont text-sm text-grey'>Originals</span></span>
            
            <span class="material-symbols-outlined text-dark cursor-pointer text-sm">favorite</span>
        </div>
        
    </div>
  )
}

export default Card