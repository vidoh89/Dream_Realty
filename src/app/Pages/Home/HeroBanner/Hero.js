import React from "react";
import ContactBtn from "./ContactBtn";

function Hero() {
  return (
    <div className="hero-container">
        <img
          className="hero_pic  object-cover top-0 left-0"
          src="/prop-4kitchen.png"
          alt="Picture of RealEstate property"
        />
        <div className="overLay w-full  "/>
          <div className="hero_header  max-w-[1110px]:   mx-auto  text-white  absolute top-0  w-full  h-full flex flex-col justify-center text-center bg-transparent/10 pb-5">
            <h1 className="text-3xl sm:text-2xl md:text-4xl text-center bottom-28 sm:bottom-20 bg-transparent/0 relative  sm:relative ">
              <span className="f-design bg-transparent/0 ">Invest</span> In Your Happiness
            </h1>
            <section className="para_section  bg-transparent/0 w-80 relative  sm:bottom-24">
            <p className=" bg-transparent/0 text-lg relative bottom-28 sm:bottom-0 sm:text-xl md:text-xl lg:text-2xl ">
              Here at Dream Realty,we understand the significance of finding a
              property that perfectly complements your unique needs and
              aspirations.<br/> In the vibrant state of Georgia, we offer a diverse
              selection of beautiful homes, each waiting to be the backdrop for
              your life's next chapter.<br/>Contact us <span className="contact_us bg-transparent/0 ">today!</span>
              <br />
              <ContactBtn/>
            </p>
            
            </section>
            {/* <p className="text-center bg-transparent/0 w-60">
              Here at Dream Realty,we understand the significance of finding a
              property that perfectly complements your unique needs and
              aspirations. In the vibrant state of Georgia, we offer a diverse
              selection of beautiful homes, each waiting to be the backdrop for
              your life's next chapter.Contact us today!
              <br />
              <ContactBtn />
            </p> */}
          </div>
        </div>
  );
}

export default Hero;
