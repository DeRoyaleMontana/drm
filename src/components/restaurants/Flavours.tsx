"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function Flavours() {

  const sectionRef = useRef<HTMLDivElement>(null);
  const beyondRef = useRef<HTMLDivElement>(null);
  const perfectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const beyond = beyondRef.current;
    const perfection = perfectionRef.current;

    if (!section || !beyond || !perfection) return;

    // Only create animation for lg breakpoint (1024px) and above
    if (window.innerWidth < 1024) {
      // Reset any inline styles that GSAP may have applied
      gsap.set([beyond, perfection], { clearProps: "all" });
      ScrollTrigger.refresh();
      return;
    }

    // Base movement distance (e.g., 100px)
    const baseDistance = 200;

    // Parallax effect for "Beyond Limits" (Right/Top)
    const speedBeyond = parseFloat(beyond.getAttribute("data-speed") || "0.5");
    gsap.fromTo(beyond,
      { y: baseDistance * speedBeyond },
      {
        y: -baseDistance * speedBeyond,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

    // Parallax effect for "True Perfection" (Left/Bottom) - moves faster
    const speedPerfection = parseFloat(perfection.getAttribute("data-speed") || "1.2");
    gsap.fromTo(perfection,
      { y: baseDistance * speedPerfection },
      {
        y: -baseDistance * speedPerfection,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      }
    );

  }, { scope: sectionRef });



  return (
    <div ref={sectionRef} className="relative w-full flex flex-col gap-9 items-center fp bg-primary overflow-hidden">



      <div className="relative z-0 w-full h-full grid grid-cols-1 grid-rows-auto gap-9 sm:gap-12 md:gap-20 justify-items-center items-center">
        {/* Global Flavors */}
        <div
          ref={beyondRef}
          data-speed="0.5"
          className="relative right-0 top-0 w-[60%] h-[200px] mmd:w-[50%] mlg:w-[40%] sm:w-[35%] sm:h-[250px] md:w-[30%] lg:w-[22%] xl:w-[18%] 2xl:h-[300px] 3xl:w-[330px] 3xl:h-[400px] z-0 justify-self-end"
        >
          <Image
            src='/images/home/beyond-limits.webp'
            alt="Beyond Limits"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 20vw"
          />
          <h4 className="z-10 -rotate-90 absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 font-body f-h4 tracking-wider text-ivory text-nowrap uppercase">Global Flavors</h4>
        </div>
        {/* End of Global Flavors */}


        {/* Text */}
        <div className="flex flex-col gap-y-4 w-[75%] sm:w-[55%] md:w-[45%] lg:w-[40%] xl:w-[32%] 2xl:w-[30%] 3xl:w-[30%]">
          <h2 className="f-h2 text-accent font-display leading-tight tracking-wider text-center">Flavours that comfort, spaces that welcome.</h2>

        </div>
        {/* End of Text */}

        {/* South Indian */}
        <div
          ref={perfectionRef}
          data-speed="1.8"
          className="relative left-0 bottom-0 w-[75%] h-[140px]  mmd:w-[60%] sm:w-[45%] md:h-[180px] lg:w-[35%] xl:w-[25%] 2xl:w-[22%] 3xl:w-[334px] 3xl:h-[250px] z-0 justify-self-start"
        >
          <Image
            src='/images/home/true-perfection.webp'
            alt="True Perfection"
            fill
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 20vw"
          />
          <h4 className="z-10 f-md 2xl:f-md absolute bottom-0 left-0 translate-x-1/4 3xl:translate-x-1/2 translate-y-1/2 font-body f-h4 tracking-wider text-ivory  text-nowrap uppercase">South Indian</h4>
        </div>
        {/* End of South Indian */}



      </div>



    </div>
  );
}