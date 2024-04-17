import React from 'react'

const SoldProp = ({slide}) => {
  return (
    <div className='w-full h-full '>
      <div

      className=" w-full h-full rounded-2xl bg-center bg-cover  ease-in-out duration-500
      md:flex 
      
      "
      slide={...slide}
      >  <div className="sold_container w-full text-center h-2/5 ">
                <div className=" sold_sign  w-16 h-16 relative left-40 top-40   ">
                <p className=' relative top-6  mx-auto text-sm font-bold '>Sold!!</p>

                </div>

      </div>
        <div className="soldImages-container ">
        <img src={`${slide}`} 
        className='closed_homes w-72 sm:mt-3 mx-auto rounded-lg sm:w-72 md:w-96 '
        />
        </div>
      

      </div>
    </div>
  )
}

export default SoldProp
