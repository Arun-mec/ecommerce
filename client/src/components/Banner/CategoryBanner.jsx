import React, { useState } from 'react'
import SectionTitle from '../Carousel/SectionTitle'

const CategoryBanner = () => {
    
    const categories = ["samba" , "running shoes", "jacket", "spezial", "cap", "shoes", "accessories"]
  return (
    <section className='container'>
        <SectionTitle content={"POPULAR RIGHT NOW!"} />
        <div className='grid grid-cols-3 gap-10'>
            {
                categories.map((category)=>{
                    return (
                        <Category content={category} />
                    )
                })
            }
        </div>
    </section>
  )
}

const Category = ({content}) => {
    const [isHover, setIsHover] = useState(false);
    return (
        <span onMouseEnter={()=>setIsHover(true)} onMouseLeave={()=>setIsHover(false)} className={`flex justify-start items-center p-2 cursor-pointer font-adfont font-semibold text-3xl ${isHover ? 'border-b-4 border-dark' : 'border-b-[0.05rem] border-dark'}`}>{content}</span>
    )
}
export default CategoryBanner