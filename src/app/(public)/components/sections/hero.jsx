import React from 'react'

const Hero = () => {
  return (
    <section>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12 text-brown font-quicksand">
          <h1 className="mb-4 text-4xl tracking-tight leading-none md:text-5xl lg:text-6xl font-caprasimo text-brightpink">Ready for a Blossoming Season?</h1>
          <p className="mb-8 text-lg lg:text-xl sm:px-16 xl:px-4">Join us as we dig into spring with vibrant workshops, joyful events, and blooming inspiration. Whether you're a seasoned gardener or just planting your first seed, Petal Pop is your go-to for all things floral and fun.</p>
          <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
              <a href="/about" className='button button-pink'>About us</a>
              <a href="#upcoming" className='button button-pink'>Upcoming events</a> 
          </div>
      </div>
  </section>
  )
}

export default Hero;
