"use client";

import { useRef } from "react";
import Image from "next/image";
import { LeftArrowIcon, RightArrowIcon } from "../icons";
import Carousel from "../ui/Carousel";
import type { Swiper as SwiperType } from "swiper";
import Divider from "../ui/Divider";

interface RestaurantImage {
  id: number;
  image: string;
}

const restaurantImages: RestaurantImage[] = [
  {
    id: 1,
    image: "/images/home/dining.webp",
  },
  {
    id: 2,
    image: "/images/home/dining.webp",
  },
  {
    id: 3,
    image: "/images/home/dining.webp",
  },
];

export default function Dine() {
  const swiperRef = useRef<SwiperType | null>(null);
  const activeIndexRef = useRef(0);
  const dotsRef = useRef<(HTMLButtonElement | null)[]>([]);

  // Update dots directly in DOM (no re-render needed)
  const updateDots = (newIndex: number) => {
    const oldIndex = activeIndexRef.current;
    activeIndexRef.current = newIndex;
    // Inactive dot: circular (w-3 h-3)
    if (dotsRef.current[oldIndex]) {
      dotsRef.current[oldIndex]!.className = "w-2 h-2 rounded-full transition-all duration-300 bg-accent/40";
    }
    // Active dot: pill shape (w-6 h-3)
    if (dotsRef.current[newIndex]) {
      dotsRef.current[newIndex]!.className = "w-6 sm:w-8 h-2 rounded-full transition-all duration-300 bg-accent";
    }
  };

  return (
    <div className="flex flex-col gap-y-6 sm:gap-y-8 md:gap-y-10 xl:gap-y-12 2xl:gap-y-14 3xl:gap-y-16 bg-primary pt-22 sm:pt-28 md:pt-32 xl:pt-36 2xl:pt-40 3xl:pt-44 fpx items-center">
      <div className="w-full flex flex-col gap-y-4 items-center">
        <h6 className="f-sm text-accent font-body uppercase font-semibold tracking-wide">Dine at Montana</h6>
        {/* Content */}
        <div className="w-full flex items-center justify-center gap-4 md:gap-8 xl:gap-12 2xl:gap-12 3xl:gap-16">
          <Divider className="w-full sm:w-[15%]" />

          <h2 className="flex-1 sm:flex-0 f-h1 font-display font-medium text-secondary text-center whitespace-nowrap leading-none ">
            Restaurants
          </h2>
          <Divider className="w-full sm:w-[15%]" />

        </div>
        {/* End of Content */}
      </div>

      <div className="flex w-full items-center gap-12 lg:gap-16 xl:gap-20 2xl:gap-24 3xl:gap-28">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="cursor-pointer shrink-0 hidden sm:flex"
          aria-label="Previous slide"
        >
          <LeftArrowIcon bgColor="secondary" arrowColor="primary" />
        </button>
        <div className="flex-1 min-w-0 w-full overflow-hidden">
          <Carousel
            showNavigation={false}
            showPagination={false}
            autoplay={false}
            loop={true}
            gap={32}
            slidesPerView={{ mobile: 1 }}
            onSwiperInit={(s) => {
              swiperRef.current = s;
            }}
            onSlideChange={(index) => {
              updateDots(index);

            }}
            className="w-full"
          >
            {restaurantImages.map((restaurant) => (
              <div
                key={restaurant.id}
                className="w-full h-[250px] md:h-[350px] xl:h-[450px] 2xl:h-[550px] 3xl:h-[650px] relative overflow-hidden"
              >
                <Image
                  src={restaurant.image}
                  alt="Dining at Montana"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 80vw"
                  priority={restaurant.id === 1}
                />
              </div>
            ))}
          </Carousel>
          {/* External Pagination - Pill-shaped active dot */}
          <div className="flex justify-center gap-3 mt-4 sm:mt-6 lg:mt-8 xl:mt-10 2xl:mt-12 3xl:mt-14 relative z-50">
            {restaurantImages.map((_, index) => (
              <button
                key={index}
                ref={(el) => { dotsRef.current[index] = el; }}
                onClick={() => {
                  if (swiperRef.current) {
                    swiperRef.current.slideToLoop(index);
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${index === 0 ? "w-6 sm:w-8 2xl:w-10 bg-accent" : "w-2 bg-accent/40"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="cursor-pointer shrink-0 hidden sm:flex"
          aria-label="Next slide"
        >
          <RightArrowIcon bgColor="secondary" arrowColor="primary" />
        </button>
      </div>
    </div>
  );
}