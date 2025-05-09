import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/petalpop-logo-footer.svg'

const Footer = () => {
  return (
    <div className='bg-brightpink-300 py-10 text-cream m-8 rounded-3xl px-7 font-quicksand lg:max-w-8/10 lg:mx-auto'>
      <div className='space-y-12l'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>

          {/* FROM */}
          <div className='space-y-4'>
            <h3 className='font-caprasimo text-xl'>Don't miss out on any gardening!</h3>
            <p>Get updated on any new events, workshops and more!</p>
            <div className='mt-6 flex max-w-md gap-x-4'>
              <label htmlFor='email' className='sr-only'>Email address</label>
              <input type='email' id='email' name='email' autoComplete='email' required placeholder='Enter your email' className='min-w-0 flex-auto rounded-xl bg-cream-100 px-3.5 py-2 text-base text-brown outline-1 -outline-offset-1 placeholder:text-brown/50 focus:outline-3 focus:-outline-offset-3 focus:outline-brown/80 sm:text-sm/6'/>
              <button type='submit' className='flex-none rounded-xl bg-cream px-3.5 py-2.5 text-sm font-semibold text-brown/80 shadow-xs hover:bg-cream-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brown/80'>Subscribe</button>
            </div>
          </div>

          {/* LOGO */}
          <div className='flex items-start justify-center'>
            <div className='max-w-50'>
              <Image 
                  src={logo}
                  width={700}
                  height={700}
                  alt='company logo
              '/>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* ABOUT */}
          <div>
            <h6 className='font-caprasimo text-xl'>About Us</h6>
            <ul>
              <li><Link href=''>Our Company</Link></li>
              <li><Link href=''>Our Partners</Link></li>
              <li><Link href=''>Work with us</Link></li>
              <li><Link href=''>FAQ</Link></li>
            </ul>
          </div>

          {/* EVENTS */}
          <div>
            <h6 className='font-caprasimo text-xl'>Events</h6>
            <ul>
              <li><Link href=''>Gardening</Link></li>
              <li><Link href=''>Floristry</Link></li>
              <li><Link href=''>Workshops</Link></li>
            </ul>
          </div>

          {/* BUSINESS */}
          <div>
            <h6 className='font-caprasimo text-xl'>Businesses</h6>
            <ul>
              <li><Link href=''>Book Event</Link></li>
              <li><Link href=''>Partner With Us</Link></li>
            </ul>
          </div>
        </div>
    
      </div>

    </div>
  )
}



export default Footer


