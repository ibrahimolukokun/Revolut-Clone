import React from 'react'
import HeroImg from '../assets/Hero_bg.png'
import Hero from '../Hero/Hero'

const Home = () => {
  return (
    <>
        <div>
            {/* Hero Section */}
            <div className='absolute top-0 w-full min-h-screen flex items-center justify-center overflow-hidden'>
            <div className='absolute inset-0 sm:px-2'>
                {/* Background Image */}
                <img
                src={HeroImg}
                alt="Cloud Background"
                className="absolute inset-0 w-full h-full object-cover z-[-1]"
                />
                {/* Hero Content */}
                <div className="relative z-10 w-full px-4 sm:px-6 lg:px-12">
                    <Hero />
                </div>
            </div>
            </div>

            
        </div>
    </>
  )
}

export default Home