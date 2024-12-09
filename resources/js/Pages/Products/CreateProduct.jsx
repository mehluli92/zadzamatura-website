import InputError from '@/Components/InputError'
import InputLabel from '@/Components/InputLabel'
import PrimaryButton from '@/Components/PrimaryButton'
import TextArea from '@/Components/TextArea'
import TextInput from '@/Components/TextInput'
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout'
import { Head, Link, useForm } from '@inertiajs/react'
import React from 'react'

export default function CreateProduct() {
  const {data, setData, post, errors, processing} = useForm({
    name:  '',
    description: '',
    countries: '',
    category: '',
    file: null,
  })

  function handleFileChange(e) {
    setData('file', e.target.files[0])
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const formData = new FormData()
    Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value)
    })

    post(route('products.store'), {
        data: formData,
        headers: {
            'Content-Type': 'multipart/form-data',
        },
        onSuccess: () => {
          alert("Product successfully created!")
          reset()
          // Optionally, redirect or clear the form onSuccess: () => reset()
        },
    })
  }


  return (
    <AuthenticatedLayout
    header={
        <h2 className="text-xl font-semibold leading-tight text-gray-800">
            Create Product
        </h2>
    }
  >
    <Head title="Create Product" />
    <div className="py-12">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg">
                <div className="p-1 text-gray-900 flex flex-col">
                  
                  <form onSubmit={handleSubmit} className='p-6'>
                    <div className='mt-2'>
                    <InputLabel htmlFor="Name" value="Name" required={true}/>
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

                    <div className='mt-2'>
                    <InputLabel htmlFor="description" value="Description"/>
                    <TextArea
                        id="description"
                        name="description"
                        value={data.description}
                        className="mt-1 py-1 block w-full h-18 border-gray-300"
                        autoComplete="description"
                        isFocused={true}
                        onChange={(e) => setData('description', e.target.value)}
                    />
                    <InputError message={errors.description} className="mt-2" />
                    </div>

                    <div className=" mb-2">
                      <InputLabel htmlFor="category" value="select category" required={true}/>
                      <select
                      value={data.category}
                      onChange={(e) => setData('category', e.target.value)}
                      className="border-gray-300 py-1 mt-1 block w-full"
                      >
                      <option>
                      {
                      data.category === 0 ? 
                      "Select payment category"
                      :
                      data.category
                      }
                      </option>
                      <option value='seeds'>seeds</option>
                      <option value='chemicals'>chemicals</option>
                      </select>
                      <InputError message={errors.category} className="mt-2" />
                    </div>

                    <div className='mt-2'>
                    <InputLabel htmlFor="countries" value="Countries available. Please seperate values with a comma" required={true}/>
                    <TextInput
                    id="countries"
                    name="countries"
                    value={data.countries}
                    className="mt-1 py-1 block w-full border-gray-300"
                    autoComplete="countries"
                    isFocused={true}
                    onChange={(e) => setData('countries', e.target.value)}
                    required
                    />
                    <InputError message={errors.countries} className="mt-2" />
                    </div>
                    
                    <div className="mb-2">
                      <InputLabel htmlFor="file" value="Upload Image" required={true} />
                      <p className='text-gray-300 text-xs'>For best results image size should be 640  * 627 px</p>
                      <input
                          id="file"
                          type="file"
                          accept="image/jpeg, image/png, image/jpg, image/gif"
                          onChange={handleFileChange}
                          className="mt-1 py-1 block w-full border rounded"
                          required
                      />
                      <InputError message={errors.file} className="mt-2" />
                    </div>

                    <PrimaryButton
                      className="mt-2"
                      disabled={processing}
                    >
                      {processing ? 'Processing...' : 'Submit Product'}
                    </PrimaryButton>
                  </form>
                </div>
            </div>
        </div>
    </div>
  </AuthenticatedLayout>
  )
}
