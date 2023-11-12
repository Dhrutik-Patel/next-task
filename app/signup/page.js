'use client';

import React, { useState } from 'react';
import SignupImage from '../assets/images/undraw_sign_up_n6im.svg';
import Image from 'next/image';
import { signup } from '@/services/userServices';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        signup(formData);

        // Reset form
        setFormData({
            name: '',
            email: '',
            password: '',
        });
    };

    return (
        <div className='flex container mx-auto flex-col lg:flex-row items-center justify-center'>
            <div className='lg:w-1/2 container mx-auto p-8 bg-white rounded my-10'>
                <h2 className='text-2xl font-semibold mb-4 my-5'>Signup</h2>
                <form onSubmit={handleSubmit}>
                    <div className='mb-4 text-base font-medium'>
                        <label
                            htmlFor='name'
                            className='block text-gray-600 mb-2'
                        >
                            Username
                        </label>
                        <input
                            type='text'
                            id='name'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                            className='border p-2 w-full'
                            required
                        />
                    </div>
                    <div className='mb-4 text-base font-medium'>
                        <label
                            htmlFor='email'
                            className='block text-gray-600 mb-2'
                        >
                            Email
                        </label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            className='border p-2 w-full'
                            required
                        />
                    </div>
                    <div className='mb-4 text-base font-medium'>
                        <label
                            htmlFor='password'
                            className='block text-gray-600 mb-2'
                        >
                            Password
                        </label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            value={formData.password}
                            onChange={handleChange}
                            className='border p-2 w-full'
                            required
                        />
                    </div>
                    <button
                        type='submit'
                        className='text-lg font-semibold px-5 py-2 bg-orange-500 rounded hover:bg-orange-600 hover:text-white transition-all duration-500'
                    >
                        Sign Up
                    </button>
                </form>
            </div>
            <div className='lg:w-1/3 flex items-center justify-center p-10'>
                {/* Image */}
                <Image src={SignupImage} alt='Signup' />
            </div>
        </div>
    );
};

export default SignupPage;
