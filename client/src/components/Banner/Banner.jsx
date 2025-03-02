import React from "react";
import Button from "../Button/Button";
import Badge from "./Badge";
import AdBanner from "./AdBanner";

const Banner = () => {
  const adBannerContent = `IND VS PAK: FEB 23RD`;
  const adBannerSubContent = `Order Your Team Jerseys Now!`;
  const buttonTag = <i className="material-icons cursor-pointer">arrow_forward</i> 

  return (
    <section>
      <AdBanner content={adBannerContent} subcontent={adBannerSubContent} />
      <div
        className="not-visited:h-[90vh] 
          w-full
          bg-[url(./images/india.jpg)]
          bg-cover
          brightness-100 text-light
          flex flex-col justify-end gap-3 p-20"
      >
        
        <Badge content="YOU GOT THIS, PLEASE ORDER SOON!!" />
        <Button className="bg-light text-dark" tag={buttonTag} >SHOP NOW</Button>
      </div>
      
    </section>
  );
};

export default Banner;
