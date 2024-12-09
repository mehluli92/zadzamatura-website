import { Link, usePage } from '@inertiajs/react'
import React from 'react'

export default function BottomNavLink({ children, className, name, ...props }) {
    // Get current pathname
    const { url } = usePage()

    // Determine if the link is active
    const isActive = url === name

    return (
        <Link
            {...props}
            className={`flex items-center uppercase items-center justify-start
            py-2 md:py-0
            md:justify-center px-2 mx-1 font-semibold text-white md:h-full w-full md:w-auto hover:bg-zdPink 
            ${className} ${isActive ? 'bg-zdPink' : ''}`}
        >
            {children}
        </Link>
    )
}
