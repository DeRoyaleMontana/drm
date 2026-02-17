"use client";

import { SvgColorProps } from "@/utils/svgColor";
import EventCard, { EventData } from "./EventCard";

const SAMPLE_EVENTS: EventData[] = [
    {
        id: "private-celebrations",
        title: "Private Celebrations",
        description: "For those once-in-a-lifetime moments — birthdays, anniversaries, engagements, and elegant soirées — our retreat offers an atmosphere of exclusivity and grace. Imagine candlelit dinners under the stars, bespoke menus curated by our chefs, and spaces that effortlessly adapt to your vision. Every celebration here is elevated by our attention to detail and commitment to refined hospitality.",
        images: [
            "/images/about/about.webp",
            "/images/about/our-mission.webp",
            "/images/about/our-vision.webp",
            "/images/home/luxury.webp",
            "/images/home/fine-dining.webp",
            "/images/about/about.webp",
            "/images/about/our-mission.webp",
            "/images/about/our-vision.webp",
        ]
    },
    {
        id: "family-gatherings",
        title: "Family Gatherings",
        description: "De Royale Montana is the perfect setting to reconnect with loved ones in comfort and style. Our expansive cottages, curated culinary experiences, and tranquil open-air settings offer families the chance to gather, unwind, and create shared memories in an environment that feels both luxurious and heartfelt. It's togetherness, redefined.",
        images: [
            "/images/about/about.webp",
            "/images/about/our-mission.webp",
            "/images/about/our-vision.webp",
            "/images/home/scenic-adventures.webp",
            "/images/home/cottage-room.webp",
            "/images/about/about.webp",
            "/images/about/our-mission.webp",
            "/images/about/our-vision.webp",
        ]
    },
    {
        id: "corporate-retreats",
        title: "Corporate Retreats",
        description: "Inspire clarity, connection, and creativity with a retreat that breaks away from the ordinary. Whether you're hosting a leadership offsite, a brand workshop, or a team-building getaway, our sophisticated yet serene setting allows space for fresh ideas and focused thinking — all complemented by gourmet dining and impeccable service.",
        images: [
            "/images/about/about.webp",
            "/images/about/our-mission.webp",
            "/images/about/our-vision.webp",
            "/images/home/scenic-adventures.webp",
            "/images/home/cottage-room.webp",
            "/images/about/about.webp",
            "/images/about/our-mission.webp",
            "/images/about/our-vision.webp",
        ]
    }
    ,
    {
        id: "cultural-events",
        title: "Cultural Events",
        description: "Feel the stillness of the Western Ghats in a retreat designed for restoration and renewal. From yoga intensives and meditation workshops to spiritual immersions, our natural surroundings and tranquil design provide the perfect setting for deep inner journeys, supported by discreet, nurturing hospitality.",
        images: [
            "/images/about/about.webp",
            "/images/about/our-mission.webp",
            "/images/about/our-vision.webp",
            "/images/home/scenic-adventures.webp",
            "/images/home/cottage-room.webp",
            "/images/about/about.webp",
            "/images/about/our-mission.webp",
            "/images/about/our-vision.webp",
        ]
    }
    , {
        id: "spiritual-retreats",
        title: "Spiritual Retreats",
        description: "Feel the stillness of the Western Ghats in a retreat designed for restoration and renewal. From yoga intensives and meditation workshops to spiritual immersions, our natural surroundings and tranquil design provide the perfect setting for deep inner journeys, supported by discreet, nurturing hospitality.",
        images: [
            "/images/about/about.webp",
            "/images/about/our-mission.webp",
            "/images/about/our-vision.webp",
            "/images/home/scenic-adventures.webp",
            "/images/home/cottage-room.webp",
            "/images/about/about.webp",
            "/images/about/our-mission.webp",
            "/images/about/our-vision.webp",
        ]
    }
];

export default function EventsList({ svgColor = "accent" }: SvgColorProps) {
    return (
        <section className="bg-primary flex flex-col gap-0 md:gap-10 lg:gap-12 xl:gap-15 2xl:gap-20 3xl:gap-25 pb-8 mlg:pb-10 lg:pb-12 xl:pb-15 2xl:pb-18 3xl:pb-20">
            {SAMPLE_EVENTS.map((event, index) => (
                <EventCard
                    key={event.id}
                    event={event}
                    alignment={index % 2 === 0 ? "left" : "right"}
                    svgColor={svgColor}
                />
            ))}
        </section>
    );
}