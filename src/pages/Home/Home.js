import React from 'react'
import Hero from '../../component/Hero'
import Testimonials from '../../component/Testimonials'
import Search from '../../component/Search'

function Home() {
    return (
        <div className='mt-16 z-0 h-full w-screen px-6 py-12 flex bg-slate-50 flex-col sm:gap-7 gap-4'>
            <div className="flex sm:px-16 sm:flex-row flex-col sm:justify-between gap-2">
                <h3 className=' font-bold font-sans text-[#121331] text-2xl'>Let's Learn New</h3>
                <Search />
            </div>
            <Hero />
            <Testimonials />

        </div>
    )
}

export default Home