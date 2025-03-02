import GreenButton from '@/Components/General/GreenButton'
import RedButton from '@/Components/General/RedButton'
import SectionTitle from '@/Components/General/SectionTitle'
import GeneralPageLayout from '@/Layouts/GeneralPageLayout'
import { Head, Link } from '@inertiajs/react'
import React, { useEffect, useState } from 'react'

export default function Product({data}) {
  const [seedsProducts, setSeedsProducts] = useState([])
  const [chemicalsProducts, setChemicalsProducts] = useState([])

  useEffect(()=>{
    if(data) {
      setSeedsProducts(data.filter(product => product.category === "seeds"))
      setChemicalsProducts(data.filter(product => product.category === "chemicals"))
    }
  },[])


  return (
    <GeneralPageLayout>
    <Head title="Products" />
    {/* First section */}
    <section 
    className="relative h-[200px] md:h-[300px] w-full bg-cover bg-center"
    style={{ backgroundImage: `url('/img/mixed-grains.jpg')` }}        
    >
    <div className='bg-black/40 w-full h-full flex items-center justify-center md:justify-start'>
      <div className='p-10'>
        <h2 className='text-white text-4xl md:text-7xl font-bold'>Our Products</h2>
        <div className='flex gap-1 pt-2'>
        <GreenButton className="bg-deepBlue">
          <Link
          href={`/`}
          className='flex items-center gap-2 font-semibold z-10'
          >
          Home
          </Link> 
        </GreenButton>
        <RedButton>Products</RedButton>
        </div>
      </div>
    </div>
    </section>

    {/* Seeds section */}
    <section
    className='py-6 flex flex-col gap-2 justify-start px-10 md:px-20'
    >
    <SectionTitle title={'Seeds'} className=''/>
    <hr className='bg-zdPink py-[1px]'/>
      {
        seedsProducts.length === 0 ? 
        <p>There are no seeds products at this time.</p>
        :
        <div className='flex flex-wrap'>
          {seedsProducts.map((product) => (
            <div
                key={product.id}
                className="p-1 border rounded shadow hover:shadow transition w-[200px]"
            >
                <img
                    src={`/uploads/${product.image}`} // Adjust path based on your setup
                    alt={product.name}
                    className="w-full h-48 object-cover rounded"
                />
                <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                <p className="text-gray-600 text-sm">{product.description}</p>
               
                <p className="text-gray-800 text-sm">
                    Available in: <span className='text-deepBlue'>{product.countries}</span>
                </p>
            </div>
          ))}
        </div>
      }
    </section>

    {/* Chemicals section */}
    <section
    className='py-6 flex flex-col gap-2 justify-start px-10 md:px-20'
    >
    <SectionTitle title={'chemicals'} className=''/>
    <hr className='bg-zdPink py-[1px]'/>
      <div className='flex flex-wrap'>
      {
        chemicalsProducts.length === 0 ? 
        <p>There are no chemical products on file at this time.</p>
        :
        <div className='flex flex-wrap'>
          {chemicalsProducts.map((product) => (
            <div
                key={product.id}
                className="p-1 border rounded shadow hover:shadow transition w-[200px]"
            >
                <img
                    src={`/uploads/${product.image}`} // Adjust path based on your setup
                    alt={product.name}
                    className="w-full h-48 object-cover rounded"
                />
                <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                <p className="text-gray-600 text-sm">{product.description}</p>
               
                <p className="text-gray-800 text-sm">
                    Available in: <span className='text-deepBlue'>{product.countries}</span>
                </p>
            </div>
          ))}
        </div>
      }
      </div>
    </section>

    </GeneralPageLayout>
  )
}
