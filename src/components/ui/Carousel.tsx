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
    gap?: number | {
        mobile?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
        '2xl'?: number;
        '3xl'?: number;
    };
    slidesPerView?: {
        mobile?: number;
        sm?: number;
        md?: number;
        lg?: number;
        xl?: number;
        '2xl'?: number;
        '3xl'?: number;
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
        sm: 2,
        md: 2,
        lg: 3,
        '2xl': 3,
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

    // Helper to get gap value
    const getGap = (bp: 'mobile' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl') => {
        if (typeof gap === 'number') return gap;
        return gap[bp] !== undefined ? gap[bp] : (gap.mobile || 20);
    };

    const initialGap = typeof gap === 'number' ? gap : (gap.mobile || 20);

    // Build breakpoints for Swiper
    const breakpoints: Record<number, { slidesPerView?: number; spaceBetween?: number }> = {};

    // Helper to merge breakpoint config
    const addBreakpoint = (width: number, config: { slidesPerView?: number; spaceBetween?: number }) => {
        if (!breakpoints[width]) breakpoints[width] = {};
        Object.assign(breakpoints[width], config);
    };

    if (slidesPerView.mobile || (typeof gap !== 'number' && gap.mobile)) {
        addBreakpoint(0, {
            slidesPerView: slidesPerView.mobile,
            spaceBetween: getGap('mobile')
        });
    }
    if (slidesPerView.sm || (typeof gap !== 'number' && gap.sm)) {
        addBreakpoint(640, {
            slidesPerView: slidesPerView.sm,
            spaceBetween: getGap('sm')
        });
    }
    if (slidesPerView.md || (typeof gap !== 'number' && gap.md)) {
        addBreakpoint(768, {
            slidesPerView: slidesPerView.md,
            spaceBetween: getGap('md')
        });
    }
    if (slidesPerView.lg || (typeof gap !== 'number' && gap.lg)) {
        addBreakpoint(1024, {
            slidesPerView: slidesPerView.lg,
            spaceBetween: getGap('lg')
        });
    }
    if (slidesPerView.xl || (typeof gap !== 'number' && gap.xl)) {
        addBreakpoint(1280, {
            slidesPerView: slidesPerView.xl,
            spaceBetween: getGap('xl')
        });
    }
    if (slidesPerView['2xl'] || (typeof gap !== 'number' && gap['2xl'])) {
        addBreakpoint(1440, {
            slidesPerView: slidesPerView['2xl'],
            spaceBetween: getGap('2xl')
        });
    }
    if (slidesPerView['3xl'] || (typeof gap !== 'number' && gap['3xl'])) {
        addBreakpoint(1920, {
            slidesPerView: slidesPerView['3xl'],
            spaceBetween: getGap('3xl')
        });
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
                spaceBetween={initialGap}
                slidesPerView={slidesPerView.mobile || 1}
                slidesPerGroup={1}
                loop={loop !== undefined ? loop : enableLoop}
                centeredSlides={false}
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
