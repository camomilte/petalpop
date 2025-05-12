"use client"

import Image from 'next/image';
import Link from 'next/link';

import React, { useState } from 'react';

// Import images
import logo from '../../../../public/petalpop-logo-color.svg';
import { IoClose, IoMenu } from "react-icons/io5";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='bg-hot'>
            <div className='container mx-auto text-center pt-4 flex justify-between text-xl font-caprasimo text-cream items-center'>
                <Link href='/'>
                    <div className='max-w-30 ms-5'>
                        <Image 
                            src={logo}
                            width={500}
                            height={500}
                            alt='company logo'
                        />
                    </div>
                </Link>

                <ul className='hidden md:flex gap-8 me-5'>
                    <Link href='/events'>
                        <li className='text-2xl'>Events</li>
                    </Link>
                    <Link href='/about'>
                        <li className='text-2xl'>About</li>
                    </Link>
                    <Link href='/contact'>
                        <li className='text-2xl'>Contact</li>
                    </Link>
                </ul> 
                <div onClick={handleMenu} className='md:hidden me-5'>
                    <IoMenu className='text-cream text-4xl'/>
                </div>
                <div className={
                    isOpen
                    ? 'fixed right-0 top-0 w-[60%] sm:hidden h-screen bg-brightpink p-10 text-cream duration-500'
                    : 'fixed right-[-100%] top-0 h-screen p-10 duration-200'
                }>
                    <div className='flex w-full justify-end'>
                        <div onClick={handleMenu}>
                            <IoClose onClick={handleMenu} className='text-4xl cursor-pointer'/>
                        </div>
                     </div>
                    <ul className='flex flex-col gap-6 py-10 items-start'>
                        <Link href='/events'>
                            <li onClick={() => setIsOpen(false)} className='text-2xl hover:underline'>Events</li>
                        </Link>
                        <Link href='/about'>
                            <li onClick={() => setIsOpen(false)} className='text-2xl hover:underline'>About</li>
                        </Link>
                        <Link href='/contact'>
                            <li onClick={() => setIsOpen(false)} className='text-2xl hover:underline'>Contact</li>
                        </Link>
                    </ul> 

                    
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><g fill="#FF7A14"><rect fill="#FFCCAD" width="100%" height="110%"/><path d="M0 0v60c9 0 18-3 25-10 13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s37 13 50 0c14-14 37-14 50 0 7 7 16 10 25 10V0H0Z"></path></g></svg>
        </nav>
    
        
  )
}

export default Navbar
