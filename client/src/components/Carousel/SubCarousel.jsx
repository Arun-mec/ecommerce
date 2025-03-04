import React from "react";
import SectionTitle from "./SectionTitle";
import ImgCard from "../Card/ImgCard";
import imgFiles from "../Card/imgFiles";

const SubCarousel = () => {
  return (
    <div className="container flex flex-col gap-3">
      <SectionTitle content="SELECT YOUR SPORT, FIND YOUR GEAR, AND GET IN THE GAME!" />
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
