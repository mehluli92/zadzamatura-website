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
    // <div className="relative h-[250px] md:h-[500px] w-full overflow-hidden">
    //   <iframe
    //     className="absolute top-0 left-0 w-full h-[250px] object-cover"
    //     src="https://www.youtube.com/embed/85kTHwJ1Ju8?autoplay=1&mute=1&loop=1&playlist=85kTHwJ1Ju8"
    //     frameBorder="0"
    //     allow="autoplay; encrypted-media"
    //     allowFullScreen
    //     title="Background Video"
    //   ></iframe>
    //   <div className="absolute top-0 left-0 w-full h-[250px] bg-black opacity-50"></div>
    //   <div className="relative z-10 flex items-center justify-center w-full h-full text-white text-4xl">
    //     <h1>Your Content Here</h1>
    //   </div>
    // </div>
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
                    <GreenButton className="bg-deepBlue">
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
