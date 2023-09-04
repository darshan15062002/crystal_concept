import React from 'react'
import { AiOutlineLike } from 'react-icons/ai'

import { GrView } from 'react-icons/gr'

function HeroCard() {
    return (
        <div className=' h-full w-[256px]  sm:w-[300px] sm:h-[250px] rounded-lg flex flex-col justify-center items-start  shadow-md px-4 py-4 bg-white text-xs ml-5'>
            <img src="https://i.ytimg.com/vi/FFxS6tYE15o/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCIXJZITMWs46w0EmELX2c4RYz_sw" alt="" className='h-32 w-full' />
            <h1 className='font-sans sm:text-md text-xs line-clamp-2 text-gray-700'>10th SSC | Algebra | Chapter 1 | 2023-24 | MahaIMP Questions | Maharashtra Board | Crystal Concept</h1>
            <div className="flex justify-between items-center w-full px-1">
                <div className="flex gap-2 items-center"><GrView size={20} /> <span>200k</span></div>
                <div className="flex gap-2 items-center"> <AiOutlineLike size={20} /> <span>50k</span></div>
            </div>
        </div>
    )
}

export default HeroCard