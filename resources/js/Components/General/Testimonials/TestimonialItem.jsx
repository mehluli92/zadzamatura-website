import React from 'react'
import { IoPerson } from "react-icons/io5"


export default function TestimonialItem({className, message, name='Mex'}) {
  return (
    <div 
    className={`bg-green-600/75 w-[400px] md:w-[600px] h-64 md:h-96 text-white text-2xl flex flex-col items-center justify-center gap-3 md:gap-6 px-2 ${className}`}
    >
        <div className='md:w-28 md:h-28 rounded-full border-4 border-zdPink flex items-center justify-center'>
            <IoPerson className=' rounded-full text-gray-600/25 text-7xl'/>
        </div>

        <p className='text-lg text-center'>
         {message}
        </p>
        <hr className='w-1/2 text-white'/>
        <p className='capitalize font-normal'>{name}</p>
    </div>
  )
}
