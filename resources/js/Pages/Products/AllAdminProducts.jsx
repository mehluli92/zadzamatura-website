import PrimaryButton from '@/Components/PrimaryButton'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

export default function AllAdminProducts({products}) {
  return (
    <AuthenticatedLayout
    header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Products
        </h2>
    }
  >
    <Head title="All Products" />

    <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                <div className="p-2 text-gray-900 flex flex-col gap-2">
                  <PrimaryButton
                  className='w-1/6'
                  >
                    <Link
                      href={'products/create'}
                      >
                      Add Products
                    </Link>
                  </PrimaryButton>
                    <div>
                      <div
                      className='grid grid-cols-6 items-center 
                      border-b border-gray-300 py-4 bg-gray-50 px-2 text-lg'
                      >
                          <p>
                            Id
                          </p>
                          <p>
                            Name
                          </p>
                          <p>
                            Description
                          </p>
                          <p>
                            Category
                          </p>
                          <p>
                            Image
                          </p>
                          <p>
                            Action
                          </p>
                      </div>
                      {products.length === 0 && <p className='p-6'>No products at this time.</p>}

                      {
                      products.map((product)=>(
                        <div 
                        key={product.id}
                        className='grid grid-cols-6 items-center border-b border-gray-300 py-1 px-2'
                        >
                          <p>
                            {product.id}
                          </p>
                          <p>
                            {product.name}
                          </p>
                          <p className='flex flex-wrap'>
                            {product.description}
                          </p>
                          <p>
                            {product.category}
                          </p>
                          <div>
                          <img
                            src={`/uploads/${product.image}`} // Adjust path based on your setup
                            alt={product.name}
                            className="w-30 h-auto object-cover rounded"
                          />
                          </div>
                          <div className='p-2 space-x-2'>
                            <span className='hover:text-gray-400'>
                              <Link href={`/products/${product.id}/edit`}>
                              Edit
                              </Link>
                            </span>
                            <span className='text-red-600 hover:text-red-400'>Delete</span>
                          </div>
                        </div>
                      ),[])
                      }
                    </div>
                </div>
            </div>
        </div>
    </div>
  </AuthenticatedLayout>
  )
}
