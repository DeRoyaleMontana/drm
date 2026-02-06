"use client";

import { useRef, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CarouselProps {
    children: ReactNode;
    className?: string;
    showNavigation?: boolean;
    showPagination?: boolean;
    autoplay?: boolean;
    autoplayDelay?: number;
    speed?: number;
    gap?: number;
    slidesPerView?: {
        small: number;
        mobile?: number;
        tablet?: number;
        desktop?: number;
    };
    offset?: {
        left?: number;
        right?: number;
    };
    onSwiperInit?: (swiper: SwiperType) => void;
    loop?: boolean;
}

export default function Carousel({
    children,
    className = "",
    showNavigation = true,
    showPagination = true,
    autoplay = true,
    autoplayDelay = 5000,
    speed = 0.6,
    gap = 20,
    slidesPerView = {
        mobile: 1,
        small: 2,
        tablet: 2,
        desktop: 3,
    },
    offset = {
        left: 0,
        right: 0,
    },
    onSwiperInit,
    loop,
}: CarouselProps) {
    const childrenArray = Array.isArray(children) ? children : [children];
    const totalSlides = childrenArray.length;

    // Build breakpoints for Swiper
    const breakpoints: Record<number, { slidesPerView: number }> = {};

    if (slidesPerView.mobile) {
        breakpoints[0] = { slidesPerView: slidesPerView.mobile };
    }
    if (slidesPerView.small) {
        breakpoints[640] = { slidesPerView: slidesPerView.small };
    }
    if (slidesPerView.tablet) {
        breakpoints[768] = { slidesPerView: slidesPerView.tablet };
    }
    if (slidesPerView.desktop) {
        breakpoints[1024] = { slidesPerView: slidesPerView.desktop };
    }

    // Calculate max slides per view to determine if loop should be enabled
    const maxSlidesPerView = Math.max(
        ...Object.values(slidesPerView).filter((v) => typeof v === "number")
    );

    // Only enable loop if we have enough slides
    const enableLoop = totalSlides > maxSlidesPerView;

    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className={`relative  ${className}`}>
            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    onSwiperInit?.(swiper);
                }}
                modules={[Navigation, Pagination, ...(autoplay ? [Autoplay] : [])]}
                spaceBetween={gap}
                slidesPerView={slidesPerView.mobile || 1}
                slidesPerGroup={1}
                loop={loop !== undefined ? loop : enableLoop}
                speed={speed * 1000}
                autoplay={
                    autoplay
                        ? {
                            delay: autoplayDelay,
                            disableOnInteraction: false,
                            pauseOnMouseEnter: false,
                        }
                        : false
                }
                navigation={false}
                pagination={
                    showPagination && totalSlides > (slidesPerView.mobile || 1)
                        ? {
                            clickable: true,
                            dynamicBullets: false,
                            renderBullet: (index, className) => {
                                return `<span class="${className}"></span>`;
                            },
                        }
                        : false
                }
                breakpoints={breakpoints}
                style={{
                    paddingLeft: offset.left || 0,
                    paddingRight: offset.right || 0,
                }}
                className="swiper-container"
            >
                {childrenArray.map((child, index) => (
                    <SwiperSlide key={index}>{child}</SwiperSlide>
                ))}
            </Swiper>

            {/* Custom navigation buttons */}
            {showNavigation && totalSlides > (slidesPerView.mobile || 1) && (
                <>
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-accent/80 hover:bg-accent text-secondary rounded-full flex items-center justify-center transition-colors"
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
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-accent/80 hover:bg-accent text-secondary rounded-full flex items-center justify-center transition-colors"
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
                </>
            )}
        </div>
    );
}
