import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

import logo from '../../public/petalpop-logo-color.svg'

const Header = () => {
  return (
    <div className='bg-hot text-center py-4 flex justify-around text-xl font-caprasimo text-cream'>
        <Link href='/'>
            <div className='max-w-30'>
                <Image 
                    src={logo}
                    width={500}
                    height={500}
                    alt='company logo
                '/>
            </div>
        </Link>
        <Link href='/events'>
            <h2>Events</h2>
        </Link>
        <Link href='/about'>
            <h2>About</h2>
        </Link>
        <Link href='/contact'>
            <h2>Contact</h2>
        </Link>
    </div>
  )
}

export default Header
