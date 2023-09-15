import React from 'react'
import Hero from '../../component/Hero'
import Testimonials from '../../component/Testimonials'
import Search from '../../component/Search'
import Subscriber from '../../component/Subscriber'

function Home() {
    return (
        <div className='px-5 sm:px-20 h-screen sm:h-full  bg-slate-100   py-5 flex flex-col sm:gap-10 gap-5'>
            {/* Search Part */}
            <div className="flex  sm:flex-row flex-col sm:justify-between gap-2">
                <h3 className=' font-bold font-sans text-[#121331] text-2xl'>Let's Learn New</h3>
                <Search />
            </div>
            <Hero />
            <Subscriber />
            <Testimonials />

        </div>
    )
}

export default Home