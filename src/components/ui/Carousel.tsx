"use client";

import { useRef, ReactNode, useMemo } from "react";
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
    loop?: boolean;
    /** Callback when Swiper is initialized - use this for external pagination */
    onSwiperInit?: (swiper: SwiperType) => void;
    /** Callback when slide changes - use this for external pagination */
    onSlideChange?: (activeIndex: number) => void;
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
    loop,
    onSwiperInit,
    onSlideChange,
}: CarouselProps) {
    const childrenArray = useMemo(() => Array.isArray(children) ? children : [children], [children]);
    const totalSlides = childrenArray.length;

    // Helper to get gap value
    const getGap = (bp: 'mobile' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl') => {
        if (typeof gap === 'number') return gap;
        return gap?.[bp] || 20;
    };

    const breakpoints = useMemo(() => {
        const bp: Record<number, { slidesPerView?: number; spaceBetween?: number }> = {};

        if (slidesPerView.mobile) {
            bp[0] = { slidesPerView: slidesPerView.mobile, spaceBetween: getGap('mobile') };
        }
        if (slidesPerView.sm) {
            bp[640] = { slidesPerView: slidesPerView.sm, spaceBetween: getGap('sm') };
        }
        if (slidesPerView.md) {
            bp[768] = { slidesPerView: slidesPerView.md, spaceBetween: getGap('md') };
        }
        if (slidesPerView.lg) {
            bp[1024] = { slidesPerView: slidesPerView.lg, spaceBetween: getGap('lg') };
        }
        if (slidesPerView.xl) {
            bp[1280] = { slidesPerView: slidesPerView.xl, spaceBetween: getGap('xl') };
        }
        if (slidesPerView['2xl']) {
            bp[1440] = { slidesPerView: slidesPerView['2xl'], spaceBetween: getGap('2xl') };
        }
        if (slidesPerView['3xl']) {
            bp[1920] = { slidesPerView: slidesPerView['3xl'], spaceBetween: getGap('3xl') };
        }
        return bp;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        slidesPerView.mobile, slidesPerView.sm, slidesPerView.md,
        slidesPerView.lg, slidesPerView.xl, slidesPerView['2xl'], slidesPerView['3xl'],
        gap
    ]);

    const modules = useMemo(() => [Navigation, Pagination, ...(autoplay ? [Autoplay] : [])], [autoplay]);

    const autoplayConfig = useMemo(() => autoplay
        ? {
            delay: autoplayDelay,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
        }
        : false, [autoplay, autoplayDelay]);

    const initialGap = typeof gap === 'number' ? gap : (gap.mobile || 20);

    // Calculate max slides per view to determine if loop should be enabled
    const maxSlidesPerView = Math.max(
        ...Object.values(slidesPerView).filter((v) => typeof v === "number")
    );

    // Only enable loop if we have enough slides
    const enableLoop = totalSlides > maxSlidesPerView;

    const swiperRef = useRef<SwiperType | null>(null);

    return (
        <div className={`relative ${className}`}>
            <Swiper
                onSwiper={(swiper) => {
                    swiperRef.current = swiper;
                    onSwiperInit?.(swiper);
                }}
                onSlideChange={(swiper) => {
                    onSlideChange?.(swiper.realIndex);
                }}
                modules={modules}
                spaceBetween={initialGap}
                slidesPerView={slidesPerView.mobile || 1}
                slidesPerGroup={1}
                loop={loop !== undefined ? loop : enableLoop}
                centeredSlides={false}
                speed={speed * 1000}
                autoplay={autoplayConfig}
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
