import Image from 'next/image';
import Link from 'next/link';

import React from 'react';

import logo from '../../../../public/petalpop-logo-color.svg'

const Header = () => {
  return (
    <div>
        <div className='bg-hot text-center pt-4 flex justify-around text-xl font-caprasimo text-cream'>
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100"><g fill="#FF7A14"><rect fill="#FFCCAD" width="100%" height="100%"/><path d="M0 0v60c9 0 18-3 25-10 13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s36 14 50 0c13-14 36-14 50 0s37 13 50 0c14-14 37-14 50 0 7 7 16 10 25 10V0H0Z"></path></g></svg>
    </div>
    
        
  )
}

export default Header
