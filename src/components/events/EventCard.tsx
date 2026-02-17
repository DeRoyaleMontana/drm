"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Carousel from "../ui/Carousel";
import { FloralIcon } from "@/components/icons";
import Divider from "../ui/Divider";
import { LeftArrowIcon, RightArrowIcon } from "../icons";
import type { Swiper as SwiperType } from "swiper";

export interface EventData {
    id: string;
    title: string;
    description: string;
    images: string[];
}

interface EventCardProps {
    event: EventData;
    alignment?: "left" | "right";
    svgColor?: string;
}

export default function EventCard({ event, alignment = "left", svgColor = "accent" }: EventCardProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const swiperRef = useRef<SwiperType | null>(null);

    const isLeft = alignment === "left";

    // Ensure we have images. If not, use placeholders or handle gracefully.
    // Assuming event.images has at least one image.
    const activeImage = event.images[activeIndex] || event.images[0];

    return (
        <div className={`w-full flex flex-col md:flex-row relative gap-7 ${isLeft ? "justify-end fpx md:fpr fpt" : "fpx md:fpl fpt"}`}>
            {/* Main Background Image Area */}
            <div className={`relative md:absolute md:top-0 w-full md:w-[70%] lg:w-[80%]  h-[200px] sm:h-[250px] md:h-[80%] z-0 overflow-hidden ${isLeft ? "md:left-0" : "md:right-0"}`}>
                <div className="relative w-full h-full">
                    <Image
                        src={activeImage}
                        alt={event.title}
                        fill
                        className="object-cover object-center animate-fade-in transition-all duration-900"
                        key={activeImage} // Key change triggers animation
                    />
                    <div className={`absolute inset-0 z-10 ${isLeft ? "bg-linear-to-br from-transparent to-primary" : "bg-linear-to-tl from-transparent to-primary"}`} />
                </div>
            </div>

            {/* Content Card */}
            <div className={`w-full md:w-[70%] lg:w-[50%] 3xl:w-[40%] flex flex-col gap-7 md:gap-10 xl:gap-16 z-1`}>
                {/* Carousel Controls & Thumbnails */}
                <div className="w-full flex justify-between items-center gap-3 sm:gap-6 xl:gap-9">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="cursor-pointer shrink-0 flex hover:scale-110 transition-transform"
                        aria-label="Previous image"
                    >
                        <LeftArrowIcon bgColor="secondary" arrowColor="primary" className="w-6 h-6 mlg:w-8 mlg:h-8 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12" />
                    </button>

                    <div className="w-full overflow-hidden">
                        <Carousel
                            onSwiperInit={(swiper) => {
                                swiperRef.current = swiper;
                            }}
                            onSlideChange={(index) => {
                                setActiveIndex(index);
                            }}
                            slidesPerView={{
                                mobile: 3,
                                sm: 3,
                                md: 3,
                                lg: 3,
                                '3xl': 3
                            }}
                            gap={
                                {
                                    mobile: 12,
                                    sm: 12,
                                    md: 12,
                                    lg: 20,
                                    '3xl': 20
                                }
                            } // gap-9 is 36px, let's approx or use specific
                            showNavigation={false} // We rely on custom buttons
                            showPagination={false}
                            className="w-full"
                        >
                            {event.images.map((img, i) => (
                                <div key={i} className={`relative w-full h-[50px] mlg:h-[60px] sm:h-[80px] 2xl:h-[90px] 3xl:h-[114px] cursor-pointer transition-opacity duration-300 ${activeIndex === i ? 'opacity-100' : 'opacity-70 hover:opacity-100'}`} onClick={() => swiperRef.current?.slideToLoop(i)}>
                                    <Image src={img} alt={`${event.title} thumbnail ${i + 1}`} fill className="object-cover object-center" />
                                </div>
                            ))}
                        </Carousel>
                    </div>

                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="cursor-pointer shrink-0 flex hover:scale-110 transition-transform"
                        aria-label="Next image"
                    >
                        <RightArrowIcon bgColor="secondary" arrowColor="primary" className="w-6 h-6 mlg:w-8 mlg:h-8 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12" />
                    </button>
                </div>

                {/* Text Content */}
                <div className="flex flex-col gap-16 border border-accent p-4 md:p-6 xl:p-8 2xl:p-10 bg-primary/80 backdrop-blur-xs">
                    <div className="flex flex-col items-center border border-accent p-4 md:p-6 xl:p-8 2xl:p-10 gap-4 md:gap-5 xl:gap-7 3xl:gap-9 text-secondary">
                        <FloralIcon svgColor={svgColor} className="w-[40%] h-auto" />
                        <Divider className="w-full sm:w-[300px]" />
                        <h3 className="font-display text-2xl mlg:text-3xl md:text-4xl xl:text-[45px] text-center">{event.title}</h3>
                        <p className="f-body leading-normal text-justify">
                            {event.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
