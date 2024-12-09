import CareerItem from '@/Components/General/Careers/CareerItem'
import Pagination from '@/Components/General/Pagination'
import PrimaryButton from '@/Components/PrimaryButton'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, useForm } from '@inertiajs/react'
import React from 'react'

export default function AllCareersAdmin({ careers, filters }) {
  const { data, setData, get } = useForm({
    due_date: filters.due_date || '',
    title: filters.title || '',
    employment_type: filters.employment_type || '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    get(route('careers.index'));
  };

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Manage Careers
        </h2>
      }
    >
      <Head title="Careers management" />

      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="p-6 text-gray-900 flex flex-col gap-4">
              <PrimaryButton className="w-1/6 items-center justify-center">
                <Link href={'careers/create'}>Advertise a Job</Link>
              </PrimaryButton>

              {/* Filter Form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 mb-4">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
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

                  <div>
                    <label htmlFor="due_date" className="block text-sm font-medium text-gray-700">
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

                  <div>
                    <label htmlFor="employment_type" className="block text-sm font-medium text-gray-700">
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
                </div>

                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center px-2 py-1 bg-green-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-green-500 active:bg-green-700 focus:outline-none focus:ring focus:ring-green-300 disabled:opacity-25 transition"
                  >
                    Apply Filters
                  </button>
                </div>
              </form>

              {/* Table Header */}
              <div className="grid grid-cols-5 capitalize bg-gray-50 py-4 px-3 text-lg">
                <p>job id</p>
                <p>title</p>
                <p>department</p>
                <p>type</p>
                {/* <p>email</p> */}
                <p>due date</p>
              </div>
              <hr />
              {careers.data === 0 && <p className='p-6'>No careers on file</p>}

              {/* Careers List */}
              {careers &&
                careers.data.map((career) => <CareerItem key={career.id} career={career} />)}

              {/* Pagination */}
              {careers && <Pagination links={careers.links} />}
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}
