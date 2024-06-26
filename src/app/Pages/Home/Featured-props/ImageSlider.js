"use client";
import { useState } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import {RxDotFilled} from "react-icons/rx";
const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // previous slide function
  const prevSlide =() =>{
    const isFirstSlide = currentIndex ===0;
    const newSlide = isFirstSlide ? slides.length -1 : currentIndex -1;
    setCurrentIndex(newSlide);
  }
  //next slide function
  const nextSlide =() =>{
    const isLastSlide = currentIndex === slides.length -1;
    const newSlide = isLastSlide ? 0 : currentIndex +1;
    setCurrentIndex(newSlide);
  };
//goToSlide() connects images to dots
 const goToSlide =(slideIndex)=>{
  setCurrentIndex(slideIndex)
 }
  return (
    // Image slide container.Conatains styles for image slider.
    <div className="
    max-w-[1800px] h-[580px]  relative group
    w-full mx-auto pt-12  px-1 
    sm:px-4 
    ">
      {/* container for image settings.Controls image slides size and style */}
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className=" 
        rounded-2xl bg-center bg-cover
        w-[98vw] h-[58vh]  mt-[3vh]  mx-auto ease-in-out duration-500
        sm:h-[60] md:h-[50vh]  sm:w-full   sm:bg-center sm:bg-cover
         
         
        ">
      </div>
      {/* div for left arrow style */}
      <div className=" left_arrow hidden sm:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5">
        <FaArrowAltCircleLeft size={30} className="left_arrow" onClick={prevSlide}/>
      </div>
      {/* div for right arrow style */}
      <div className="right_arrow hidden sm:group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 ">
        <FaArrowAltCircleRight size={30} className="right_arrow" onClick={nextSlide}/>
      </div>
      <div className="flex top-4 justify-center pt-4">
      {slides.map((slide,slideIndex) =>(
        <div key={slideIndex} 
        onClick={()=> goToSlide(slideIndex)} 
        className='text-2xl cursor-pointer sm:hidden'>
        <RxDotFilled />
        </div>
      ))}
      </div>
    </div>
  );
};
export default ImageSlider;
