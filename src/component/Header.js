import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
import { Link, useSearchParams } from 'react-router-dom';

import MobileSidebar from './MobileSidebar';
import { AiOutlineHome, AiOutlineYoutube } from 'react-icons/ai';
import { LiaBookSolid } from 'react-icons/lia';
import { GiNewspaper } from 'react-icons/gi';
import { FaRegPaperPlane } from 'react-icons/fa';


// 2D80F6
// 09BD81
function Header() {
    const [searchpharams] = useSearchParams()

    const [show, setShow] = useState(false)
    return (
        <div className="sticky z-50 top-0 bg-white  shadow-lg ">
            <div className='justify-between   flex  sm:flex-row flex-row-reverse  items-center sm:px-12 px-3  h-16 w-full'>
                <Link to='/' className='text-white font-serif  mt-4 sm:text-xl text-xl mb-5   font-extrabold' style={{ fontFamily: 'Poppins', color: '#2D80F6' }}>Crystal <span className='text-[#09BD81]'>Concept</span></Link>
                <div className="sm:hidden flex">
                    <Hamburger size={23} color="#2D80F6" rounded onToggle={toggled => {
                        if (toggled) {
                            setShow(true)
                        } else {
                            // close a menu
                            setShow(false)
                        }
                    }} /></div>

                <ul className=' font-normal  font-sans sm:flex hidden gap-10' style={{ fontFamily: 'Poppins', color: '#2D80F6' }}>
                    <li> <a href="/"> Home</a></li>

                    <li><a href="https://www.youtube.com/@crystalconceptshubham/playlists">Practise Paper</a> </li>
                    <li><a href="https://www.youtube.com/@crystalconceptshubham/playlists">Exam Preparation</a></li>
                    <li><a href="https://www.youtube.com/channel/UC3_NJf886Au6pj59s2I1Bvg">Join YouTube </a></li>
                    <li><a href="https://t.me/crystalconcept_shubhamchatrawat">Join Telegram</a></li>

                </ul>





            </div >
            {show && <MobileSidebar />
            }
        </div>
    )
}

export default Header
