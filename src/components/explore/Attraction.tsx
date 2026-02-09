"use client";

import { useRef } from "react";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";
import { FloralIcon, FloralIcon2 } from "@/components/icons";
import { SvgColorProps } from "@/utils/svgColor";
import Divider from "../ui/Divider";
import Carousel from "../ui/Carousel";

interface Attraction {
  id: number;
  title: string;
  description: string;
  alignment: "left" | "right";
  mainImage: string;
  galleryImages: string[];
}

const attractions: Attraction[] = [
  {
    id: 1,
    title: "Kukke Subrahmanya Temple",
    description: "A renowned pilgrimage site dedicated to Lord Subrahmanya, this sacred temple is just minutes away. Known for its spiritual ambiance and rituals, it draws thousands of devotees year-round.",
    alignment: "left",
    mainImage: "/images/about/about.webp",
    galleryImages: ["/images/about/about.webp", "/images/about/breadcrumb.webp", "/images/about/essence.webp"],
  },
  {
    id: 2,
    title: "Pushpagiri / Kumara Parvatha",
    description: "A favorite among trekkers, this trail is as rewarding as it is challenging. Experience dense forests, panoramic ridge walks, and a summit that feels like touching the clouds.",
    alignment: "right",
    mainImage: "/images/about/about.webp",
    galleryImages: ["/images/about/about.webp", "/images/about/about.webp", "/images/about/about.webp"],
  },
  {
    id: 3,
    title: "Patla Betta",
    description: "A lesser-known gem offering breathtaking views and a quiet escape into nature. Perfect for a short hike or picnic amidst rolling hills.",
    alignment: "left",
    mainImage: "/images/about/about.webp",
    galleryImages: ["/images/about/about.webp", "/images/about/about.webp", "/images/about/about.webp"],
  },
  {
    id: 4,
    title: "Bisle Ghat",
    description: "Often called the 'heaven on the Western Ghats', Bisle Ghat is a biodiversity hotspot. Enjoy dense jungles, waterfalls, and the thrill of nature at its rawest.",
    alignment: "right",
    mainImage: "/images/about/about.webp",
    galleryImages: ["/images/about/about.webp", "/images/about/about.webp", "/images/about/about.webp"],
  },
  {
    id: 5,
    title: "Mankanahalli Ridge Point",
    description: "This scenic viewpoint offers a sweeping panorama of the surrounding valleys and peaks. A beautiful spot for photography, sunrise, or quiet contemplation.",
    alignment: "left",
    mainImage: "/images/about/about.webp",
    galleryImages: ["/images/about/about.webp", "/images/about/about.webp", "/images/about/about.webp"],
  },
  {
    id: 6,
    title: "Mallalli Falls",
    description: "One of the most stunning waterfalls in Karnataka, Mallalli Falls gushes down from the Kumaradhara River. Best visited during or post-monsoon for full flow and dramatic views.",
    alignment: "right",
    mainImage: "/images/about/about.webp",
    galleryImages: ["/images/about/about.webp", "/images/about/about.webp", "/images/about/about.webp"],
  },
  {
    id: 7,
    title: "Bildwara Cave",
    description: "A mysterious cave temple believed to be steeped in history and spiritual energy. Ideal for a quiet visit and a touch of the mystical.",
    alignment: "left",
    mainImage: "/images/about/about.webp",
    galleryImages: ["/images/about/about.webp", "/images/about/about.webp", "/images/about/about.webp"],
  },
  {
    id: 8,
    title: "Sakleshpur",
    description: "A quaint hill town surrounded by plantations, historic forts, and charming trails. A perfect day-trip destination filled with greenery and old-world charm.",
    alignment: "right",
    mainImage: "/images/about/about.webp",
    galleryImages: ["/images/about/about.webp", "/images/about/about.webp", "/images/about/about.webp"],
  },
];

interface AttractionCardProps extends SvgColorProps {
  attraction: Attraction;
}

