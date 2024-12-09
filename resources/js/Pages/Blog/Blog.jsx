import PrimaryButton from '@/Components/PrimaryButton'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

export default function Blog({data}) {
  return (
    <AuthenticatedLayout
    header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Dashboard
        </h2>
    }
    >
    <Head title="Dashboard" />

    <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                <div className="p-6 text-gray-900 flex flex-col gap-2">
                    <PrimaryButton
                    className='w-2/12 justify-center'
                    >
                      <Link
                      href={'/blogs/create'}
                      >
                        Create Post
                      </Link>
                    </PrimaryButton>
                    
                    <div>
                      <div className='grid grid-cols-6 py-3 bg-gray-50 border-b border-gray-100 rounded-t'>
                        <p>Id</p>
                        <p>Title</p>
                        <p>Status</p>
                        <p>Slug</p>
                        <p>Image</p>
                        <p>Actions</p>
                      </div>
                      <div>
                        {data.length === 0 && <p className='p-6'>No posts at this time</p>}
                        {data.map((blog)=>(
                          <div 
                          key={blog.id}
                          className='grid grid-cols-6 py-2 items-center border-b border-gray-100'
                          >
                        <p>{blog.id}</p>
                        <p>{blog.title}</p>
                        <p>{blog.status}</p>
                        <p>{blog.slug}</p>
                        <p>
                          <img src={`/uploads/${blog.image}`}/>
                        </p>
                        <div className='space-x-2'>
                          <span>
                            <Link href={`/blogs/${blog.id}/edit`}>
                            Edit
                            </Link>
                          </span>
                          <span className='text-red-600 hover:text-red-400'>Delete</span>
                        </div>
                          </div>
                        ))}
                      </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </AuthenticatedLayout>
  )
}
