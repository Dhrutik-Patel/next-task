'use client';

import React, { useState } from 'react';
import LoginImage from '../assets/images/undraw_sign_up_n6im.svg'; // Replace with the actual import path
import Image from 'next/image';
import { login } from '@/services/userServices';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.email || !formData.password) {
            alert('Please fill all the fields');
            return;
        }

        // Make API call to login
        const token = await login(formData);

        // If login is successful, redirect to home page
        if (token) {
            router.push('/');
        }

        // Reset form data
        setFormData({
            email: '',
            password: '',
        });
    };

    return (
        <div className='flex container mx-auto flex-col lg:flex-row items-center justify-center'>
            <div className='lg:w-1/2 container mx-auto p-8 bg-white rounded my-10'>
                <h2 className='text-2xl font-semibold mb-4 my-5'>Login</h2>
                <form onSubmit={handleSubmit}>
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
                        Login
                    </button>
                </form>
            </div>
            <div className='lg:w-1/3 flex items-center justify-center p-10'>
                {/* Image */}
                <Image src={LoginImage} alt='Login' />
            </div>
        </div>
    );
};

export default LoginPage;
