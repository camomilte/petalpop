import { defineQuery } from "next-sanity";

export const GET_EVENTS_QUERY = defineQuery(`*[_type == 'event'] {
  _id,
  title,
  datetime,
  "slug": slug.current,
   "image": {
      "url":image.asset->url,
      "alt":image.alt
   },
  price
}`);

export const GET_EVENT_QUERY = defineQuery(`*[_type == 'event' && slug.current == $slug][0] {
  _id,
  title,
  datetime,
  "slug": slug.current,
  description,
  location,
   "image": {
      "url":image.asset->url,
      "alt":image.alt
   },
  price
}`);