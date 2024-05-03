import React from 'react'
import MyNavbar from '@/app/components/Navigation/MyNavbar'
import Hero from './HeroBanner/Hero';
import FeaturedProperties from './Featured-props/FeaturedProperties';
import ClosedHomes from '../ClosedHomes/ClosedHomes'
function HomePage() {
  return (
    // Returns the Navbar, Hero section.
    <div className='w-full'>
      <MyNavbar/>
      <div><Hero/></div>
      <main className=''>
        {/* Div that divides each section,styling located in global.css file */}
        <div className='divider_div relative'></div>
            <div className="slideImg-container relative z-50">
          <FeaturedProperties/>  
          </div>
        <div className="
        divider_div relative z-50
        top-[4.4vh] 
        md:top-[9.4rem]"/>
        {/* Closed property container  */}
        <div>
        <ClosedHomes/>
        </div>
      </main>
    </div>
  )
}
 
export default HomePage
