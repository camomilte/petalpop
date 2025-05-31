import { getEventBySlug } from "@/sanity/lib/fetch-data";
import { format, parseISO } from "date-fns";
import Image from "next/image";

import LocationMap from "@/app/(public)/components/locationMap";
import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";

async function EventDetailPage ({ params }) {

 

  const { slug } = await params;

  const event = await getEventBySlug(slug);

  const date = parseISO(event.datetime);
  const formattedDate = format(date, "EEEE dd MMMM yyyy");

   if(!event) {
    return notFound();
  }




  return (
    <div className="wrapper">
      <h1>{event.title}</h1>
      <Image 
        src={event.image.url} 
        alt={event.image.alt} 
        width={300} 
        height={200}
        className='w-full h-full object-cover rounded-xl aspect-3/2'
      />
      <h2 className="text-2xl">Date:</h2>
      <p>{formattedDate}</p>
      <h2 className="text-2xl">Location:</h2>
      <div>
        <LocationMap lat={event.location.lat} lng={event.location.lng} />
      </div>
      <div className="prose text-brown">
        <PortableText value={event.description} />
      </div>
      <br />
      <h2 className="text-2xl">Price:</h2>
      <p>{event.price} SEK</p>


    </div>
  )
}

export default EventDetailPage
