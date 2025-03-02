import React from "react";
import SectionTitle from "./SectionTitle";
import ImgCard from "../Card/ImgCard";
import imgFiles from "../Card/imgFiles";

const SubCarousel = () => {
  return (
    <div className="container flex flex-col gap-3">
      <SectionTitle content="Select your sport, find your gear, and Get in the game!" />
      <div
        className="overflow-x-auto flex items-center 
        [&::-webkit-scrollbar]:h-[0.2rem]
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-light
        [&::-webkit-scrollbar-thumb]:bg-black"
      >
        {/* Container with horizontal scrolling */}
        <div className="flex space-x-4 py-4">
            
          {/* Carousel items */}
          {
            imgFiles.map((imgFile)=>{
    
                return  (
                    <ImgCard image={imgFile.image} content={imgFile.content} />
                )
            })
          }
          
        </div>
      </div>
    </div>
  );
};

export default SubCarousel;
