import React from 'react'

export default function ChooseUsItem({children, className}) {
  return (
    <div
    className={`text-white flex flex-col justify-start ${className}`}
    >
        {children}
    </div>
  )
}
