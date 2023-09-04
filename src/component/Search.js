import React from 'react'
import { BsSearch } from 'react-icons/bs'
function Search() {
    return (
        <div className='flex  items-center justify-center sm:justify-end  sm:w-[30%]'>
            <input placeholder='Search here...' className=' outline-[#09BD81] sm:h-12   h-16 w-full px-3 py-3 rounded-full shadow-md ' />
            <BsSearch color='#2D80F6' size={25} className='absolute right-14 sm:right-24' />
        </div >
    )
}

export default Search