import TinyMCEEditor from '@/Components/General/TinyYMCE/TinyMCEEditor'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import SecondaryButton from '@/Components/SecondaryButton'
import TextInput from '@/Components/TextInput'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, useForm } from '@inertiajs/react'
import React, { useEffect } from 'react'

export default function UpdateCareer({ career }) {
    const { data, setData, put, errors, processing, reset } = useForm({
        title: career.title || '',
        description: career.description || '',
        department: career.department || '',
        employment_type: career.employment_type || '',
        email: career.email || '',
        due_date: career.due_date || '',
    })

    const handleSubmit = (e) => {
        e.preventDefault()

        put(route('careers.update', career.id), {
            data: data,
            onSuccess: () => {
                alert('Job successfully updated!')
                reset()
            },
        })
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Update Job
                </h2>
            }
        >
            <Head title="Update Career" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <form onSubmit={handleSubmit}>
                                <div className="mt-2">
                                    <InputLabel htmlFor="title" value="Title" required />
                                    <TextInput
                                        id="title"
                                        name="title"
                                        value={data.title}
                                        className="mt-1 py-1 block w-full border-gray-300"
                                        autoComplete="title"
                                        onChange={(e) => setData('title', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.title} className="mt-2" />
                                </div>

                                <div className="mt-2">
                                    <InputLabel htmlFor="department" value="Department" required />
                                    <TextInput
                                        id="department"
                                        name="department"
                                        value={data.department}
                                        className="mt-1 py-1 block w-full border-gray-300"
                                        autoComplete="department"
                                        onChange={(e) => setData('department', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.department} className="mt-2" />
                                </div>

                                <div className="mt-2">
                                    <InputLabel htmlFor="email" value="Email" required />
                                    <TextInput
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={data.email}
                                        className="mt-1 py-1 block w-full border-gray-300"
                                        autoComplete="email"
                                        onChange={(e) => setData('email', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.email} className="mt-2" />
                                </div>

                                <div className="mt-2">
                                    <InputLabel htmlFor="due_date" value="Due Date" required />
                                    <TextInput
                                        id="due_date"
                                        name="due_date"
                                        type="date"
                                        value={data.due_date}
                                        className="mt-1 py-1 block w-full border-gray-300"
                                        autoComplete="due_date"
                                        onChange={(e) => setData('due_date', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.due_date} className="mt-2" />
                                </div>

                                <div className="mb-2">
                                    <InputLabel htmlFor="employment_type" value="Employment Type" required />
                                    <select
                                        value={data.employment_type}
                                        onChange={(e) => setData('employment_type', e.target.value)}
                                        className="border-gray-300 py-1 mt-1 block w-full text-gray-600"
                                        required
                                    >
                                        <option value="" disabled>
                                            Select Employment Type
                                        </option>
                                        <option value="permanent">Permanent</option>
                                        <option value="contract">Contract</option>
                                        <option value="part-time">Part Time</option>
                                        <option value="internship">Internship</option>
                                    </select>
                                    <InputError message={errors.employment_type} className="mt-2" />
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="description" value="Job Description" required />
                                    <TinyMCEEditor
                                        initialValue={data.description}
                                        onChange={(description) => setData('description', description)}
                                    />
                                    <InputError message={errors.description} className="mt-2" />
                                </div>

                                <SecondaryButton type="submit" className="mt-2" disabled={processing}>
                                    {processing ? 'Updating...' : 'Update'}
                                </SecondaryButton>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}
