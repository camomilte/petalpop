import { client } from '@/sanity/lib/client';
import { getEvents } from '@/sanity/lib/fetch-data';
import { GET_EVENTS_QUERY } from '@/sanity/lib/query';
import { format, parseISO } from 'date-fns';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Events = async ({ title }) => {

  const events = await getEvents();

  return (
    <section className='font-quicksand'>
        <h2 className='font-caprasimo text-4xl mb-10 text-center text-brown'>{title}</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {
            events && events.map(event => {
              const date = parseISO(event.datetime);
              const formattedDate = format(date, "do MMMM yyyy");
          
              return (
              
              <Link key={event._id} href={`/events/${event.slug}`} className='border-2 border-brown p-5 rounded-xl overflow-hidden flex flex-col justify-between'>
                <div className='flex flex-col gap-2'>
                  <Image 
                    src={event.image.url} 
                    alt={event.image.alt} 
                    width={300} 
                    height={200}
                    className='w-full h-full object-cover rounded-xl aspect-3/2'
                  />

                  <p>{formattedDate}</p>
                  <h3 className='font-gabriela text-2xl font-bold'>{event.title}</h3>

                </div>

                <p className='text-xl font-lato font-bold pt-10'>{event.price} SEK</p>

              </Link>
            );
          })}
        </div>
    </section>
  )
}
