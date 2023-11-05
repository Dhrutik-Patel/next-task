'use client';

import React from 'react';
import Home from '../icons/Home';
import Mail from '../icons/Mail';
import Phone from '../icons/Phone';

const Footer = () => {
    return (
        <>
            <footer className='bg-white p-10 shadow-md shadow-grey-500/50'>
                <div className='container mx-auto flex flex-col md:flex-row justify-between'>
                    {/* More about company */}
                    <div className='w-full md:w-1/3 mb-4 md:mb-0 mr-10'>
                        <div className='font-bold text-2xl'>
                            <a href='#'>NEXT TASK</a>
                        </div>
                        <p className='text-justify mr-10 mt-5'>
                            Simplify task management and boost productivity with
                            our intuitive solution for efficient organization
                            and seamless collaboration.
                        </p>
                    </div>

                    {/* Links */}
                    <div className='w-full md:w-1/3 mb-4 md:mb-0'>
                        <div className='text-xl font-semibold underlinee'>
                            USEFUL LINKS
                        </div>
                        <ul className='space-y-2 mt-5 text-base font-medium'>
                            <li>
                                <a href='#'>Home</a>
                            </li>
                            <li>
                                <a href='#'>About</a>
                            </li>
                            <li>
                                <a href='#'>Services</a>
                            </li>
                            <li>
                                <a href='#'>Contact</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className='w-full md:w-1/3'>
                        <div className='text-xl font-semibold underlinee'>
                            CONTACT INFO
                        </div>
                        <div className='mt-5'>
                            <p className='flex'>
                                <Home />
                                <span className='ml-5'>123 Main Street</span>
                            </p>
                        </div>
                        <div className='mt-3'>
                            <p className='flex'>
                                <Mail />
                                <span className='ml-5'>
                                    Email: example@email.com
                                </span>
                            </p>
                        </div>
                        <div className='mt-3'>
                            <p className='flex'>
                                <Phone />
                                <span className='ml-5'>
                                    Phone: +1 (123) 456 7890
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Copyright Section */}
            <div className='bg-black text-white p-4 text-center text-base font-medium'>
                &copy; {new Date().getFullYear()} Next Task. All Rights
                Reserved.
            </div>
        </>
    );
};

export default Footer;
