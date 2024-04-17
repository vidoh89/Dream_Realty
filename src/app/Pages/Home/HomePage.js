import React from 'react'
import MyNavbar from '@/app/components/Navigation/MyNavbar'
import Hero from './HeroBanner/Hero';
import FeaturedProperties from './Featured-props/FeaturedProperties';
import ClosedHomes from '../ClosedHomes/ClosedHomes'
function HomePage() {
  return (
    <div className='w-full'>
      <MyNavbar/>
      <div><Hero/></div>
      <main className=''>
        <div className='divider_div relative'></div>
            <div className="slideImg-container">
          <FeaturedProperties/>  
          </div>
        <div className="divider_div relative" style={{marginTop:"5rem"}}/>
        <div>
        <ClosedHomes/>
        </div>
      </main>
    </div>
  )
}
 
export default HomePage
