import React from 'react'

function Testimonials() {
    return (
        <div className='flex flex-wrap justify-around items-center gap-5 rounded-lg'>
            {
                Array(4).fill("").map((item) => (
                    <div className="h-24 w-28 bg-slate-400"></div>
                ))
            }
        </div>
    )
}

export default Testimonials