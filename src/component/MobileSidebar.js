import React from 'react'
import { AiFillHome, AiOutlineHome, AiOutlineLeft, AiOutlineYoutube } from 'react-icons/ai'
import { FaRegPaperPlane } from 'react-icons/fa'
import { GiNewspaper } from 'react-icons/gi'
import { LiaBookSolid } from 'react-icons/lia'
function MobileSidebar() {
    return (
        <div className="fixed h-screen w-3/5 z-50 bg-[#f5f9ff] shadow-lg top-16 left-0 transition ease-in delay-150 ">

            <div className="profile flex justify-center items-center py-10 ">
                <button className='px-4 py-2 bg-[#09BD81] rounded-full text-white font-light'>Sign Up / Log In</button>
            </div>

            <div className="menu px-5 py-3  ">
                <ul className='flex flex-col justify-between gap-2 text-xl font-medium'>
                    <li className='px-5 py-2 flex gap-2 justify-start items-center  hover:text-[#2D80F6] '><span className='text-[#09BD81]'>|</span><AiOutlineHome /> <a href="/"> Home</a></li>
                    <li className='px-5 py-2 flex gap-2 justify-start items-center  hover:text-[#2D80F6] ' ><span className='text-[#09BD81]'>|</span><LiaBookSolid /><a href="https://www.youtube.com/@crystalconceptshubham/playlists">Practise Paper</a> </li>
                    <li className='px-5 py-2 flex gap-2 justify-start items-center  hover:text-[#2D80F6] '><span className='text-[#09BD81]'>|</span><GiNewspaper /><a href="https://www.youtube.com/@crystalconceptshubham/playlists">Exam Preparation</a></li>
                    <li className='px-5 py-2 flex gap-2 justify-start items-center  hover:text-[#2D80F6] '><span className='text-[#09BD81]'>|</span><AiOutlineYoutube /><a href="https://www.youtube.com/channel/UC3_NJf886Au6pj59s2I1Bvg">Join YouTube </a></li>
                    <li className='px-5 py-2 flex gap-2 justify-start items-center  hover:text-[#2D80F6] '><span className='text-[#09BD81]'>|</span><FaRegPaperPlane /><a href="https://t.me/crystalconcept_shubhamchatrawat">Join Telegram</a></li>
                    <div className=" font-normal">
                        {/* 
                        <li className='px-5 py-2  hover:bg-slate-200 flex gap-2 justify-start items-center  hover:text-[#2D80F6] '><a href="/profile">Profile</a> </li>
                        <li className='px-5 py-2  hover:bg-slate-200 flex gap-2 justify-start items-center  hover:text-[#2D80F6] '><a href="about">About</a></li>
                        <li className='px-5 py-2  hover:bg-slate-200 flex gap-2 justify-start items-center  hover:text-[#2D80F6] '><a href="login">Login </a></li> */}

                    </div>
                </ul>
            </div>
        </div>
    )
}

export default MobileSidebar