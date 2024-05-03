import React from "react";
import ContactBtn from "./ContactBtn";
import Image from "next/image";

function Hero() {
  return (
    // Main container for hero section
    // Controls:herobanner image,Heading and pargagraph section.
    <div className="hero-container ">
        <Image
          className="hero_pic  object-cover top-0 left-0 "
          src="/prop-4kitchen.png"
          alt="Picture of RealEstate property"
          width={1080}
          height={1080}
        
        />
        {/* Add image overlay ,styling located in global.css file*/}
        <div className="overLay w-full  "/>
          <div className="hero_header  max-w-[1110px]:   mx-auto  text-white  absolute top-0  w-full  h-full flex flex-col justify-center text-center bg-transparent/10 pb-5">
            {/* Herobanner heading */}
            <h1 className="
            text-xl text-center bg-transparent/0 relative  bottom-[16vh]
            sm:text-2xl sm:bottom-[10vh] sm:relative
            md:text-3xl   
            lg:bottom-[9vh]   
            ">
              <span className="f-design bg-transparent/0 ">Invest</span> In Your Happiness
            
            </h1>
            {/* Herobanner paragraph section styling located in global.css file. */}
            <section className="para_section   bg-transparent/0 w-80 relative 
             sm:bottom-24">
            <p className=" sans-font bg-transparent/0 text-pretty leading-[4vh] relative 
            bottom-[15vh] text-xl
            sm:bottom-0 sm:text-xl
            md:text-1xl
            lg:text-1xl lg:leading-[4.1vh]  lg:bottom-0 
             ">
              Here at Dream Realty, we understand the significance of finding a
              property that perfectly complements your unique needs and
              aspirations.<br/> In the vibrant state of Georgia, we offer a diverse
              selection of beautiful homes, each waiting to be the backdrop for
              your life's next chapter.<br/>Contact us <span className="contact_us bg-transparent/0 ">today!</span>
              <br />
              {/* Contact button on Hero banner */}
              <ContactBtn/>
            </p>
            
            </section>
           
          </div>
        </div>
  );
}

export default Hero;
