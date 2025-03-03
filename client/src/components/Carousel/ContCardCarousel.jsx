import React from 'react'
import SectionTitle from './SectionTitle';
import imgFiles from '../Card/imgFiles';
import ContentCard from '../Card/ContentCard';

const ContCardCarousel = () => {
  return (
    <div className="container flex flex-col gap-3">
      <SectionTitle content="WHAT'S HOT!" />
      <div
        className="overflow-x-auto flex items-center 
        [&::-webkit-scrollbar]:h-[0.2rem]
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-light
        [&::-webkit-scrollbar-thumb]:bg-black"
      >
        {/* Container with horizontal scrolling */}
        <div className="flex space-x-2 py-2">
          {
            imgFiles.map((imgFile)=>{
    
                return  (
                    <ContentCard image={imgFile.image} content={imgFile.content} />
                )
            })
          }
          
        </div>
      </div>
    </div>
  )
}

export default ContCardCarousel;