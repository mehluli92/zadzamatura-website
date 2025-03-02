import GreenButton from '@/Components/General/GreenButton'
import RedButton from '@/Components/General/RedButton'
import SectionTitle from '@/Components/General/SectionTitle'
import PersonCard from '@/Components/PersonCard'
import GeneralPageLayout from '@/Layouts/GeneralPageLayout'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

export default function SalesAgronomists() {

    const salesTeam = [
        {
            name: "Blessing Hatidane",
            email: "blessing.hatidane@zadzamatura.co.zw",
            phone: "+263 712 845 543",
            region: "Mashonaland West",
            img_url: "/img/sales/person_placeholder.jpg"
        },
        {
            name: "Dumi Sibanda",
            email: "dumezweni.sibanda@zadzamatura.co.zw",
            phone: "+263 772 363 097",
            region: "Mashonaland East",
            img_url: "/img/sales/person_placeholder.jpg"
        },
        {
            name: "Deliverance Masiyiwa",
            email: "deliverance.masiyiwa@zadzamatura.co.zw",
            phone: "+263 782 805 522",
            region: "Mashonaland Central",
            img_url: "/img/sales/person_placeholder.jpg"
        },
        {
            name: "John Mashava",
            email: "john.mashava@zadzamatura.co.zw",
            phone: "+263 772 521 043",
            region: "Manicaland",
            img_url: "/img/sales/person_placeholder.jpg"
        },
        {
            name: "Josaya Mukona",
            email: "joshua.mukona@zadzamatura.co.zw",
            phone: "+263 772 919 065",
            region: "Masvingo",
            img_url: "/img/sales/person_placeholder.jpg"
        },
        {
            name: "Takawira Mamwadi",
            email: "takawira.mamwadi@zadzamatura.co.zw",
            phone: "+263 712 758 408",
            region: "Midlands",
            img_url: "/img/sales/person_placeholder.jpg"
        },
        {
            name: "Ayanda Mavolwane",
            email: "ayanda.mavolwane@zadzamatura.co.zw",
            phone: "+263 779 966 424",
            region: "Matabeleland",
            img_url: "/img/sales/person_placeholder.jpg"
        },
        {
            name: "Talent Ndige",
            email: "talent.ndige@zadzamatura.co.zw",
            phone: "+263 771 248 895",
            region: "Field Manager (Production)",
            img_url: "/img/sales/person_placeholder.jpg"
        }
    ];
        
  return (
    <GeneralPageLayout >
        <Head title="Products" />
        {/** Image and welcome section */}
        <section 
    className="relative h-[200px] md:h-[300px] w-full bg-cover bg-center"
    style={{ backgroundImage: `url('/img/sales/sales_agronomists_page.jpg')` }}        
    >
    <div className='bg-black/40 w-full h-full flex items-center justify-center md:justify-start'>
      <div className='p-10'>
        <h2 className='text-white text-4xl md:text-7xl font-bold'>Meet our sales agronomists</h2>
        <div className='flex gap-1 pt-2'>
        <GreenButton className='bg-deepBlue '>
          <Link
          href={`/`}
          className='flex items-center gap-2 font-semibold z-10'
          >
          Home
          </Link> 
        </GreenButton>
        <RedButton>Sales</RedButton>
        </div>
      </div>
    </div>
    </section>

     {/** Sales section */}
    <section 
    className='py-6 flex flex-col gap-2 justify-start px-10 md:px-20'
    >
        <SectionTitle title={'sales agronomist in your region'} className='mt-16'/>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {salesTeam.map((member, index) => (
                <div key={index} className="pt-4">
                    <PersonCard 
                    name={member.name} 
                    email={member.email} 
                    phone={member.phone} 
                    region={member.region}
                    img_url={member.img_url}
                    />
                </div>
            ))}
        </div>
    </section>

    </GeneralPageLayout>
  )
}