function AttractionCard({ attraction, svgColor }: AttractionCardProps) {
  const isLeft = attraction.alignment === "left";
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

  const ImageDiv = () => (
    <div className="w-full lg:w-[30%] h-[385px] lg:h-auto relative overflow-hidden group">
      <div className="absolute inset-0 z-10 overlay-gradient pointer-events-none" />
      <Image
        src={attraction.mainImage}
        alt={attraction.title}
        fill
        className="object-cover object-center transition-transform duration-700 group-hover:cursor-pointer group-hover:scale-110"
        sizes="(max-width: 1024px) 100vw, 30vw"
        priority
      />
    </div>
  );

  const ContentDiv = () => (
    <div className="w-full lg:w-[70%] flex flex-col gap-8 lg:gap-20 py-0 lg:py-12">
      {/* Inner Row 1 */}
      <div
        className={`flex flex-col gap-4 lg:gap-9 font-body font-light ${isLeft ? "" : "items-start lg:items-end"
          }`}
      >
        <h4
          className={`text-base mlg:text-lg md:text-xl lg:text-2xl 2xl:text-3xl 3xl:text-4xl text-text z-10 ${isLeft
            ? "border-l-4 border-accent pl-4 md:pl-6"
            : "border-l-4 lg:border-l-0 lg:border-r-4 border-accent pl-4 md:pl-6 lg:pl-0 lg:pr-6"
            }`}
        >
          {attraction.title}
        </h4>
        <p
          className={`f-body leading-normal text-accent text-left ${isLeft ? "" : "lg:text-right"
            }`}
        >
          {attraction.description}
        </p>
      </div>
      {/* End of Inner Row 1 */}

      {/* Inner Row 2 */}
      <div className="flex flex-col items-center gap-10">
        <FloralIcon
          svgColor={svgColor}
          className="w-[40%] h-auto"
        />
        {/* Mobile Carousel with External Pagination */}
        <div className="w-full md:hidden">
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
            {attraction.galleryImages.map((image, index) => (
              <div
                key={index}
                className="relative w-full h-[214px] overflow-hidden group"
              >
                <div className="absolute inset-0 z-10 overlay-gradient pointer-events-none" />
                <Image
                  src={image}
                  alt={`${attraction.title} gallery image ${index + 1}`}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </Carousel>
          {/* External Pagination - Pill-shaped active dot */}
          <div className="flex justify-center gap-3 mt-4 relative z-50">
            {attraction.galleryImages.map((_, index) => (
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
        <div className="w-full hidden md:grid grid-cols-3 gap-8 ">
          {attraction.galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative w-full h-[214px] overflow-hidden group"
            >
              <div className="absolute inset-0 z-10 overlay-gradient pointer-events-none" />
              <Image
                src={image}
                alt={`${attraction.title} gallery image ${index + 1}`}
                fill
                className="object-cover object-center group-hover:cursor-pointer group-hover:scale-110 transition-transform duration-700"
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
      className={`flex gap-9 ${isLeft
        ? "flex-col lg:flex-row "
        : "flex-col-reverse lg:flex-row "
        }`}
    >
      {isLeft ? (
        <>
          <ImageDiv />
          <ContentDiv />
        </>
      ) : (
        <>
          <ContentDiv />
          <ImageDiv />
        </>
      )}
    </div>
  );
}

interface AttractionProps extends SvgColorProps { }

export default function Attraction({ svgColor = "accent" }: AttractionProps) {
  return (
    <div className="flex flex-col gap-12 fpx fpb">
      {/* Row 1 */}
      <div className="flex flex-col items-center gap-4 xl:gap-6">
        <FloralIcon2 svgColor={svgColor} />
        <h3 className="text-2xl mlg:text-3xl sm:text-4xl xl:text-[45px] 2xl:text-[50px] 3xl:text-6xl text-accent font-medium font-display leading-tight -tracking-1">
          Top Nearby Attractions
        </h3>

        <Divider className="w-[80%] mlg:w-[70%] sm:w-[400px]" />

      </div>
      {/* End of Row 1 */}

      {/* Attractions */}
      {attractions.map((attraction) => (
        <AttractionCard key={attraction.id} attraction={attraction} svgColor={svgColor} />
      ))}
    </div>
  );
}
