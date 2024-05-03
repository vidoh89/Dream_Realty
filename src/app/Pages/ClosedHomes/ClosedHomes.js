"use client";
import SoldProp from "./SoldProp";
const ClosedHomes = () =>{
    // Contains data for closed homes/properties
    const slides=[
        {
            id:1,
            name:"Closed Home1",
            alt:"This is an image of a closed property",
            url:"/closed_prop_data/image(1).png"
        },
        {
            id:2,
            name:"Closed Home2",
            alt:"This is an image of a closed property",
            url:"/closed_prop_data/image(4).png"
        },
        {
            id:3,
            name:"Closed Home3",
            alt:"This is an image of a closed property",
            url:"/closed_prop_data/image(5).png"
        },
    ];
      
    return(
        <div className="mt-1 mx-auto  sm:text-2xl relative top-[-4vh] sm:top-0 ">
            {/* Sold logo image, styling located in global.css file */}
            <div
            className=" sold_sign  
                        w-10 h-10 relative top-[7.4rem] left-[153px] mx-auto z-50
                        sm:z-50 sm:top-[7.4rem] 
                         md:top-[12.2rem] md:left-[10rem] 
                         lg:top-[4/4.5rem]
              "
          >
            
            <p className=" 
                           relative 
                           top-[.8rem] left-1  mx-auto text-[.5rem] font-bold
                           sm:top-[.3rem]
                           lg:top-[4/4.5rem] lg:font-extrabold
                           ">
              Sold!!
            </p>
          </div>
        <div className="closedProperty-container w-full h-56 text-center">
            {/* Closed property text underline */}
        <span className="slider_header">
            {/* Closed property heading */}
        <h1 className=
        "mt-[5rem]  text-2xl sm:mt-[10rem]"
        
        >Closed Properties</h1>
        </span>
        {/* Maps property data and passes data to SoldProp component for logic implementaiton */}
        <div className="w-full h-full block relative top-[1vh] sm:top-[220vh]  lg:flex lg:justify-center">
            
            {slides.map((slide,index)=>(
                <SoldProp key={index} slide={slide.url}/>
            ))}
            
        </div>

        </div>
    </div>
    )
}
export default ClosedHomes;