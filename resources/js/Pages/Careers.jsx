import CareerItem from '@/Components/General/Careers/CareerItem'
import Pagination from '@/Components/General/Pagination'
import SectionTitle from '@/Components/General/SectionTitle'
import GeneralPageLayout from '@/Layouts/GeneralPageLayout'
import { Head, Link, useForm } from '@inertiajs/react'
import React from 'react'

export default function Careers({careers, filters}) {
  const { data, setData, get } = useForm({
    due_date: filters.due_date || '',
    title: filters.title || '',
    employment_type: filters.employment_type || '',
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    get(route('zadzamatura-careers')) // Assumes a named route for the index method
  }

  const handleClearClick = () => {
    setData({
      due_date: '',
      title: '',
      employment_type: '',
    });
  
    // Send a request to reload data without filters
    get(route('zadzamatura-careers'));
  }

  return (
    <GeneralPageLayout>
    <Head title="Careers" />
    {/** Image and welcome section */}
    <section 
    className="h-[400px] w-full bg-cover bg-center bg-deepBlue"
    >
    <div className='w-full h-full flex items-center justify-center text-white'>
      <div className='w-full md:w-1/2 justify-start p-4 flex flex-col gap-10'>
        <h1 className='text-4xl'>Grow Your Career with Us.</h1>
        <p className='text-xl'>
        Experience a dynamic and supportive work environment where innovation is encouraged and teamwork is valued. 
        Join a company that truly cares about its employees and the environment.
        </p>
      </div>
      {/* <div > */}
        <img className='w-1/2  rounded-l-[2000px] h-full hidden md:block' src='/img/careers.jpg' />
      {/* </div> */}
    </div>
    </section>

    {/** About Description */}
    <section
    className='py-6 flex flex-col gap-2 justify-start px-10 md:px-20'
    >
      <SectionTitle title={'search for jobs'} className=''/>
       {/* Filter Form */}
       <form
          onSubmit={handleSubmit}
          className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-4 mb-4"
        >
          <div className="w-full md:w-3/12">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              value={data.title}
              onChange={(e) => setData('title', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="w-full md:w-3/12">
            <label
              htmlFor="due_date"
              className="block text-sm font-medium text-gray-700"
            >
              Due Date
            </label>
            <input
              id="due_date"
              type="date"
              value={data.due_date}
              onChange={(e) => setData('due_date', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="w-full md:w-4/12">
            <label
              htmlFor="employment_type"
              className="block text-sm font-medium text-gray-700"
            >
              Employment Type
            </label>
            <select
              id="employment_type"
              value={data.employment_type}
              onChange={(e) => setData('employment_type', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="">All</option>
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
              <option value="contract">Contract</option>
            </select>
          </div>

          <div className="w-full md:w-2/12 md:w-auto flex justify-center gap-2 mt-2 md:mt-6">
            <button
              type="submit"
              className="inline-flex w-full items-center px-4 py-2 bg-deepBlue border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-500 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 disabled:opacity-25 transition"
            >
              Apply Filters
            </button>
            {/* Uncomment and add functionality if needed */}
            {/* <span
              onClick={handleClearClick}
              className="inline-flex items-center px-4 py-2 bg-zdPink border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-500 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 disabled:opacity-25 transition cursor-pointer"
            >
              Clear Filters
            </span> */}
          </div>
</form>


        <div className="hidden md:grid grid-cols-5 capitalize py-2 px-3 text-xl font-normal">
          <p>job id</p>
          <p>title</p>
          <p>department</p>
          <p>type</p>
          {/* <p>Apply to email</p> */}
          <p>closing date</p>
        </div>
        <hr />
            

        {/* Careers List */}
        {careers &&
        careers.data.map((career) => <CareerItem key={career.id} career={career} />)}

        {/* Pagination */}
        {careers && <Pagination links={careers.links} />}
        {!careers && <p>There are no jobs at this time.</p>}
    </section>

    </GeneralPageLayout>
  )
}
