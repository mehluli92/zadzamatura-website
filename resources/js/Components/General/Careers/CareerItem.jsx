import { Link, usePage } from '@inertiajs/react'
import React, { useState } from 'react'

export default function CareerItem({career}) {
    const user = usePage().props.auth.user;

    const [open, setOpen] = useState(false)

  return (
    <div className={`border-b ${!open && 'border-gray-300' }`}>
        <div 
        className='grid md:grid-cols-5 px-3 py-4'
        onClick={()=>{setOpen(!open)}}
        >
            <p className='font-bold'>#{career.id}</p>
            <p className='pl-4 md:pl-0  '>{career.title}</p>
            <p className='pl-8 md:pl-0'>{career.department}</p>
            <p className='pl-12 md:pl-0'>{career.employment_type}</p>
            {/* <p className='text-xs'>{career.email}</p> */}
            <p>{career.due_date}</p>
        </div>
        {open && 
        <div className='items-center justify-center shadow-lg border-gray-300 py-4 space-y-4'>
            <h3 className='font-semibold text-zdPink'>Job Details</h3>
            <p dangerouslySetInnerHTML={{ __html: career.description }}></p>
            <p className='text-gray-500'>Apply to {career.email} on or before closing date</p>
            <div className={`space-x-2  ${!user && 'hidden'}`}>
                <Link
                className='text-green-600'
                href={route('careers.edit', career.id)}
                >
                Edit
                </Link>
                <Link
                className='text-zdPink'
                href={`/careers/${career.id}`}
                method="delete"
                as="button"
                data-confirm="Are you sure you want to delete this item?"
                >
                Delete
                </Link>
            </div>
        </div>}
    </div>
  )
}
