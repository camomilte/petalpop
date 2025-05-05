import React from 'react';

import { Gabriela } from 'next/font/google';

const gabriela = Gabriela ({
    subsets: ['latin'],
    weight: '400',
    variable: '--font-gabriela',
});

const Header = () => {
  return (
    <div className={`bg-hot text-center py-10 flex justify-around ${gabriela.variable}`}>
        <h2 className='text-xl font-gabriela'>Events</h2>
        <h2 className='text-xl font-gabriela'>About</h2>
        <h2 className='text-xl font-gabriela'>Contact</h2>
    </div>
  )
}

export default Header
