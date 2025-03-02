import React from 'react'
import LogoComponent from '../LogoComponent'
import { FaFacebookSquare } from "react-icons/fa"
import { MdOutlinePhonelinkRing } from "react-icons/md"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaInstagramSquare } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

export default function TopNavigation() {
  return (
    <nav className='hidden md:grid grid-cols-12 py-4 items-center px-6 md:h-[125px] text-3xl font-bold'>
      <div className='col-start-1 col-span-3 flex items-center flex-wrap'>
        <MdOutlinePhonelinkRing className='text-deepBlue text-4xl'/>
        <p className='flex flex-wrap'>
          +263242003372
        </p>
      </div>
      <div className='col-start-6 col-span-2'>
      <LogoComponent/>
      </div>
      
      <div className='col-start-11 col-span-2 flex gap-2 justify-end'>
        <FaFacebookSquare className='text-deepBlue hover:text-black text-4xl' />
        <FaSquareXTwitter className='text-deepBlue hover:text-black text-4xl' />
        <FaInstagramSquare className='text-deepBlue hover:text-black text-4xl'/>
        <FaLinkedin className='text-deepBlue hover:text-black text-4xl'/>
      </div>
    </nav>
  )
}
