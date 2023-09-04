import React, { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import HeroCard from './HeroCard'

function Hero() {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const nextSlide = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex + 1) % 10);
    // };

    // const prevSlide = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex - 1 + 10) % 10);
    // };
    return (
        <div className="relative  mx-5 sm:mx-16   sm:h-72 h-56 flex justify-start text-center align-middle  overflow-x-scroll no-scrollbar">
            {/* <AiOutlineLeft size={40} className='sm:block absolute left-0 top-28 text-[#09BD81] ' onClick={prevSlide} /> */}
            <div className='sm:h-56  px-0  sm:px-10  h-56  rounded-md flex justify-start        '>
                {Array(10).fill("").map((item) => (
                    <HeroCard />
                ))}


            </div>
            {/* <AiOutlineRight size={40} className='sm:block absolute right-0 top-28 text-[#09BD81] ' onClick={nextSlide} /> */}
        </div>
    )
}

export default Hero