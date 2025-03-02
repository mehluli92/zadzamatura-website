import React from 'react'

export default function PersonCard({
    name,
    email,
    phone,
    region,
    img_url,
    position
    }) {
  return (
    <div className='p-4 border'>
        <img src={img_url} alt="Profile Image" className="w-[250px] h-auto"/>
        <h3 className='text-deepBlue text-md uppercase font-bold py-2 hover:text-zdPink'>
        {name}
        </h3>
        <h3 className='text-deepBlue text-md uppercase font-bold py-2 hover:text-zdPink'>
            {region} {position}
        </h3>


        <hr className='pt-2'/>
        <div className='space-y-2'>
            <p className='text-sm'>
                {email}
            </p>
            <p className='text-md font-bold'>
                {phone}
            </p>
        </div>
        
    </div>
  )
}
