import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
import { useSearchParams } from 'react-router-dom';
import { AiOutlineHome, AiOutlineYoutube } from 'react-icons/ai'
import { FaRegPaperPlane } from 'react-icons/fa'
import { GiNewspaper } from 'react-icons/gi'
import { LiaBookSolid } from 'react-icons/lia'


// 2D80F6
// 09BD81
function Header() {
    const [searchpharams] = useSearchParams()

    const [show, setShow] = useState(false)
    return (
        <>
            <div className='justify-between z-50  fixed top-0 shadow-lg flex  sm:flex-row flex-row-reverse  items-center sm:px-12 px-3  h-16 w-full'>
                <h1 className='text-white font-serif  mt-4 sm:text-xl text-xl mb-5   font-extrabold' style={{ fontFamily: 'Poppins', color: '#2D80F6' }}>Crystal <span className='text-[#09BD81]'>Concept</span></h1>
                <div className="sm:hidden flex">
                    <Hamburger size={23} color="#2D80F6" rounded onToggle={toggled => {
                        if (toggled) {
                            setShow(true)
                        } else {
                            // close a menu
                            setShow(false)
                        }
                    }} /></div>

                <ul className=' font-medium font-serif sm:flex hidden gap-10' style={{ fontFamily: 'Poppins', color: '#2D80F6' }}>
                    <li> <a href="/"> Home</a></li>
                    <li><a href="#">My Status</a> </li>
                    <li><a href="#">About</a></li>
                    <li><a href="/login">Login </a></li>
                </ul>





            </div >
            {show && <div className="fixed h-screen w-3/5 bg-[#f5f9ff] shadow-lg top-16 left-0 transition ease-in delay-150 ">
                <div className="profile flex justify-center items-center py-10 ">
                    <button className='px-4 py-2 bg-[#09BD81] rounded-full text-white font-light'>Sign Up / Log In</button>
                </div>

                <div className="menu px-5 py-3  ">
                    <ul className='flex flex-col justify-between gap-2 text-xl font-medium'>
                        <li className='px-5 py-2 flex gap-2 justify-start items-center  hover:text-[#2D80F6] '><AiOutlineHome /> <a href="/"> Home</a></li>
                        <li className='px-5 py-2 flex gap-2 justify-start items-center  hover:text-[#2D80F6] ' ><LiaBookSolid /><a href="#">Practise Paper</a> </li>
                        <li className='px-5 py-2 flex gap-2 justify-start items-center  hover:text-[#2D80F6] '><GiNewspaper /><a href="#">Exam Preparation</a></li>
                        <li className='px-5 py-2 flex gap-2 justify-start items-center  hover:text-[#2D80F6] '><AiOutlineYoutube /><a href="/login">Join YouTube </a></li>
                        <li className='px-5 py-2 flex gap-2 justify-start items-center  hover:text-[#2D80F6] '><FaRegPaperPlane /><a href="/login">Join Telegram</a></li>
                    </ul>
                </div>
            </div>
            }
        </>
    )
}

export default Header
