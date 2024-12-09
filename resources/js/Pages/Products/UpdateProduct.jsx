import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextArea from '@/Components/TextArea'
import TextInput from '@/Components/TextInput'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'

export default function UpdateProduct({ product }) {
  const { data, setData, post, errors, processing } = useForm({
    name: product.name || '',
    description: product.description || '',
    countries: product.countries || '',
    category: product.category || '',
    file: null, // File will be updated only if a new one is uploaded
  })

  function handleFileChange(e) {
    setData('file', e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    // formData.append('_method', 'PUT')
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value)
    })

    post(route('update-product', product.id), {
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      onSuccess: () => {
        alert('Product successfully updated!')
      },
      onError: (error) => {
        console.error(error)
        alert('Failed to update the product.')
    }
    });
  }

  return (
    <AuthenticatedLayout
      header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
          Update Product
        </h2>
      }
    >
      <Head title="Update Product" />
      <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
            <div className="p-1 text-gray-900 flex flex-col">
              <form onSubmit={handleSubmit} className="p-6">
                {/* Name */}
                <div className="mt-2">
                  <InputLabel htmlFor="Name" value="Name" required />
                  <TextInput
                    id="name"
                    name="name"
                    value={data.name}
                    className="mt-1 py-1 block w-full border-gray-300"
                    autoComplete="name"
                    isFocused={true}
                    onChange={(e) => setData('name', e.target.value)}
                    required
                  />
                  <InputError message={errors.name} className="mt-2" />
                </div>

                {/* Description */}
                <div className="mt-2">
                  <InputLabel htmlFor="description" value="Description" />
                  <TextArea
                    id="description"
                    name="description"
                    value={data.description}
                    className="mt-1 py-1 block w-full h-18 border-gray-300"
                    autoComplete="description"
                    onChange={(e) => setData('description', e.target.value)}
                  />
                  <InputError message={errors.description} className="mt-2" />
                </div>

                {/* Category */}
                <div className="mb-2">
                  <InputLabel htmlFor="category" value="Category" required />
                  <select
                    value={data.category}
                    onChange={(e) => setData('category', e.target.value)}
                    className="border-gray-300 py-1 mt-1 block w-full"
                  >
                    <option value="">Select Category</option>
                    <option value="seeds">Seeds</option>
                    <option value="chemicals">Chemicals</option>
                  </select>
                  <InputError message={errors.category} className="mt-2" />
                </div>

                {/* Countries */}
                <div className="mt-2">
                  <InputLabel
                    htmlFor="countries"
                    value="Countries available. Separate values with a comma"
                    required
                  />
                  <TextInput
                    id="countries"
                    name="countries"
                    value={data.countries}
                    className="mt-1 py-1 block w-full border-gray-300"
                    autoComplete="countries"
                    onChange={(e) => setData('countries', e.target.value)}
                    required
                  />
                  <InputError message={errors.countries} className="mt-2" />
                </div>

                {/* File Upload */}
                <div className="mb-2">
                  <InputLabel htmlFor="file" value="Upload Image" />
                  <input
                    id="file"
                    type="file"
                    accept="image/jpeg, image/png, image/jpg, image/gif"
                    onChange={handleFileChange}
                    className="mt-1 py-1 block w-full border rounded"
                  />
                  <InputError message={errors.file} className="mt-2" />
                </div>

                <PrimaryButton className="mt-2" disabled={processing}>
                  {processing ? 'Updating...' : 'Update Product'}
                </PrimaryButton>
              </form>
            </div>
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  )
}
