import { Link } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'
import { GrNext } from "react-icons/gr"
import { GrPrevious } from "react-icons/gr"
import GreenButton from './GreenButton'
import RedButton from './RedButton'


export default function HomeCorousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imgUrl, setImgUrl] = useState('')

  const items = [
    {id: 1, text: 'Seeds of the Future', longText: 'Partnering with You, From Seed to Harvest.', imgUrl: '/img/barley.jpg' },
    {id: 2, text: 'Crop Care, Perfected', longText: 'Sustainable Solutions for a Sustainable Future, One Crop at a Time.', imgUrl: '/img/agriculture-tractor.jpg' },
  ]

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
}

const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length)
}

// Auto-rotate the carousel every 5 seconds
useEffect(() => {
  
  const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length)
  }, 8000)
  setImgUrl(items[currentIndex].imgUrl)
  return () => clearInterval(interval) // Cleanup interval on component unmount
}, [items.length])

  return (
    <div>
        <div 
        className="relative h-[250px] md:h-[500px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${items[currentIndex].imgUrl})` }}        
        >
            <div className='bg-black/30 w-full h-full flex items-center justify-between'>
                <GrPrevious 
                onClick={handlePrev}
                className='text-gray-100/25 text-4xl md:text-6xl'
                />
                <div className='p-2 md:p-8'>
                <h2 className='text-white text-2xl md:text-3xl font-bold'>{items[currentIndex].text}</h2>
                <p className='text-white text-3xl md:text-5xl font-bold'>{items[currentIndex].longText}</p>
                <div className='flex gap-1 pt-2'>
                    <GreenButton>
                      <Link 
                      href={`/`}
                      className='flex items-center gap-2 font-semibold z-10'
                      >
                      Explore
                      </Link>
                    </GreenButton>
                    <RedButton>
                      <Link 
                      href={`/contact`}
                      className='flex items-center gap-2 font-semibold z-10'
                      >
                      Contact
                      </Link>
                    </RedButton>
                </div>
                </div>
                <GrNext 
                onClick={handleNext}
                className='text-gray-100/25 text-4xl md:text-6xl'
                />
            </div>
        </div>
    </div>
  )
}
