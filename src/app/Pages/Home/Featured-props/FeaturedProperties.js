import React from "react";
import ImageSlider from "./ImageSlider";

function FeaturedProperties() {
  const slides = [
    {
      url: "/featured_prop_data/prop-2frontyard.jpeg",
      title: "Home1",
    },
    {
      url: "/featured_prop_data/prop-1frontyard.jpeg",
      title: "Home2",
    }, 
    {
      url: "/featured_prop_data/prop-3backyard.png",
      title: "Home3",
    },
    {
      url: "/featured_prop_data/prop-4backyard2.png",
      title: "Home4",
    },
    {
      url: "/featured_prop_data/prop-5frontyard.png",
      title: "Home5",
    },
  ];
  
  return (
    <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative">
      <h1 className="slider_header mt-0 mx-auto text-2xl text-center">Featured Properties</h1>
      <div className="">
        <ImageSlider slides={slides}/>
      </div>
    </div>
  );
}

export default FeaturedProperties;
