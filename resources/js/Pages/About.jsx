import Counter from '@/Components/General/Counter'
import GreenButton from '@/Components/General/GreenButton'
import RedButton from '@/Components/General/RedButton'
import SectionTitle from '@/Components/General/SectionTitle'
import GeneralPageLayout from '@/Layouts/GeneralPageLayout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

import { FaStar } from "react-icons/fa6"
import { GiCoffeeCup } from "react-icons/gi"
import { GiFarmer } from "react-icons/gi"
import { SiCommerzbank } from "react-icons/si"

export default function About() {
  return (
    <GeneralPageLayout>
    <Head title="About Us" />
    {/** Image and welcome section */}
    <section 
    className="relative h-[200px] md:h-[300px] w-full bg-cover bg-center"
    style={{ backgroundImage: `url('http://localhost:8000/img/corn-img.jpg')` }}        
    >
    <div className='bg-black/40 w-full h-full flex items-center justify-center md:justify-start'>
      <div className='p-10'>
        <h2 className='text-white text-4xl md:text-7xl font-bold'>About Us</h2>
        <div className='flex gap-1 pt-2'>
        <GreenButton>
          <Link
          href={`/`}
          className='flex items-center gap-2 font-semibold z-10'
          >
          Home
          </Link> 
        </GreenButton>
        <RedButton>About Us</RedButton>
        </div>
      </div>
    </div>
    </section>

    {/** About Description */}
    <section
    className='py-6 flex flex-col gap-2 justify-start px-10 md:px-20'
    >
      <SectionTitle title={'overview'} className=''/>
      <p>
      Tocek Seed Company is a locally registered business entity with a mandate and license to market and promote seed and chemicals in Zimbabwe. 
      In Zimbabwe it is branded as Zadzamatura. Tocek Seed Company distributes seed and agrochemicals respectively in Zimbabwe and is establishing 
      operations regionally in the Southern African Development Community (SADC) block of countries.
      </p>

      <p>
      Tocek has excess seed processing capacity. It has land available for research and demonstration on its 4ha block. 
      On this block it has tested new crops, compared performance with other varieties, examined traits of lines and 
      carried out population trials.
      </p>

      <h2 className='text-xl font-semibold'>Our Vision</h2>
      <p>
      To ensure food security and balanced nutrition by focusing on staple cereal and legume 
      crops for sub-Saharan Africa or East and Central Africa and ensures in making this broad range of cereal 
      and legume seed available at competitive prices.
      </p>

      <h2 className='text-xl font-semibold'>Our Mission</h2>
      <p>
        We breed seed, feed and lead in sub-Saharan Africa.
      </p>

      <h2 className='text-xl font-semibold'>Core Values</h2>
      <ul className="list-disc pl-5 marker:text-zdPink">
        <li>
          Putting customers at the centre
        </li>
        <li>
          Information advantage
        </li>
        <li>
          Research and Development
        </li>
        <li>
          Work and win together
        </li>
      </ul>

    </section>

    {/** Statistics section */}
    <section 
        className='bg-green-600 md:h-64 my-2 md:my-2 grid grid-rows-4 md:grid-cols-4 py-16 md:py-32 px-8 md:px-32'
        >
            <div className='flex items-center gap-1 content-center py-6 md:py-0'>
                <div 
                className='bg-zdPink rounded-full w-16 h-16 flex items-center justify-center'
                >
                    <FaStar className='text-white text-3xl'/>
                </div>
                <div className='flex flex-col gap-1'>
                <h4 className='text-xl font-bold text-white'>Our Experience</h4> 
                <Counter max={13}  comment={'years'}/>
                </div>
            </div>
            <div className='flex items-center gap-1'>
                <div
                className='bg-zdPink rounded-full w-16 h-16 flex items-center justify-center'
                >
                    <SiCommerzbank className='text-white text-3xl'/>
                </div>
                <div className=''>
                <h4 className='text-xl font-bold text-white'>Commercial Farmers</h4> 
                <Counter max={35}/>
                </div>
            </div>
            <div className='flex items-center gap-1'>
                <div
                className='bg-zdPink rounded-full w-16 h-16 flex items-center justify-center'
                >
                    <GiFarmer className='text-white text-3xl'/>
                </div>
                <div className=''>
                <h4 className='text-xl font-bold text-white'>Small Scale Farmers </h4> 
                <Counter max={1200}/>
                </div>
            </div>
            <div className='flex items-center gap-1'>
                <div
                className='bg-zdPink rounded-full w-16 h-16 flex items-center justify-center'
                >
                    <GiCoffeeCup className='text-white text-3xl'/>
                </div>
                <div className=''>
                <h4 className='text-xl font-bold text-white'>Happy Clients</h4> 
                <Counter max={10000}/>
                </div>
            </div>
        </section>
    </GeneralPageLayout>
  )
}
