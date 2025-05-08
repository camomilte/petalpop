import { LuCalendarCheck } from "react-icons/lu";
import { defineField, defineType } from "sanity";

export const eventType = defineType({
    name: "event",
    title: "Event",
    type: "document",
    icon: LuCalendarCheck,
    fields: [
        // Title
        defineField({
            name: "title",
            type: "string"
        }),
        // Slug
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: "name"
            }
        }),
        // Description
        defineField({
            name: "description",
            type: "blockContent"
        }),
        // Time and date
        defineField({
            name: "datetime",
            title: "Time and Date",
            type: "datetime",
        }),
        defineField({
            name: "image",
            type: "image",
            options: { hotspot: true },
            fields: [
                defineField({
                    name: "alt",
                    title: "Alt text",
                    type: "string"
                })
            ]
        }),
        defineField({
            name: "location",
            type: "geopoint"
        }),
        defineField({
            name: "price",
            type: "number"
        })
    ]
})

// Title //
// description //
// date/ dateTime //
// image //
// location
// ticketprice