import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel'
import TextArea from '@/Components/TextArea';
import TextInput from '@/Components/TextInput'
import { useForm } from '@inertiajs/react';
import React from 'react'
import RedButton from '../RedButton';

export default function ContactForm({className}) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        subject: '',
        message: '',
    })

    const submit = (e) => {
        e.preventDefault()

        post(route('contact-us'), {
            onSuccess: () => reset(), // Reset the form after successful submission
        });
    }

  return (
    <form className={`bg-green-600 p-12 ${className}`} onSubmit={submit}>
        <div className='flex gap-3'>
            <div>
            <TextInput
            id="name"
            type="name"
            name="name"
            value={data.name}
            className="mt-2 block w-full py-4 px-1"
            placeholder="Your Name"
            isFocused={true}
            onChange={(e) => setData('name', e.target.value)}
            />

            <InputError message={errors.name} className="mt-2" />
            </div>
            <div>
            <TextInput
            id="email"
            type="email"
            name="email"
            value={data.email}
            className="mt-2 py-4 block w-full"
            placeholder="Your Email"
            isFocused={true}
            onChange={(e) => setData('email', e.target.value)}
            />

            <InputError message={errors.email} className="mt-2" />
            </div>
        </div>
        <div>
        <TextInput
        id="subject"
        type="subject"
        name="subject"
        value={data.subject}
        className="mt-4 block w-full py-4 px-1"
        placeholder="Subject"
        isFocused={true}
        onChange={(e) => setData('subject', e.target.value)}
        />

        <InputError message={errors.subject} className="mt-2" />
        </div>
        <div>
            <TextArea
            id="message"
            type="message"
            name="message"
            value={data.message}
            className="mt-4 block w-full py-6 px-1"
            placeholder="Message"
            isFocused={true}
            onChange={(e) => setData('message', e.target.value)}
            />

            <InputError message={errors.message} className="mt-2" />
        </div>
        <RedButton type="submit" className="mt-4 w-full" disabled={processing}>
            {processing ? 'Sending...' : 'Send Message'}
        </RedButton>
    </form>
  )
}
