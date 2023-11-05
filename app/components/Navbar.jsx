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
        <nav className='bg-white p-7 select-none shadow-md shadow-grey-500/50'>
            <div className='container mx-auto flex justify-between items-center'>
                {/* Left Side - Logo */}
                <div className='font-bold text-2xl'>
                    <a href='#'>NEXT TASK</a>
                </div>
                {/* Middle - Navigation Links */}
                <div className='hidden md:flex space-x-8 text-lg font-semibold'>
                    <a href='#'>Home</a>
                    <a href='#'>About</a>
                    <a href='#'>Services</a>
                    <a href='#'>Contact</a>
                </div>
                {/* Right Side - Login/Sign-Up Buttons */}
                <div className='hidden md:flex space-x-5 text-lg font-semibold'>
                    <a
                        href='#'
                        className='px-5 py-2 bg-orange-500 rounded hover:bg-orange-600 hover:text-white transition-all duration-500'
                    >
                        Login
                    </a>
                    <a
                        href='#'
                        className='px-5 py-2 bg-orange-500 rounded hover:bg-orange-600 hover:text-white transition-all duration-500'
                    >
                        Sign Up
                    </a>
                </div>
                <div className='md:hidden'>
                    <button
                        onClick={toggleMobileMenu}
                        className=' p-2 focus:outline-none'
                    >
                        {isMobileMenuOpen ? <Cancel /> : <ThreeBars />}
                    </button>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className='md:hidden'>
                    <div className='flex flex-col space-y-5  text-center text-lg font-semibold'>
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
                                className='px-5 py-2 bg-orange-500 rounded hover:bg-orange-600 hover:text-white transition-all duration-500'
                            >
                                Login
                            </a>
                            <a
                                href='#'
                                className='px-5 py-2 bg-orange-500 rounded hover:bg-orange-600 hover:text-white transition-all duration-500'
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
