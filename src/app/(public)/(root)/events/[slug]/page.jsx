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
    <div className="wrapper font-quicksand">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl text-center my-8 font-caprasimo text-brightpink">{event.title}</h1>
        <Image 
          src={event.image.url} 
          alt={event.image.alt} 
          width={300} 
          height={200}
          className='w-full h-full object-cover rounded-xl aspect-4/2'
        />
        <div className="flex gap-5 my-5">
          <h2 className="text-xl font-gabriela">Date:</h2>
          <p>{formattedDate}</p>
        </div>
        <div className="my-5 flex gap-5 border-t pt-5">
          <h2 className="text-xl font-gabriela">Price:</h2>
          <p>{event.price} SEK</p>
        </div>
        
        <div className="prose text-brown !max-w-none prose-ul:marker:text-brown my-5 bg-brightpink/20 p-5 rounded-md">
          <PortableText value={event.description} />
        </div>
        <br />
      
        <h2 className="text-xl font-gabriela">Location:</h2>
        <div className="my-5">
          <LocationMap lat={event.location.lat} lng={event.location.lng} />
        </div>

      </div>


    </div>
  )
}

export default EventDetailPage
