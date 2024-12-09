import React from 'react'

export default function ServiceItem({children, className}) {
  return (
    <div
    className={`h-80 w-[350px] shadow-lg rounded-lg hover:rounded-none hover:bg-green-600 p-[48px] text-gray-700 hover:text-white flex flex-col items-center justify-center ${className}`}
    >
        {children}
    </div>
  )
}
