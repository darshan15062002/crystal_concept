import React from 'react'
import { BsSearch } from 'react-icons/bs'
function Search() {
    return (
        <div className='flex  items-center justify-center'>
            <input placeholder='Search here...' className='  h-16 w-full px-3 py-3 rounded-full shadow-sm ' />
            <BsSearch color='#2D80F6' size={25} className='absolute right-14' />
        </div >
    )
}

export default Search