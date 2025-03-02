import ContactForm from '@/Components/General/ContactUs/ContactForm'
import GreenButton from '@/Components/General/GreenButton'
import RedButton from '@/Components/General/RedButton'
import SectionTitle from '@/Components/General/SectionTitle'
import GeneralPageLayout from '@/Layouts/GeneralPageLayout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'
import { CiLocationOn } from "react-icons/ci"
import { IoMailOpenOutline } from "react-icons/io5"
import { LuPhone } from "react-icons/lu"

export default function Contact() {
  return (
    <GeneralPageLayout>
    <Head title="Contact Us" />
    <section 
    className="relative h-[200px] md:h-[300px] w-full bg-cover bg-center "
    style={{ backgroundImage: `url('/img/hands.jpg')` }}        
    >
    <div className='bg-black/30 w-full h-full flex items-center justify-center md:justify-start'>
      <div className='p-10'>
        <h2 className='text-white text-4xl md:text-7xl font-bold'>Contact Us</h2>
        <div className='flex gap-1 pt-2'>
        <GreenButton className='bg-deepBlue'>
          <Link
          href={`/`}
          className='flex items-center gap-2 font-semibold z-10'
          >
          Home
          </Link>
        </GreenButton>
        <RedButton>Contact Us</RedButton>
        </div>
      </div>
    </div>
    </section>
    <section className='py-6 flex flex-col gap-2 items-center justify-center px-10 md:px-20'>
    <SectionTitle title={'contact us'} className=''/>
    <p className='capitalize font-bold text-3xl md:text-4xl flex justify-center'>
      please feel free to contact us.
    </p>
    {/* Contact form area */}
    <div className='flex flex-col md:flex-row'>
        <ContactForm/>
      <div className='bg-zdPink flex flex-col gap-3 p-6'>
        <h3 className='text-white text-4xl font-bold'>Get In Touch</h3>
        <div className='flex items-center gap-1'>
          <span className='bg-deepBlue w-16 h-16 rounded-full flex items-center justify-center'>
            <CiLocationOn className='text-white text-4xl'/>
          </span>
          <div className='space-y-1'>
              <h4 className='text-white font-bold text-xl'>Our Office</h4>
              <p className='text-white'>
                Plot K of Observatory Farm, Mount Hampden, Harare
              </p>
          </div>
        </div>

        <div className='flex items-center gap-1'>
          <span className='bg-deepBlue w-16 h-16 rounded-full flex items-center justify-center'>
            <IoMailOpenOutline className='text-white text-3xl'/>
          </span>
          <div className='space-y-1'>
              <h4 className='text-white font-bold text-xl'>Email</h4>
              <p className='text-white'>
                info@zadzamatura.co.zw
              </p>
          </div>
        </div>

        <div className='flex items-center gap-1'>
          <span className='bg-deepBlue w-16 h-16 rounded-full flex items-center justify-center'>
            <LuPhone className='text-white text-3xl'/>
          </span>
          <div className='space-y-1'>
              <h4 className='text-white font-bold text-xl'>Call Us</h4>
              <p className='text-white'>
                +263772568329
              </p>
          </div>
        </div>
      </div>
    </div>
    </section>
    </GeneralPageLayout>
  )
}
