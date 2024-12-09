import React, { useEffect, useState } from 'react'
import { FaArrowRightLong } from "react-icons/fa6"
import { FaArrowLeftLong } from "react-icons/fa6"
import TestimonialItem from './TestimonialItem'

export default function Testimonials({ className }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const testimonials = [
        { id: 1, name: "Mehluli", message: "Zadzamatura yakandibatsira goho rangu rikawedzera 1" },
        { id: 2, name: "Mbuya Saunyama", message: "Zadzamatura yakandibatsira goho rangu rikawedzera 2" },
        { id: 3, name: "Sorudos", message: "Zadzamatura yakandibatsira goho rangu rikawedzera 3" },
    ]

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }

    // Auto-rotate the carousel every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
        }, 5000)
        return () => clearInterval(interval) // Cleanup interval on component unmount
    }, [testimonials.length])

    return (
        <div 
        className={`relative h-64 md:h-[450px] w-full bg-cover bg-center bg-[url('http://localhost:8000/img/soft-wheat.jpg')] ${className}`}
        >
            <div className='bg-black/75 w-full h-full flex flex-row justify-center items-center relative'>
                <div 
                    onClick={handlePrev}
                    className='bg-white/80 w-10 h-10 flex items-center justify-center cursor-pointer translate-x-10 md:translate-x-5'
                >
                    <FaArrowLeftLong className='text-green-600 hover:text-zdPink text-xl' />
                </div>
                <div>
                    <TestimonialItem 
                        message={testimonials[currentIndex].message} 
                        name={testimonials[currentIndex].name}
                    />                
                </div>
                <div 
                    onClick={handleNext}
                    className='bg-white/80 w-10 h-10 flex items-center justify-center cursor-pointer -translate-x-10 md:-translate-x-5'
                >
                    <FaArrowRightLong className='text-green-600 hover:text-zdPink text-xl' />
                </div>
            </div>
        </div>
    )
}
