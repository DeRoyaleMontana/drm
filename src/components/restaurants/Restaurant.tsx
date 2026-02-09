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

interface Restaurant {
  id: number;
  tagline: string;
  title: string;
  description: string;
  quote: string;
  images: RestaurantImage[];
}

const restaurants: Restaurant[] = [
  {
    id: 1,
    tagline: "Pure Vegetarian Restaurant",
    title: "Pulichar",
    description: "A tribute to South Indian culinary tradition, Pulichar offers a serene, sattvic dining experience. From traditional breakfast staples to wholesome thalis and seasonal temple-style delicacies, every dish here is prepared with care, purity, and local ingredients. Ideal for families, pilgrims, and those seeking comfort in authentic vegetarian flavours, Pulichar brings the taste of home with a touch of devotion.",
    quote: "A space where heritage is plated, and every meal is soulful.",
    images: [
      { id: 1, image: "/images/home/dining.webp" },
      { id: 2, image: "/images/home/dining.webp" },
      { id: 3, image: "/images/home/dining.webp" },
    ],
  },
  {
    id: 2,
    tagline: "Pure Vegetarian Restaurant",
    title: "Pulichar",
    description: "A tribute to South Indian culinary tradition, Pulichar offers a serene, sattvic dining experience. From traditional breakfast staples to wholesome thalis and seasonal temple-style delicacies, every dish here is prepared with care, purity, and local ingredients. Ideal for families, pilgrims, and those seeking comfort in authentic vegetarian flavours, Pulichar brings the taste of home with a touch of devotion.",
    quote: "A space where heritage is plated, and every meal is soulful.",
    images: [
      { id: 1, image: "/images/home/dining.webp" },
      { id: 2, image: "/images/home/dining.webp" },
      { id: 3, image: "/images/home/dining.webp" },
    ],
  },
  {
    id: 3,
    tagline: "Pure Vegetarian Restaurant",
    title: "Pulichar",
    description: "A tribute to South Indian culinary tradition, Pulichar offers a serene, sattvic dining experience. From traditional breakfast staples to wholesome thalis and seasonal temple-style delicacies, every dish here is prepared with care, purity, and local ingredients. Ideal for families, pilgrims, and those seeking comfort in authentic vegetarian flavours, Pulichar brings the taste of home with a touch of devotion.",
    quote: "A space where heritage is plated, and every meal is soulful.",
    images: [
      { id: 1, image: "/images/home/dining.webp" },
      { id: 2, image: "/images/home/dining.webp" },
      { id: 3, image: "/images/home/dining.webp" },
    ],
  },
];

interface RestaurantRowProps {
  restaurant: Restaurant;
  index: number;
}

const RestaurantRow = ({ restaurant, index }: RestaurantRowProps) => {
  const swiperRef = useRef<SwiperType | null>(null);
  const isEven = index % 2 === 0;
  const flexDirection = isEven ? "flex-col lg:flex-row" : "flex-col-reverse lg:flex-row";

  const contentSection = (
    <div className="w-full lg:w-1/2 flex flex-col justify-center gap-y-8 lg:gap-y-8 3xl:gap-y-16 font-body lg:py-10">
      <div className="flex flex-col gap-y-4">
        <h6 className="f-sm font-semibold text-accent uppercase">{restaurant.tagline}</h6>
        <h3 className="f-h2 font-display  leading-tight text-secondary">{restaurant.title}</h3>
        <hr className="w-[199px] h-0.5 bg-accent" />
      </div>
      <p className="f-body font-light leading-normal text-secondary text-justify">{restaurant.description}</p>
      <h6 className="f-body font-mona text-accent italic">{restaurant.quote}</h6>
    </div>
  );

  const carouselSection = (
    <div className="w-full lg:w-1/2 relative lg:h-auto">
      <Carousel
        onSwiperInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        showNavigation={false}
        showPagination={false}
        autoplay={false}
        autoplayDelay={4000}
        speed={0.8}
        gap={{
          mobile: 20,
          sm: 40,
        }

        }
        slidesPerView={{
          mobile: 1,
          sm: 1,
          md: 1,
          lg: 1,
        }}
        className="h-full [&_.swiper-container]:h-full"
      >
        {restaurant.images.map((image) => (
          <div
            key={image.id}
            className="w-full h-[250px] sm:h-[350px] lg:h-full relative overflow-hidden"
          >
            <Image
              src={image.image}
              alt={restaurant.title}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        ))}
      </Carousel>
      <div className="absolute inset-0 flex justify-between items-center p-4 sm:p-6 2xl:p-8 pointer-events-none z-10">
        <button
          onClick={() => swiperRef.current?.slidePrev()}
          className="cursor-pointer pointer-events-auto"
          aria-label="Previous slide"
        >
          <LeftArrowIcon bgColor="secondary" arrowColor="primary" />
        </button>
        <button
          onClick={() => swiperRef.current?.slideNext()}
          className="cursor-pointer pointer-events-auto"
          aria-label="Next slide"
        >
          <RightArrowIcon bgColor="secondary" arrowColor="primary" />
        </button>
      </div>
    </div>
  );

  return (
    <div className={`w-full flex flex-col gap-8 lg:gap-12 3xl:gap-20 ${flexDirection}`}>
      {isEven ? (
        <>
          {contentSection}
          {carouselSection}
        </>
      ) : (
        <>
          {carouselSection}
          {contentSection}
        </>
      )}
    </div>
  );
};

export default function Restaurant() {

  return (
    <div className="flex flex-col fp gap-y-12 lg:gap-y-16 3xl:gap-y-20 bg-primary">
      <p className="f-body font-body leading-normal text-accent text-center">At De Royale Montana, dining is more than just nourishment — it is a thoughtfully crafted experience. Whether you’re in search of traditional vegetarian meals, rich non-veg delicacies, or a quiet evening with coffee or cocktails, our culinary offerings are designed to please every palate and elevate every occasion.</p>

      {restaurants.map((restaurant, index) => (
        <div key={restaurant.id} className="flex flex-col gap-y-12 3xl:gap-y-20">
          <RestaurantRow restaurant={restaurant} index={index} />
          {index < restaurants.length - 1 && (
            <>
              <Divider className="w-3/4 mx-auto" />
            </>
          )}
        </div>
      ))}
    </div>
  )
}