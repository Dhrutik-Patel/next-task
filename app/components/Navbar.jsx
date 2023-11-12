'use client';

import React, { useState } from 'react';
import ThreeBars from '../icons/ThreeBars';
import Cancel from '../icons/Cancel';
import Link from 'next/link';
import { useUserContext } from '@/context/userContext';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const { user } = useUserContext();

    return (
        <nav className='bg-white p-7 select-none shadow-md shadow-grey-500/50'>
            <div className='container mx-auto flex justify-between items-center'>
                {/* Left Side - Logo */}
                <div className='font-bold text-2xl'>
                    <a href='#'>NEXT TASK</a>
                </div>
                {/* Middle - Navigation Links */}
                <div className='hidden md:flex space-x-8 text-lg font-semibold'>
                    <Link href={'/'} className='p-2'>
                        Home
                    </Link>
                    <Link href={'/tasks'} className='p-2'>
                        Tasks
                    </Link>
                    <Link href={'/tasks/add'} className='p-2'>
                        Add Task
                    </Link>
                </div>
                {/* Right Side - Login/Sign-Up Buttons */}
                <div className='hidden md:flex space-x-5 text-lg font-semibold'>
                    {user ? (
                        // If user is logged in, display user-related information and logout button
                        <div className='flex items-center space-x-3'>
                            <div>
                                <img
                                    src={
                                        'https://aui.atlassian.com/aui/8.8/docs/images/avatar-person.svg'
                                    } // Replace with the actual avatar URL
                                    alt={`${user.username}'s avatar`}
                                    className='w-8 h-8 rounded-full'
                                />
                            </div>
                            <div>
                                <p>{user.name}</p>
                            </div>
                            <button className='px-5  py-2 bg-orange-500 rounded hover:bg-orange-600 hover:text-white transition-all duration-500'>
                                Logout
                            </button>
                        </div>
                    ) : (
                        // If user is not logged in, display Login and Sign Up links
                        <>
                            <Link href='/login' className='link-button'>
                                Login
                            </Link>
                            <Link href='/signup' className='link-button'>
                                Sign Up
                            </Link>
                        </>
                    )}
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
                        <Link href={'/'} className='p-2'>
                            Home
                        </Link>
                        <Link href={'/tasks'} className='p-2'>
                            Tasks
                        </Link>
                        <Link href={'/tasks/add'} className='p-2'>
                            Add Task
                        </Link>
                        <hr />
                        {/* Mobile Login/Sign-Up Buttons */}
                        <div className='flex flex-col space-y-5'>
                            <Link
                                href={'/login'}
                                className='px-5 py-2 bg-orange-500 rounded hover:bg-orange-600 hover:text-white transition-all duration-500'
                            >
                                Login
                            </Link>
                            <Link
                                href={'/signup'}
                                className='px-5 py-2 bg-orange-500 rounded hover:bg-orange-600 hover:text-white transition-all duration-500'
                            >
                                Sign Up
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
