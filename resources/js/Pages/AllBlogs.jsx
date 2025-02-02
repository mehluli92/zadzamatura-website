import GreenButton from '@/Components/General/GreenButton'
import RedButton from '@/Components/General/RedButton'
import SecondaryButton from '@/Components/SecondaryButton'
import GeneralPageLayout from '@/Layouts/GeneralPageLayout'
import { Head, Link } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'

export default function AllBlogs({data}) {

  return (
    <GeneralPageLayout>
    <Head title="Products" />
    {/* First section */}
    <section 
    className="relative h-[200px] md:h-[300px] w-full bg-cover bg-center"
    style={{ backgroundImage: `url('/img/countryside-farming.jpg')` }}        
    >
    <div className='bg-black/10 w-full h-full flex items-center justify-center md:justify-start'>
      <div className='p-10 space-y-3'>
        <h2 className='text-white text-4xl md:text-7xl font-bold'>Blog Posts</h2>
        <div className='flex gap-1 pt-2'>
        <GreenButton>
          <Link
          href={`/`}
          className='flex items-center gap-2 font-semibold z-10'
          >
          Home
          </Link>
        </GreenButton>
        <RedButton>Blog Posts</RedButton>
        </div>
      </div>
    </div>
    </section>

    {/* Seeds section */}
    <section
    className='pt-6 flex flex-col items-center justify-center flex-wrap gap-4 md:gap-2  px-2 md:px-20'
    >
      {
        data.length === 0 ? 
        <p>There are no posts at this time.</p>
        :
        <div className='flex flex-wrap gap-2  md:pb-64'>
          {data.map((post) => (
            <div
                key={post.id}
                className="border hover:shadow transition w-full md:w-[380px] md:h-36 md:mb-48 mb:mb-2"
            >
                <img
                    src={`/uploads/${post.image}`}
                    alt={post.title}
                    className="w-full h-64 object-cover"
                />
                <h2 className="font-bold text-lg text-gray-900  hover:text-gray-800 flex flex-wrap">
                    <Link
                    href={`/blogs/${post.id}`}
                    >
                    {post.title}
                    </Link>
                </h2>
                <SecondaryButton className='rounded-none border-zdPink text-zdPink mb-2'>
                  <Link
                      href={`/blogs/${post.id}`}
                      >
                      Read More
                  </Link>
                </SecondaryButton>
            </div>
          ))}
        </div>
      }
    </section>

    </GeneralPageLayout>
  )
}
