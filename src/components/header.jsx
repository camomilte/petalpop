import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <div className='bg-hot text-center py-10 flex justify-around text-xl font-caprasimo text-cream'>
        <Link href='/'>Home</Link>
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
