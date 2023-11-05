'use client';

import React, { useState } from 'react';
import ThreeBars from '../icons/ThreeBars';
import Cancel from '../icons/Cancel';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className='bg-indigo-800 p-7 select-none'>
            <div className='container mx-auto flex justify-between items-center'>
                {/* Left Side - Logo */}
                <div className='text-white font-bold text-2xl'>
                    <a href='#' className='text-white'>
                        NEXT TASK
                    </a>
                </div>
                {/* Middle - Navigation Links */}
                <div className='hidden md:flex space-x-8 text-lg font-medium'>
                    <a href='#' className='text-white'>
                        Home
                    </a>
                    <a href='#' className='text-white'>
                        About
                    </a>
                    <a href='#' className='text-white'>
                        Services
                    </a>
                    <a href='#' className='text-white'>
                        Contact
                    </a>
                </div>
                {/* Right Side - Login/Sign-Up Buttons */}
                <div className='hidden md:flex space-x-5 text-lg font-medium'>
                    <a
                        href='#'
                        className='px-5 py-2 bg-blue-500 rounded hover:bg-blue-600 transition-all duration-500'
                    >
                        Login
                    </a>
                    <a
                        href='#'
                        className='px-5 py-2 bg-blue-500 rounded hover:bg-blue-600 transition-all duration-500'
                    >
                        Sign Up
                    </a>
                </div>
                <div className='md:hidden'>
                    <button
                        onClick={toggleMobileMenu}
                        className='text-white p-2 focus:outline-none'
                    >
                        {isMobileMenuOpen ? <Cancel /> : <ThreeBars />}
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className='md:hidden'>
                    <div className='flex flex-col space-y-5 text-white text-center text-lg font-medium'>
                        <a href='#' className='p-2'>
                            Home
                        </a>
                        <a href='#' className='p-2'>
                            About
                        </a>
                        <a href='#' className='p-2'>
                            Services
                        </a>
                        <a href='#' className='p-2'>
                            Contact
                        </a>
                        <hr />
                        {/* Mobile Login/Sign-Up Buttons */}
                        <div className='flex flex-col space-y-5'>
                            <a
                                href='#'
                                className='px-5 py-2 bg-blue-500 rounded hover:bg-blue-600 transition-all duration-500'
                            >
                                Login
                            </a>
                            <a
                                href='#'
                                className='px-5 py-2 bg-blue-500 rounded hover:bg-blue-600 transition-all duration-500'
                            >
                                Sign Up
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
