import React from 'react'

export default function LogoComponent() {
  return (
    <a 
    href="/" 
    className="p-0 m-0 md:py-2"
    >
      <img src='/img/logo_200-100.svg' className='md:w-30 h-auto hidden md:block'/>
      <img src='/img/logo-transparent.svg' className='w-32 h-auto md:hidden'/>
    </a>
  )
}
