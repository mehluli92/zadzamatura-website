import { Link } from '@inertiajs/react'
import React from 'react'
import { GrLinkNext } from "react-icons/gr"

export default function FooterLink({href,children}) {
  return (
    <div className='flex items-center gap-1'>
        <GrLinkNext className='text-white w-4' />
        <Link
        href={href}
        >
            {children}
        </Link>
    </div>
  )
}
