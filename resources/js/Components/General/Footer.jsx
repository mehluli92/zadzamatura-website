import React from 'react'
import FooterLink from '@/Components/General/FooterLink'
import { CiLocationOn } from "react-icons/ci"
import { IoMailOpenOutline } from "react-icons/io5"
import { LuPhone } from "react-icons/lu"
import { Link, usePage } from '@inertiajs/react'
import RedButton from './RedButton'


export default function Footer() {
    const user = usePage().props.auth.user

  return (
<footer className="h-auto bg-[url('/img/corn-img.jpg')] bg-cover bg-center">
    <div className='md:px-10 bg-green-600 md:bg-green-600/90 z-10 w-full h-full grid md:grid-cols-4 text-white'>
      <div className='p-4 flex flex-col gap-2'>
        <h3 className='font-bold mt-4 mb-2 text-2xl'>Get In Touch</h3>
        <p className='flex items-center gap-2'><CiLocationOn className='text-white text-4xl'/> Plot K of Observatory Farm, Mount Hampden, Harare</p>
        <p className='flex items-center gap-2'><IoMailOpenOutline className='text-white text-2xl' />admin@zadzamatura.co.zw </p>
        <p className='flex items-center gap-2'><LuPhone className='text-white text-xl' /> +263 772 568329</p>
      </div>
      <div className='p-4 flex flex-col gap-2'>
      <h3 className='font-bold mt-4 text-2xl'>Quick Links</h3>

      <FooterLink className="mt-4" href='/'>Home</FooterLink>
      <FooterLink className="" href='/about'>About Us</FooterLink>
      <FooterLink className="" href='/zadzamatura-products'>Our Services</FooterLink>
      <FooterLink className="" href='/zadzamatura-blogs'>Latest Posts</FooterLink>
      {user ? (
      <Link
      href={route('dashboard')}
      className=""
      >
      Dashboard
      </Link>
      ) : (
      <>
        <Link
        href={route('login')}
        className=""
        >
        Log in
        </Link>
        <Link
        href={route('register')}
        className=""
        >
        Register
        </Link>
        </>
      )}
      </div>
      <div className='p-4 flex flex-col gap-2'>
      <h3 className='font-bold mt-4 text-2xl'>Popular Links</h3>
      <FooterLink className="mt-4" href='/'>Home</FooterLink>
      <FooterLink className="" href='/about'>About Us</FooterLink>
      <FooterLink className="" href='/zadzamatura-products'>Our Services</FooterLink>
      <FooterLink className="" href='/zadzamatura-blogs'>Latest Posts</FooterLink>
      </div>
      <div className='p-4'>
      <h3 className='font-bold mt-4 text-2xl'>Subscribe to Newsletter</h3>
        <form className='flex flex-col items-center justify-center gap-2 '>
          <input className='bg-white/10 border border-gray-700 w-full'/>
          <RedButton className='w-full'>Suscribe</RedButton>
        </form>
      </div>
    </div>
      <div className='bg-gray-900 text-gray-400 text-xs flex items-center justify-center py-2'>© All rights reserved. Developed by Menokws</div>
    </footer>
  )
}
