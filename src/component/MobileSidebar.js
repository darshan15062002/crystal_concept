import React from 'react'
import { AiFillHome, AiOutlineHome, AiOutlineYoutube } from 'react-icons/ai'
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
                    <li className='px-5 py-2 flex gap-2 justify-start items-center  hover:text-[#2D80F6] ' ><span className='text-[#09BD81]'>|</span><LiaBookSolid /><a href="#">Practise Paper</a> </li>
                    <li className='px-5 py-2 flex gap-2 justify-start items-center  hover:text-[#2D80F6] '><span className='text-[#09BD81]'>|</span><GiNewspaper /><a href="#">Exam Preparation</a></li>
                    <li className='px-5 py-2 flex gap-2 justify-start items-center  hover:text-[#2D80F6] '><span className='text-[#09BD81]'>|</span><AiOutlineYoutube /><a href="/login">Join YouTube </a></li>
                    <li className='px-5 py-2 flex gap-2 justify-start items-center  hover:text-[#2D80F6] '><span className='text-[#09BD81]'>|</span><FaRegPaperPlane /><a href="/login">Join Telegram</a></li>
                </ul>
            </div>
        </div>
    )
}

export default MobileSidebar