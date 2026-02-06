"use client";

import { useState } from "react";
import { PeopleIcon } from "../icons";
import Carousel from "@/components/ui/Carousel";
import type { Swiper as SwiperType } from "swiper";
import Button from "../ui/Button";


const rooms = [
    {
        title: "Cottage Room",
        capacity: "2 People",
        image: "/images/home/cottage-room.webp",
    },
    {
        title: "Deluxe Room",
        capacity: "2 People",
        image: "/images/home/deluxe-room.webp",
    },
    {
        title: "Suite Room",
        capacity: "2 People",
        image: "/images/home/suite-room.webp",
    },
    {
        title: "Standard Room",
        capacity: "2 People",
        image: "/images/home/deluxe-room.webp",
    },
];

// Reusable Card Component
const RoomCard = ({ room, className = "" }: { room: typeof rooms[0], className?: string }) => (
    <div className={`group hover:cursor-pointer overflow-hidden relative w-full h-[250px] mlg:h-[350px] lg:h-[450px] 2xl:h-[550px] 3xl:h-[720px] ${className}`}>
        {/* Background Image */}
        <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
            style={{ backgroundImage: `url('${room.image}')` }}
        ></div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent to-black pointer-events-none"></div>

        {/* Content */}
        <div className="relative h-full w-full p-4 mlg:p-6 lg:p-8 3xl:p-12 z-10 flex flex-col items-stretch">
            <div className="border border-accent/50 w-full h-full p-4 mlg:p-6 lg:p-8 3xl:p-12">
                <div className="flex flex-col items-start justify-end gap-y-6 border border-accent/50 w-full h-full p-4 mlg:p-6 lg:p-8 3xl:p-12">
                    <h3 className=" text-ivory font-display text-lg mmd:text-xl mlg:text-2xl lg:text-3xl xl:text-4xl 2xl:text-[45px] 3xl:text-[55px] tracking-wider z-10 border-l-4 border-accent pl-6">{room.title}</h3>
                    <div className="flex justify-start items-center gap-x-3 3xl:gap-x-4 z-10">
                        <PeopleIcon className="w-4 xl:w-5 3xl:w-6 h-4 xl:h-5 3xl:h-6" />
                        <h6 className="text-xs mmd:text-sm xl:text-base 3xl:text-xl text-accent font-mona uppercase font-semibold">{room.capacity}</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default function Rooms2() {
    const [swiper, setSwiper] = useState<SwiperType | null>(null);

    const HeaderBlock = () => (
        <div className='flex justify-between'>
            <h2 className="text-2xl mlg:text-3xl sm:text-4xl lg:text-[45px] 2xl:text-5xl 3xl:text-6xl font-display text-primary">Rooms</h2>
            {/* Custom Navigation */}
            <div className='flex gap-x-3 items-center md:hidden'>
                {/* Left Arrow */}
                <button
                    onClick={() => swiper?.slidePrev()}
                    className="w-8 mlg:w-10 h-8 mlg:h-10 bg-accent/80 hover:bg-accent text-secondary rounded-full flex items-center justify-center transition-colors"
                    aria-label="Previous slide"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.5 15L7.5 10L12.5 5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                {/* End of Left Arrow */}

                {/* Right Arrow */}
                <button
                    onClick={() => swiper?.slideNext()}
                    className="w-8 mlg:w-10 h-8 mlg:h-10 bg-accent/80 hover:bg-accent text-secondary rounded-full flex items-center justify-center transition-colors"
                    aria-label="Next slide"
                >
                    <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M7.5 5L12.5 10L7.5 15"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>
                {/* End of Right Arrow */}
            </div>
            {/* End of Custom Navigation */}
        </div>
    );
    const FooterBlock = () => (
        <div className="flex flex-col gap-y-7 ">
            {/* Divider */}
            <div className="flex flex-col gap-y-3">
                <span className="w-full h-px bg-accent block"></span>
                <span className="w-full h-1 bg-accent block"></span>
            </div>
            {/* End of Divider */}

            <h5 className="f-body text-center md:text-left text-primary">A radiant blend of classic opulence and modern refinement.</h5>
            <Button
                buttonBgColor="bg-secondary"
                borderColor="border-accent"
                text="All Rooms"
                bgColor="bg-accent"
                textColor="text-secondary"
                showIcon={true}
                iconClassName="fill-accent"
                className='self-center md:self-start'

            />
        </div>
    );
    return (
        <section className="fp bg-secondary w-full">
            {/* Mobile View: Header -> Carousel -> Footer */}
            <div className="md:hidden flex flex-col gap-6">
                <HeaderBlock />

                {/* Only Cards are in Carousel */}
                <Carousel
                    showNavigation={false}
                    showPagination={false}
                    onSwiperInit={(s) => setSwiper(s)}
                    gap={20}
                    slidesPerView={{
                        mobile: 1,
                        small: 2,
                        tablet: 2,
                        desktop: 3
                    }}
                >
                    {rooms.map((room, index) => (
                        <RoomCard key={index} room={room} className="shrink-0" />
                    ))}
                </Carousel>

                <FooterBlock />
            </div>

            {/* Desktop View: Two Column Flexbox Layout */}
            <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-10 xl:gap-14 3xl:gap-16">
                {/* Column 1: Header + Cards */}
                <div className="flex flex-col gap-8 lg:gap-10 xl:gap-14 3xl:gap-16">
                    <HeaderBlock />
                    <RoomCard room={rooms[0]} />
                    <RoomCard room={rooms[1]} />
                </div>

                {/* Column 2: Cards + Footer */}
                <div className="flex flex-col gap-8 lg:gap-10 xl:gap-14 3xl:gap-16">
                    <RoomCard room={rooms[2]} />
                    <RoomCard room={rooms[3]} />
                    <FooterBlock />
                </div>
            </div>
        </section>
    );
}