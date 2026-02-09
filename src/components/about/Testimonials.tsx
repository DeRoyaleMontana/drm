"use client";

import { useRef } from "react";
import { QuoteIcon, LeftArrowIcon, RightArrowIcon } from "@/components/icons";
import { SvgColorProps } from "@/utils/svgColor";
import Carousel from "@/components/ui/Carousel";
import type { Swiper as SwiperType } from "swiper";
import Divider from "../ui/Divider";

interface Testimonial {
    id: number;
    quote: string;
    author: string;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "Lorem Ipsum"
    },
    {
        id: 2,
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "Lorem Ipsum"
    },
    {
        id: 3,
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "John Doe"
    },
    {
        id: 4,
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        author: "Jane Smith"
    }
];

interface TestimonialCardProps extends SvgColorProps {
    testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial, svgColor = "primary" }: TestimonialCardProps) => (
    <div className="flex flex-col gap-6 xl:gap-9 items-center">

        <div className="flex flex-col gap-9 bg-secondary p-9">
            {/* Inner First Row */}
            <div className="flex flex-col gap-6">
                <QuoteIcon svgColor={svgColor} className="w-[25%] mlg:w-[20%] xl:w-[15%] 3xl:w-[12%] h-auto" />
                <p className="f-body  leading-normal text-text font-light">{testimonial.quote}</p>
            </div>
            {/* End of Inner First Row */}

            {/* Inner Second Row */}
            <div className="flex gap-9 items-center">
                <h6 className="f-sm font-semibold whitespace-nowrap uppercase text-accent ">{testimonial.author}</h6>
                <div className="h-0.5 bg-accent w-full"></div>
            </div>
            {/* End of Inner Second Row */}
        </div>




        <Divider dividerColor="bg-secondary" className="w-[80%] xl:w-[90%]" />

    </div>
);

interface TestimonialsProps extends SvgColorProps { }

export default function Testimonials({ svgColor = "primary" }: TestimonialsProps) {
    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className="flex items-center gap-10 2xl:gap-31 fpl fpy sm:fpr bg-accent font-body">
            <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="cursor-pointer shrink-0 hidden lg:flex"
                aria-label="Previous testimonial"
            >
                <LeftArrowIcon bgColor="secondary" arrowColor="primary" />
            </button>
            <div className="flex-1 min-w-0 overflow-hidden">
                <Carousel
                    onSwiperInit={(swiper) => {
                        swiperRef.current = swiper;
                    }}
                    showNavigation={false}
                    showPagination={false}
                    autoplay={true}
                    gap={{
                        mobile: 20,
                        sm: 20,
                        md: 20,
                        lg: 20,
                        xl: 40,
                        '2xl': 40,
                        '3xl': 60
                    }}
                    slidesPerView={{
                        mobile: 1.2,
                        sm: 2,
                        md: 2,
                        lg: 2,
                        xl: 2,
                        '2xl': 2,
                        '3xl': 2
                    }}
                >
                    {testimonials.map((testimonial) => (
                        <TestimonialCard
                            key={testimonial.id}
                            testimonial={testimonial}
                            svgColor={svgColor}
                        />
                    ))}
                </Carousel>
            </div>
            <button
                onClick={() => swiperRef.current?.slideNext()}
                className="cursor-pointer shrink-0 hidden lg:flex"
                aria-label="Next testimonial"
            >
                <RightArrowIcon bgColor="secondary" arrowColor="primary" />
            </button>
        </div>
    );
}