import React from 'react'
import { IoCallSharp } from "react-icons/io5"
import ChooseUsItem from './ChooseUs/ChooseUsItem'
import { FaTractor } from "react-icons/fa"
import { FaSeedling } from "react-icons/fa6"
import { BsPeopleFill } from "react-icons/bs"


export default function WhyChooseUs({className}) {
  return (
    <section
    className={`flex flex-col ${className}`}
    >
        <div className='flex flex-col items-center'>
        <h5 className='text-zdPink font-semibold text-lg uppercase'>Features</h5>
        <h1 className='text-5xl text-white font-bold py-4'>Why Choose Us!</h1>
        </div>
        <div className='grid grid-rows md:grid-cols-4 gap-2'>
            <div className='flex flex-col space-y-16 md:space-y-24'>
            <ChooseUsItem className={''}>
                    <div className='w-16 h-16 rounded-full bg-zdPink flex items-center justify-center'>
                      <FaSeedling className='text-white text-3xl' />
                    </div>
                    <h2 className='text-2xl font-bold'>Resilient seeds</h2>
                    <p className=''>
                    Our seeds are drought resilient.
                    </p>
            </ChooseUsItem>
            
            
            <ChooseUsItem className={''}>
                    <div className='w-16 h-16 rounded-full bg-zdPink flex items-center justify-center'>
                      <IoCallSharp className='text-white text-3xl' />
                    </div>
                    <h2 className='text-2xl font-bold'>24/7 Support</h2>
                    <p className=''>
                    We offer support any time.
                    </p>
            </ChooseUsItem>
            </div>
            <div 
            className='col-span-2 bg-white text-gray-600 p-6 '
            >
              <p className='py-3'>
              Tocek has excess seed processing capacity. It has land available for research and 
              demonstration on its 4ha block. On this block it has tested new crops, 
              compared performance with other varieties, examined traits of lines and carried out
              population trials.
              </p>
              <img src='/img/mixed-grains.jpg' className='py-2'/>
            </div>
            <div className='flex flex-col space-y-16 md:space-y-24 md:pl-6'>
              <ChooseUsItem className={''}>
                      <div className='w-16 h-16 rounded-full bg-zdPink flex items-center justify-center'>
                        <BsPeopleFill className='text-white text-2xl' />
                      </div>
                      <h2 className='text-2xl font-bold'>Experts</h2>
                      <p className=''>
                      Experienced leadership.
                      </p>
              </ChooseUsItem>

              <ChooseUsItem className={''}>
                      <div className='w-16 h-16 rounded-full bg-zdPink flex items-center justify-center'>
                        <FaTractor className='text-white text-3xl' />
                      </div>
                      <h2 className='text-2xl font-bold'>Morden Farming</h2>
                      <p className=''>
                      Morden approach to farming.
                      </p>
              </ChooseUsItem>
            </div>
        </div>
    </section>
  )
}
