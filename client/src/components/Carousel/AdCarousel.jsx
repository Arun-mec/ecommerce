import React, { useEffect, useState } from "react";
import LogoImage from "../Footer/LogoImage";

const AdCarousel = () => {
  // State to track the current index of the carousel
  const [currItem, setCurrItem] = useState(false);

  // Array of items for the carousel
  // Automatically change items every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(!setCurrItem) 
    }, 3000)// 3 seconds interval for automatic transition

    // Cleanup the interval when component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col h-96 justify-center items-center bg-[url(./src/images/race.jpg)] bg-cover text-white text-2xl font-adfont">
      <span className='ease-out duration-500 max-w-fit font-bold text-4xl p-3 tracking-[1rem] font-display hover:ease-in cursor-pointer hover:duration-500 hover:tracking-[1.2rem]'>THE RACE BEGINS, THE WAR BEGINS!</span> 
    </div>
  );
};

export default AdCarousel;
