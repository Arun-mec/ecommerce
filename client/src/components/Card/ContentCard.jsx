import React, { useState } from "react";
import ShopNowBtn from "../Button/ShopNowBtn";

const ContentCard =({ image, content }) => {
    const [isHover, setIsHover] = useState(false);
    const cardImgClass = `bg-cover bg-[url(${image})] w-72 h-96 p-1 ${
      isHover ? "ease-in duration-300" : "ease-in duration-300"
    }`;
    const cardClass = `flex flex-col max-w-fit p-[0.2rem] ${
      isHover
        ? "border-[0.08rem] border-dark"
        : "border-[0.08rem] border-offer-navbar-onlight-bg"
    }`;
    return (
      <div
        className={cardClass}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => {
          setIsHover(false);
        }}
      >
        <div className={cardImgClass}>
          <img src={image} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="p-4 flex flex-col justify-between gap-2">
          <span className="text-dark max-w-fit font-mont font-semibold text-md cursor-pointer uppercase">
            {/* {title} */}
            Dime Studded GORE-TEX
          </span>
          <span className="text-dark max-w-fit font-adfont font-light text-sm cursor-pointer italic">
            {/* {subtitle}
             */}
             Studded GORE-TEX jacket: stylish, waterproof, and distinctively designed.
          </span>
          <ShopNowBtn />
        </div>
      </div>
    );
  };

export default ContentCard;
