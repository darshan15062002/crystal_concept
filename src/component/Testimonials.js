import React from 'react'
import { BsYoutube } from 'react-icons/bs'
import { FaNewspaper, FaPaperPlane } from 'react-icons/fa'
import { GiNewspaper } from 'react-icons/gi'
function Testimonials() {
    return (
        <div className='flex flex-wrap justify-between  items-center gap-5 rounded-lg'>
            {/* {
                Array(4).fill("").map((item) => (
                    <div className="h-24 w-28 rounded-lg bg-[#F9C2DD]"></div>
                ))
            } */}
            <a className="h-24 w-36 sm:w-52 rounded-lg bg-[#F9C2DD] shadow-lg p-2"
                href='https://www.youtube.com/channel/UC3_NJf886Au6pj59s2I1Bvg' >
                <BsYoutube color='#F662AA' size={35} />
                <h1 className='text-gray-700 text-sm font-bold'>Youtube</h1>
                <span className='text-xs'>Join Youtube</span>
            </a>
            <a className="h-24 w-36 sm:w-52 rounded-lg  bg-[#A9EDEF] shadow-lg p-2"
                href='https://t.me/crystalconcept_shubhamchatrawat'>
                <FaPaperPlane color='#56CEF1' size={35} />
                <h1 className='text-gray-700 text-sm font-bold'>Telegram</h1>
                <span className='text-xs'>Join Telegram</span>
            </a>
            <a className="h-24 w-36 sm:w-52 rounded-lg  bg-[#DED7FC] shadow-lg p-2"
                href='https://www.youtube.com/@crystalconceptshubham/playlists'>
                <GiNewspaper color='#9581FC' size={35} />
                <h1 className='text-gray-700 text-xs font-bold'>Exam preparation</h1>
                <span className='text-xs'>Join</span>
            </a>
            <a className="h-24 w-36 sm:w-52 rounded-lg  bg-[#f5c48c] shadow-lg p-2"
                href='https://www.youtube.com/@crystalconceptshubham/playlists'>
                <FaNewspaper color='#F4A64A' size={35} />
                <h1 className='text-gray-700 text-xs font-bold'>Exam preparation</h1>
                <span className='text-xs'>Join </span>
            </a>

        </div>
    )
}

export default Testimonials