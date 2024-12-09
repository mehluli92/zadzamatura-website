import React from 'react'

export default function RedButton({children, className}) {
  return (
    <button
    className={`bg-zdPink py-2 md:py-3 px-3 md:px-8 text-white hover:text-black font-semibold text-lg ${className}`}
    >
        {children}
    </button>
  )
}
