"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const stayIncludes = [
  {
    title: "Spacious Banquet Hall",
    image: "/images/home/beyond-limits.webp",
    type: "tall",
    textColor: "text-ivory"
  },
  {
    title: "Bar & Restaurant",
    image: "/images/home/true-perfection.webp",
    type: "wide",
    textColor: "text-ivory"
  },
  {
    title: "Pure Veg Restaurant",
    image: "/images/home/beyond-limits.webp",
    type: "tall",
    textColor: "text-secondary"
  },
  {
    title: "Temple Visit Assistance",
    image: "/images/home/true-perfection.webp",
    type: "wide",
    textColor: "text-secondary"
  },
  {
    title: "24/7 Front Desk Assistance",
    image: "/images/home/beyond-limits.webp",
    type: "tall",
    textColor: "text-secondary"
  },
  {
    title: "Room Service",
    image: "/images/home/true-perfection.webp",
    type: "wide",
    textColor: "text-secondary"
  },
  {
    title: "Ample Parking Space",
    image: "/images/home/true-perfection.webp",
    type: "tall",
    textColor: "text-secondary"
  },
  {
    title: "Free Wi-Fi",
    image: "/images/home/true-perfection.webp",
    type: "wide",
    textColor: "text-secondary"
  },
  {
    title: "Daily Housekeeping",
    image: "/images/home/true-perfection.webp",
    type: "tall",
    textColor: "text-secondary"
  },
  {
    title: "Bar & Cafe",
    image: "/images/home/true-perfection.webp",
    type: "wide",
    textColor: "text-secondary"
  },
  {
    title: "Indoor Games & Leisure Area",
    image: "/images/home/true-perfection.webp",
    type: "tall",
    textColor: "text-secondary"
  },
  {
    title: "Kids’ Play Area",
    image: "/images/home/true-perfection.webp",
    type: "wide",
    textColor: "text-secondary"
  },
];

export default function Stay() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const container = containerRef.current;

    if (!section || !container) return;

    // Calculate how far to scroll (total width - viewport width)
    // Get the actual left padding of the section
    const sectionStyles = window.getComputedStyle(section);
    const paddingLeft = parseFloat(sectionStyles.paddingLeft) || 0;

    // Calculate scroll amount: container's full scrollable width minus the visible area
    // Use different padding multipliers based on screen size (mobile: 2, tablet+: 2.5)
    // Note: window.innerWidth is safe here because useGSAP runs on client
    const paddingMultiplier = window.innerWidth < 768 ? 2.7 : 2;
    const scrollAmount = -(container.scrollWidth - window.innerWidth + paddingLeft * paddingMultiplier);

    gsap.to(container, {
      x: scrollAmount,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: `+=${Math.abs(scrollAmount)}`, // The scroll length matches the horizontal movement distance
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true, // Recalculate on resize
      },
    });

  }, { scope: sectionRef });

  return (
    <div ref={sectionRef} className="relative h-svh md:h-screen w-full flex flex-col justify-center  fpl fpy bg-[url('/images/home/stay-bg.webp')] bg-cover bg-center overflow-hidden">
      {/*  overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/90 to-black/80"></div>
      {/* End of  overlay */}

      {/* Content  */}
      <div className="relative w-full h-[65%] mlg:h-[75%] md:h-[80%] xl:h-full z-10 flex flex-col justify-center gap-y-16 md:gap-y-18 2xl:gap-y-24 3xl:gap-y-27">
        <h2 className="f-h2 font-display tracking-wider text-ivory">Your stay at Montana includes</h2>

        <div ref={containerRef} className="flex w-full h-full gap-x-10 md:gap-x-16 justify-start items-center uppercase pl-3 pr-20 will-change-transform">
          {stayIncludes.map((stayItem, index) => (
            <div
              key={index}
              className={`relative shrink-0 bg-cover bg-center ${stayItem.type === "tall"
                ? "w-[70vw] h-full sm:w-[40vw] md:w-[35vw] lg:w-[25vw]"
                : "w-[75vw] h-[50%] mlg:w-[70vw] sm:w-[50vw] md:w-[40vw] lg:w-[35vw] xl:w-[30vw] 2xl:w-[30vw] 3xl:h-[60%] 3xl:w-[35vw]"
                }`}
              style={{ backgroundImage: `url('${stayItem.image}')` }}
            >
              <h4
                className={`f-h4 font-body absolute ${stayItem.textColor} ${stayItem.type === "tall"
                  ? "-rotate-90 bottom-5 left-3 lg:left-3.5 2xl:left-4 origin-bottom-left whitespace-nowrap"
                  : "bottom-0 left-5 origin-bottom-left translate-y-1/2 text-nowrap"
                  }`}
              >
                {stayItem.title}
              </h4>
            </div>
          ))}
        </div>
      </div>
      {/* End of Content  */}
    </div>
  );
}