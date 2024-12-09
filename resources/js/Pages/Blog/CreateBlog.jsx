import TinyMCEEditor from '@/Components/General/TinyYMCE/TinyMCEEditor'
import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import SecondaryButton from '@/Components/SecondaryButton'
import TextInput from '@/Components/TextInput'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'

export default function CreateBlog() {
    const { data, setData, post, errors, processing, reset } = useForm({
        title: '',
        file: '',
        slug: '',
        content: '',
        author: '',
        status: '',
    })

    const handleFileChange = (e) => {
        setData('file', e.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData()
        Object.entries(data).forEach(([key, value]) => {
            formData.append(key, value)
        })

        post(route('blogs.store'), {
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data',
            },
            onSuccess: () => {
                alert('Post successfully created!')
                reset()
            },
        })
    }

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Create A Post
                </h2>
            }
        >
            <Head title="Create Blog Post" />

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
                                        isFocused={true}
                                        onChange={(e) => setData('title', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.title} className="mt-2" />
                                </div>

                                <div className="mt-2">
                                    <InputLabel htmlFor="slug" value="Slug" required />
                                    <TextInput
                                        id="slug"
                                        name="slug"
                                        value={data.slug}
                                        className="mt-1 py-1 block w-full border-gray-300"
                                        autoComplete="slug"
                                        onChange={(e) => setData('slug', e.target.value)}
                                        required
                                    />
                                    <InputError message={errors.slug} className="mt-2" />
                                </div>

                                <div className="mb-2">
                                    <InputLabel htmlFor="status" value="Status" required />
                                    <select
                                        value={data.status}
                                        onChange={(e) => setData('status', e.target.value)}
                                        className="border-gray-300 py-1 mt-1 block w-full"
                                        required
                                    >
                                        <option value="" disabled>
                                            Select status
                                        </option>
                                        <option value="published">Published</option>
                                        <option value="draft">Draft</option>
                                    </select>
                                    <InputError message={errors.status} className="mt-2" />
                                </div>

                                <div className="mb-2">
                                    <InputLabel htmlFor="file" value="Upload Image" required />
                                    <p className='text-gray-300 text-xs'>For best results image size should be 640  * 627 px or 1920 * 1281 px</p>
                                    <input
                                        id="file"
                                        type="file"
                                        accept="image/jpeg, image/png, image/jpg, image/gif"
                                        onChange={handleFileChange}
                                        className="mt-1 py-1 block w-full border"
                                        required
                                    />
                                    <InputError message={errors.file} className="mt-2" />
                                </div>

                                <div className="mb-4">
                                    <InputLabel htmlFor="content" value="Content" required />
                                    <TinyMCEEditor
                                        initialValue={data.content}
                                        onChange={(content) => setData('content', content)}
                                    />
                                    <InputError message={errors.content} className="mt-2" />
                                </div>

                                <SecondaryButton type="submit" className="mt-2" disabled={processing}>
                                    {processing ? 'Posting...' : 'Submit'}
                                </SecondaryButton>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    )
}