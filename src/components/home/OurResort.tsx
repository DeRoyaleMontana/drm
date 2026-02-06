"use client";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Carousel from "@/components/ui/Carousel";
import { ResortIcon } from "@/components/icons";
import { SvgColorProps } from "@/utils/svgColor";

interface SecondProps extends SvgColorProps { }

export default function OurResort({ svgColor = "accent" }: SecondProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%", // Start animation when top of section hits 80% of viewport height
        end: "bottom center",
        toggleActions: "play none none reverse", // Play on enter, reverse on leave back up
      }
    });

    // 1. Icon and small title
    tl.from(".resort-header", {
      y: 30,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    })
      // 2. Main Title - slightly delayed
      .from(".resort-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      }, "-=0.6")
      // 3. Description text
      .from(".resort-desc", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
      }, "-=0.6")
      // 4. Carousel - fade in
      .from(".resort-carousel", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
      }, "-=0.4");

  }, { scope: containerRef });

  // Card component for reusability
  const Card = ({
    title,
    bgImage = "/images/home/fine-dining.webp"
  }: {
    title: string;
    bgImage?: string;
  }) => (
    <div
      className="relative flex flex-col justify-end items-center h-[240px] lg:h-[240px] xl:h-[300px] 3xl:h-[460px] p-6 bg-cover bg-center border-l-4 border-b-4 border-accent shrink-0 w-full group hover:cursor-pointer overflow-hidden" >

      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110"
        style={{ backgroundImage: `url('${bgImage}')` }}
      ></div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-black"></div>
      {/* Content */}
      <div className="relative w-full z-10 flex flex-col items-center gap-y-4 2xl:gap-y-6 text-ivory font-body font-light">
        <div className="h-px w-[30%] 3xl:w-[25%] mlg:w- bg-accent"></div>
        <h6 className="text-sm mmd:text-base xl:text-lg 3xl:text-2xl">{title}</h6>
      </div>
    </div>
  );

  return (
    <section ref={containerRef} className="flex flex-col gap-y-8 md:gap-y-10 lg:gap-y-16 items-center fp bg-primary">
      <div className="flex flex-col gap-y-4 xl:gap-y-6 3xl:gap-y-8 items-center">
        <div className="resort-header flex flex-col items-center gap-y-4">
          <ResortIcon className="w-[60%] h-auto 2xl:w-[55%] 3xl:w-[72px] 3xl:h-[72px]" svgColor={svgColor} />
          <h6 className="f-sm text-ivory uppercase font-body font-light">Our Resort</h6>
        </div>
        <div className="flex flex-col items-center gap-y-4 text-center">
          <h2 className="resort-title w-full mlg:max-w-9/10 sm:max-w-9/11 xl:max-w-8/11 3xl:max-w-9/11  text-ivory font-display f-h3 tracking-wider leading-tight ">Escape to a mountain retreat where sacred tranquility meets luxurious indulgence.</h2>
          <p className="resort-desc w-full lg:w-11/12 xl:w-4/6 f-body text-accent leading-normal">Tucked away in the heart of the Western Ghats, De Royale Montana offers a harmonious blend of divine serenity, scenic beauty, and boutique elegance — all crowned with warm, heartfelt hospitality.</p>
        </div>
      </div>


      {/* Horizontal scrolling container */}
      <div className="resort-carousel w-full">
        <Carousel
          showNavigation={false}
          showPagination={false}
          autoplay={true}
          autoplayDelay={3000}
          speed={0.8}
          loop={true}
          gap={20}
          slidesPerView={{
            mobile: 1.2,
            small: 2,
            tablet: 2,
            desktop: 3,
          }}
        >
          <Card
            title="Fine dining"
            bgImage="/images/home/fine-dining.webp"
          />
          <Card
            title="Private Cottages"
            bgImage="/images/home/private-cottage.webp"
          />
          <Card
            title="Scenic Adventures"
            bgImage="/images/home/scenic-adventures.webp"
          />
        </Carousel>
      </div>
    </section>
  );
}