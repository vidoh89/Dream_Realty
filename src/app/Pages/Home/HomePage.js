import React from 'react'
import MyNavbar from '@/app/components/Navigation/MyNavbar'
import prop4kitchenImg from '@/app/Home_images/forsalepropertyfour/prop-4kitchen.png';
import Hero from './HeroBanner/Hero';
import FeaturedProperties from './Featured-props/FeaturedProperties';
function HomePage() {
  return (
    <div className='w-full'>
      <MyNavbar/>
      <div><Hero/></div>
      <main className=''>
        <div className='divider_div '></div>
        <div className="slideImg-container mt-8 ">
          <FeaturedProperties/>  
          </div>
      </main>
    </div>
  )
}
 
export default HomePage
