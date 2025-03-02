import React from "react";
import CarouselButton from "./CarouselButton";

const CarouselButtons = ({ contents }) => {
   
  return <div className="flex gap-2">{contents.map((content, index) => {
    if (index==1) {
        return (
            <CarouselButton content={content} isActive={true}/>
        )
    }
    else {
        return (
            <CarouselButton content={content} />
        )
    }
  })}</div>;
};

export default CarouselButtons;
