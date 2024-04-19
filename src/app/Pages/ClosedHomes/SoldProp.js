import React from 'react'
import Image from 'next/image'
const SoldProp = ({slide}) => {
  return (
    <div className='w-full h-full lg:mx-auto '>
    <div

    className=" w-full h-full rounded-2xl bg-center bg-cover  ease-in-out duration-500
     lg:flex  lg:justify-center mb-[2rem]
    
    "

    >  <div className="sold_container w-full text-center   ">
              <div className=" sold_sign  w-16 h-16 relative top-[16rem] mx-auto
                sm:z-50 sm:top-[16rem] md:top-[10rem] md:left-[1rem] lg:top-[2rem]
              ">
              <p className=' relative top-6  mx-auto text-sm font-bold '>Sold!!</p>

              </div>

    </div>
      <div className="soldImages-container mb-[10rem] sm:absolute w-full  ">
      <Image src={`${slide}`} 
      width={180}
      height={180}
      alt="Sold Home Image"
      className='closed_homes p-0 mb-[10rem] w-72 mx-auto rounded-lg sm:w-72 sm:mx-auto md:w-72 
      lg:relative  lg:w-[20rem]  lg:z-50 
      

      '
      />
      </div>
    

    </div>
  </div>
)
}
export default SoldProp
