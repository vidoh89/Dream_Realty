import React from "react";
import ImageSlider from "./ImageSlider";

function FeaturedProperties() {
  // Array of Objects that contain images for featured propertey section.
  // Image styling located in ImageSlider.js file.
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
    <div className="max-w-[1400px] h-[780px] w-full mx-auto py-16 px-0 sm:p-4 relative">
      {/* Featured property heading,styling located in global.css file. */}
      <h1 className="slider_header  mx-auto text-2xl text-center mt-[.1vh] sm:mt-[4vh]">Featured Properties</h1>
      <div className="">
        <ImageSlider slides={slides}
        
        />
      </div>
    </div>
  );
}

export default FeaturedProperties;
