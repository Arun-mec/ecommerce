import React from "react";
import CarouselButtons from "./CarouselButtons";
import SectionTitle from "./SectionTitle";
import Card from "../Card/Card";

const Carousel = () => {
    const carouselButtons = ["SHOES","CLOTHING","ACCESSORIES"];
  return (
    <div className="container flex flex-col gap-3">
        <SectionTitle content="BUY MORE SAVE MORE"/>
        <CarouselButtons contents={carouselButtons} />
        <div className="overflow-x-auto flex items-center 
        [&::-webkit-scrollbar]:h-[0.2rem]
        [&::-webkit-scrollbar-track]:rounded-full
        [&::-webkit-scrollbar-track]:bg-light
        [&::-webkit-scrollbar-thumb]:bg-black">
        {/* Container with horizontal scrolling */}
        <div className="flex space-x-4 py-4">
            {/* Carousel items */}
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
        </div>
        </div>
    </div>
  );
};

export default Carousel;
