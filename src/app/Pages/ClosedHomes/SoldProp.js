import React from 'react'

const SoldProp = ({slide}) => {
  return (
    <div className='w-full h-full '>
      <div

      className=" w-full h-full rounded-2xl bg-center bg-cover  ease-in-out duration-500
      md:flex
      
      "
      slide={...slide}
      > 
        <h3 className='sold_sign'>Sold!!</h3>
        <img src={`${slide}`} 
        className='closed_homes w-72 mt-3 mx-auto rounded-lg sm:w-72 md:w-96 '
        />

      </div>
    </div>
  )
}

export default SoldProp
