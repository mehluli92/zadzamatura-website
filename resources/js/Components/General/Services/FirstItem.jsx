import React from 'react'
import GreenButton from '../GreenButton'

export default function FirstItem({className}) {
  return (
    <div
    className={`md:h-96 w-[350px] py-2 md:py-6 flex flex-col gap-6 ${className}`}
    >
        <h2 className='text-4xl'>Farm Services</h2>
        <p className='text-gray-700'>
            We offer services to small scale farmers, commercial farmers and individuals. 
        </p>
        <GreenButton className='w-2/3'>Contact Us</GreenButton>
    </div>
  )
}
