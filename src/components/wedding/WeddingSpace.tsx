"use client";
import Image from "next/image";
import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import Carousel from "@/components/ui/Carousel";
import { FloralIcon, PeopleIcon } from "@/components/icons";
import { SvgColorProps } from "@/utils/svgColor";

interface WeddingSpace {
  id: number;
  name: string;
  title: string;
  capacity: number;
  description: string;
  quote: string;
  alignment: "left" | "right";
  mainImage: string;
  galleryImages: string[];
}

const weddingSpaces: WeddingSpace[] = [
  {
    id: 1,
    name: "The Banquet Hall",
    title: "Indoor Celebrations in Grand Style",
    capacity: 2,
    description:
      "Step into sophistication with our Banquet Hall, a refined indoor venue designed for timeless wedding moments. From traditional rituals to elegant receptions, the hall provides a serene, climate-controlled space that adapts beautifully to your theme and guest list. High ceilings, curated lighting, and classic interiors set the tone for celebrations that are poised, polished, and perfectly yours.",
    quote:
      "A space where tradition meets modern elegance, and every detail speaks of grace.",
    alignment: "left",
    mainImage: "/images/home/dining.webp",
    galleryImages: [
      "/images/home/reception.webp",
      "/images/home/reception.webp",
      "/images/home/reception.webp",
    ],
  },
  {
    id: 2,
    name: "The Lawn",
    title: "Outdoor Vows Under Open Skies",
    capacity: 2,
    description:
      "Step into sophistication with our Banquet Hall, a refined indoor venue designed for timeless wedding moments. From traditional rituals to elegant receptions, the hall provides a serene, climate-controlled space that adapts beautifully to your theme and guest list. High ceilings, curated lighting, and classic interiors set the tone for celebrations that are poised, polished, and perfectly yours.",
    quote:
      "A space where tradition meets modern elegance, and every detail speaks of grace.",
    alignment: "right",
    mainImage: "/images/home/dining.webp",
    galleryImages: [
      "/images/home/reception.webp",
      "/images/home/reception.webp",
      "/images/home/reception.webp",
    ],
  },
];

interface WeddingSpaceCardProps extends SvgColorProps {
  space: WeddingSpace;
}

function WeddingSpaceCard({ space, svgColor = "accent" }: WeddingSpaceCardProps) {
  const isLeft = space.alignment === "left";
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
      dotsRef.current[newIndex]!.className = "w-6 h-2 rounded-full transition-all duration-300 bg-accent";
    }
  };

  const ImageCard = () => (
    <div className="w-full xl:w-[40%]  flex justify-center">
      <div className="w-full sm:w-[458px] xl:w-full h-[350px] mlg:h-[385px] sm:h-[450px] lg:h-[500px] xl:h-auto  relative rounded-t-full overflow-hidden p-7 sm:p-9 2xl:p-10 3xl:p-12">
        <Image
          src={space.mainImage}
          alt={space.name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 40vw"
          priority
        />
        <div className="absolute inset-0 bg-linear-to-t from-black to-black/17"></div>
        <div className="w-full h-full flex items-end p-7 sm:p-9 2xl:p-10 3xl:p-12 border border-accent rounded-t-full z-10 relative">
          <div className="w-full flex flex-col items-center gap-y-4 mlg:gap-y-6 z-10">
            <h3 className="f-h2 font-display text-center text-secondary">
              {space.name}
            </h3>
            <span className="w-[30%] h-1 bg-accent block"></span>
          </div>
        </div>
      </div>
    </div>
  );

  const ContentSection = () => (
    <div className="w-full xl:w-[60%] flex flex-col gap-8 xl:gap-10 2xl:gap-20">
      {/* Inner Row 1 */}
      <div className="flex flex-col gap-4 lg:gap-9 font-body font-light">
        <div
          className={`flex flex-col gap-y-4 3xl:gap-y-8 ${isLeft
            ? "border-l-4 border-accent pl-4 md:pl-6"
            : "items-start xl:items-end border-l-4 xl:border-l-0 xl:border-r-4 border-accent pl-4 md:pl-6 xl:pl-0 xl:pr-6"
            }`}
        >
          <h4 className="text-base mlg:text-lg md:text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl text-text z-10">{space.title}</h4>
          <div
            className={`flex gap-x-3 3xl:gap-x-4 z-10 justify-start ${isLeft ? "" : "xl:justify-end"
              }`}
          >
            <PeopleIcon svgColor={svgColor} className="w-4 xl:w-5 3xl:w-6 h-4 xl:h-5 3xl:h-6" />
            <h6 className="text-xs mmd:text-sm xl:text-base 3xl:text-xl text-accent font-body uppercase font-semibold">{space.capacity} People</h6>
          </div>
        </div>

        <p className="f-body leading-normal text-accent text-justify">{space.description}</p>
      </div>
      {/* End of Inner Row 1 */}

      {/* Inner Row 2 */}
      <div className="flex flex-col items-center gap-6 sm:gap-8 2xl:gap-10">
        <div className="flex flex-col gap-y-4 items-center">
          <FloralIcon svgColor={svgColor} className="w-[40%] h-auto" />
          <h5 className="text-sm mlg:text-base sm:text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl text-accent font-body text-center sm:w-[70%] xl:w-[80%]">{space.quote}</h5>
        </div>

        {/* Mobile Carousel */}
        <div className="w-full sm:hidden">
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
          >
            {space.galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative w-full h-[214px] overflow-hidden"
              >
                <div className="absolute inset-0 z-10 overlay-gradient pointer-events-none" />
                <Image
                  src={image}
                  alt={`${space.name} gallery image ${index + 1}`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </Carousel>
          {/* External Pagination - Pill-shaped active dot */}
          <div className="flex justify-center gap-3 mt-4 relative z-50">
            {space.galleryImages.map((_, index) => (
              <button
                key={index}
                ref={(el) => { dotsRef.current[index] = el; }}
                onClick={() => {
                  if (swiperRef.current) {
                    swiperRef.current.slideToLoop(index);
                  }
                }}
                className={`h-2 rounded-full transition-all duration-300 ${index === 0 ? "w-6 bg-accent" : "w-2 bg-accent/40"
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        {/* Desktop Grid */}
        <div className="w-full hidden sm:grid grid-cols-3 gap-6 2xl:gap-8">
          {space.galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-[214px] overflow-hidden"
            >
              <div className="absolute inset-0 z-10 overlay-gradient pointer-events-none" />
              <Image
                src={image}
                alt={`${space.name} gallery image ${index + 1}`}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
      {/* End of Inner Row 2 */}
    </div>
  );

  return (
    <div
      className={`flex flex-col gap-14 ${isLeft ? "xl:flex-row" : "xl:flex-row-reverse"
        }`}
    >
      <ImageCard />
      <ContentSection />
    </div>
  );
}

interface WeddingSpaceProps extends SvgColorProps { }

export default function WeddingSpace({ svgColor = "accent" }: WeddingSpaceProps) {
  return (
    <div className="flex flex-col  gap-12 md:gap-16 2xl:gap-24 fpx xl:fpt">
      {weddingSpaces.map((space) => (
        <WeddingSpaceCard key={space.id} space={space} svgColor={svgColor} />
      ))}
    </div>
  );
}
