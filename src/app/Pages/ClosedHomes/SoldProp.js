
import React, { useState,useEffect } from "react";
import Image from "next/image";
const SoldProp = ({ slide }) => {
  return (
    <div className="w-full h-full lg:mx-auto ">
      <div
        className=" w-full h-full rounded-2xl bg-center bg-cover  ease-in-out duration-500
     lg:flex  lg:justify-center 
    
    "
      >
        <div className="sold_container w-full text-center ">
         
        
        {/* Image for  */}
        <div className="soldImages-container mb-[10rem]  w-full relative bottom-[-4vh] 
                        sm:bottom-[214vh]
                         ">
          <Image
            src={`${slide}`}
            width={180}
            height={180}
            alt="Sold Home Image"
            className="closed_homes p-0  w-72 mx-auto rounded-lg sm:w-72 sm:mx-auto md:w-72 
            lg:relative  lg:w-[20rem]  lg:z-50 
      

      "
          />
        </div>
        </div>
        
      </div>
    </div>
  );
};
export default SoldProp;
