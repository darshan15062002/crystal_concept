import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
import { useSearchParams } from 'react-router-dom';

import MobileSidebar from './MobileSidebar';


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
                    <li><a href="#">Login </a></li>
                </ul>





            </div >
            {show && <MobileSidebar />
            }
        </>
    )
}

export default Header
