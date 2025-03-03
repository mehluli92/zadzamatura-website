import GreenButton from '@/Components/General/GreenButton'
import RedButton from '@/Components/General/RedButton'
import GeneralPageLayout from '@/Layouts/GeneralPageLayout'
import { formatDateTime } from '@/utils/formatDateTime'
import { Head, Link } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'

export default function ViewBlog({blog}) {
  const [imgUrl, setImgUrl] = useState('/img/countryside-farming.jpg')

  useEffect(()=>{
    if (blog) {
      const newImg = '/uploads/' + blog.image
      setImgUrl(newImg)
    }
  },[blog])

  return (
    <GeneralPageLayout
    >
    <Head title={blog.title} />

    {/* First section */}
    <section 
    className="relative h-[200px] md:h-[300px] w-full bg-cover bg-center"
    style={{ backgroundImage: `url(${imgUrl})` }}        
    >
    <div className='bg-black/10 w-full h-full flex items-center justify-center md:justify-start'>
      <div className='p-10 space-y-3'>
        <h2 className='text-white text-4xl md:text-7xl font-bold'>{blog.title}</h2>
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

    <section className='pt-2 px-5 md:pt-5 md:px-16 flex flex-col items-center justify-center'>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
      <p className='float-left'>
        <span className='p-1'>Published on:</span>
        {formatDateTime(blog.created_at)}
      </p>
    </section>
        
    </GeneralPageLayout>
  )
}