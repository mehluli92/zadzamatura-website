import React from 'react'

export default function GreenButton({children, className}) {
  return (
    <button
    className={`bg-green-600 py-2 md:py-3 px-3 md:px-8 text-white hover:text-black font-semibold text-lg ${className}`}
    >
        {children}
    </button>
  )
}
