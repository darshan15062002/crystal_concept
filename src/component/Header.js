import React, { useState } from 'react'
import Hamburger from 'hamburger-react'
import { useSearchParams } from 'react-router-dom';

function Header() {
    const [searchpharams] = useSearchParams()

    const [show, setShow] = useState(false)
    return (
        <div className='justify-between fixed top-0 shadow-lg flex z-10 sm:flex-row flex-row-reverse  items-center sm:px-12 px-3  h-14 w-full bg-purple-900'>
            <h1 className='text-white font-serif  mt-4 sm:text-xl text-xl mb-5   font-extrabold'>Crystal Concept Classes</h1>
            <div className="sm:hidden flex">
                <Hamburger size={23} color="#FFFFFF" rounded onToggle={toggled => {
                    if (toggled) {
                        setShow(true)
                    } else {
                        // close a menu
                        setShow(false)
                    }
                }} /></div>
            {show && <ul className='  font-medium font-serif flex flex-col absolute left-1 rounded-md  bg-white hover:bg-gray-200 text-black p-5 gap-2 top-14'> <li><a href="#">About Us</a></li><li><a href="/">{searchpharams ? 'Logout' : 'Login'} </a></li></ul>
            }
            <ul className=' text-white font-medium font-serif sm:flex hidden gap-10'><li> <a href="/"> Home</a></li>  <li><a href="#">My Status
            </a> </li><li><a href="#">About</a></li><li><a href="/login">Login </a></li></ul>
        </div >
    )
}

export default Header
