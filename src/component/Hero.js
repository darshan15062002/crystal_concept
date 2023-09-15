import React, { useState } from 'react'
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import HeroCard from './HeroCard'
import { useEffect } from 'react';
import { useVideoId } from '../utils/useVideoId';

function Hero() {
    const [videos, setVideoIds] = useState([]);
    const videoID = [
        "1DW8Ltgqqi8?si=5_AdbRTCvAvOKNmg",
        "I7oHqh5_mQw?si=v4m75uPY6uFZtufY",
        "FFxS6tYE15o?si=rhOwQ_9qEhabPO1-",
        "qnWWXwrl0w0?si=Eoz6FC8w3RVn9xI0",
        "yiPlnsjV8no?si=QR9TPq8GFA2KjwA5",
        "nqgh4QbyOb0?si=AFAZVBuGzqofv5F1"

    ]
    const channelId = "UC3_NJf886Au6pj59s2I1Bvg";
    const videoIds = useVideoId(channelId);
    console.log(videoIds, "videoids");


    return (<div className='flex flex-col '>
        <h3 className=' font-semibold font-sans text-[#121331] text-xl'>Latest Videos</h3>
        <div className="sm:h-72 h-56 flex justify-start items-center  overflow-x-scroll no-scrollbar">
            {/* <AiOutlineLeft size={40} className='sm:block absolute left-0 top-28 text-[#09BD81] ' onClick={prevSlide} /> */}

            <div className=' flex justify-start items-center '>
                {videoIds.map((item, index) => (
                    <HeroCard item={item} key={index} />
                ))}


            </div>
            {/* <AiOutlineRight size={40} className='sm:block absolute right-0 top-28 text-[#09BD81] ' onClick={nextSlide} /> */}
        </div>
    </div>
    )
}

export default Hero