import React from 'react'
import Hero from '../../component/Hero'
import Testimonials from '../../component/Testimonials'
import Search from '../../component/Search'

function Home() {
    return (
        <div className='mt-16 z-0 px-7 py-5 flex bg-slate-50 flex-col gap-7'>
            <h3 className=' font-bold font-sans text-[#121331] text-2xl'>Let's Learn New</h3>
            <Search />
            <Hero />
            <Testimonials />

        </div>
    )
}

export default Home