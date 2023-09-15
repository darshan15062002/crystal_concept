import React from 'react'
import { AiOutlineLike } from 'react-icons/ai'

import { GrView } from 'react-icons/gr'

function HeroCard({ item }) {
    return (
        <div className=' h-full w-80  sm:w-[300px] sm:h-[250px] rounded-lg flex flex-col justify-center items-start  shadow-md px-4 py-4 bg-white text-xs mr-5'>
            <iframe className='w-[100%]'
                src={`https://www.youtube.com/embed/videoseries?si=HuWC7mw6d6My0j5B&amp;list=${item.id}`}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>

            </iframe>


            <h1 className='font-semibold sm:text-md text-sm line-clamp-2 text-gray-700'>{item.snippet.title}</h1>
            <div className="flex justify-between items-center w-full px-1">
                {/* <div className="flex gap-2 items-center"><GrView size={20} /> <span>200k</span></div>
                <div className="flex gap-2 items-center"> <AiOutlineLike size={20} /> <span>50k</span></div> */}
            </div>
        </div>
    )
}

export default HeroCard