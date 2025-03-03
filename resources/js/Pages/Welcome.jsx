import Counter from '@/Components/General/Counter'
import HomeCorousel from '@/Components/General/HomeCorousel'
import GeneralPageLayout from '@/Layouts/GeneralPageLayout'
import { Head, Link } from '@inertiajs/react'
import { GrLinkNext } from "react-icons/gr"
import { FaStar } from "react-icons/fa6"
import { GiCoffeeCup } from "react-icons/gi"
import { GiFarmer } from "react-icons/gi"
import { SiCommerzbank } from "react-icons/si"
import SectionTitle from '@/Components/General/SectionTitle'
import ServiceItem from '@/Components/General/Services/ServiceItem'
import FirstItem from '@/Components/General/Services/FirstItem'

/**Services Icons */
import { FaSeedling } from "react-icons/fa"
import { GiChemicalDrop } from "react-icons/gi"
import WhyChooseUs from '@/Components/General/WhyChooseUs'
import Testimonials from '@/Components/General/Testimonials/Testimonials'


export default function Welcome({ auth}) {

    return (
        <GeneralPageLayout>
            <Head title="Home" />
        {/** Top section */}
        <section className='static md:relative'>
        <HomeCorousel/>
        <div className='absolute h-[600px] md:h-[300px] mx-8 md:mx-32 md:-bottom-[200px] left-0 left-0 right-0'
        >
            <div className='flex h-full w-full flex-col md:flex-row '>
                <div className='relative bg-deepBlue h-full w-full md:w-1/2 text-white flex flex-col gap-2 items-center justify-center px-[40px] bg-deepBlue'
                >
                    <h3 className='text-2xl font-bold z-10'>Seeds</h3>
                    <p className='z-10'>
                        A fully functional seed processing plant with a capacity of producing 10,000 tonnes per year.
                    </p>
                    <Link 
                    href={`/zadzamatura-products`}
                    className='flex items-center gap-2 font-semibold z-10'
                    >
                    Read More
                    <GrLinkNext className='text-white w-4' />
                    </Link>

                    <div 
                    className={`absolute w-[350px] h-[300px] bottom-0 right-0   bg-[url('/img/maize-transparent-svg.svg')]`}
                    >
                    </div>
                </div>
                <div className='relative bg-zdPink h-full w-full md:w-1/2 text-white flex flex-col gap-2 items-center justify-center px-[40px]'>
                    <h3 className='text-2xl font-bold z-10'>Chemicals</h3>
                    <p className='z-10'>
                        Our chemicals will give farmers a competitive edge.
                    </p>
                    <Link 
                    href={`/zadzamatura-products`}
                    className='flex items-center gap-2 font-semibold z-10'
                    >
                    Read More
                    <GrLinkNext className='text-white w-4' />
                    </Link>
                    <div 
                    className={`absolute w-[280px] h-[300px] bottom-0 right-0  bg-[url('/img/gardener-spray.svg')]`}
                    >
                    </div>
                </div>
            </div>
        </div>
        </section>

        
        {/** About Us section */}
        <section 
        className='bg-deepBlue md:h-64 mt-[600px] md:mt-[250px] grid grid-rows-4 md:grid-cols-4 py-16 md:py-32 px-8 md:px-32'
        >
            <div className='flex items-center gap-1 content-center py-6 md:py-0'>
                <div 
                className='bg-zdPink rounded-full w-16 h-16 flex items-center justify-center'
                >
                    <FaStar className='text-white text-3xl'/>
                </div>
                <div className='flex flex-col gap-1'>
                <h4 className='text-xl font-bold text-white'>Our Experience</h4> 
                <Counter max={13}  comment={'years'}/>
                </div>
            </div>
            <div className='flex items-center gap-1'>
                <div
                className='bg-zdPink rounded-full w-16 h-16 flex items-center justify-center'
                >
                    <SiCommerzbank className='text-white text-3xl'/>
                </div>
                <div className=''>
                <h4 className='text-xl font-bold text-white'>Commercial Farmers</h4> 
                <Counter max={35}/>
                </div>
            </div>
            <div className='flex items-center gap-1'>
                <div
                className='bg-zdPink rounded-full w-16 h-16 flex items-center justify-center'
                >
                    <GiFarmer className='text-white text-3xl'/>
                </div>
                <div className=''>
                <h4 className='text-xl font-bold text-white'>Small Scale Farmers </h4> 
                <Counter max={1200}/>
                </div>
            </div>
            <div className='flex items-center gap-1'>
                <div
                className='bg-zdPink rounded-full w-16 h-16 flex items-center justify-center'
                >
                    <GiCoffeeCup className='text-white text-3xl'/>
                </div>
                <div className=''>
                <h4 className='text-xl font-bold text-white'>Happy Clients</h4> 
                <Counter max={10000}/>
                </div>
            </div>
        </section>
        
        {/** Services Section */}
        <section className='md:pt-6 px-8 md:px-32'>
            <SectionTitle title={'Services'}/>
            <div className='flex flex-wrap gap-2'>
                <FirstItem />
                <ServiceItem className={'bg-gray-50'}>
                    <FaSeedling className='text-zdPink text-6xl' />
                    <h2 className='text-2xl font-bold'>Seeds</h2>
                    <p className=''>
                    We offer high yielding and disease tolerant maize varieties and small grains.
                    </p>
                </ServiceItem>
                <ServiceItem className={'bg-gray-50'}>
                    <GiChemicalDrop className='text-zdPink text-6xl' />
                    <h2 className='text-2xl font-bold'>Agro-chemicals</h2>
                    <p className=''>
                    We offer high yielding and disease tolerant maize varieties and small grains.
                    </p>
                </ServiceItem>

            </div>
        </section>

        {/** Why Choose Us Section */}
        <WhyChooseUs className='bg-deepBlue md:pt-6 px-8 md:px-32'/>


        {/** Testimonial Section */}
        <section className='mt-6 px-8'>
        <SectionTitle title={'Testimonials'} className='mx-auto'/>
        <Testimonials className='my-4 md:mt-4'/>
        </section>
        </GeneralPageLayout>
    )
}
