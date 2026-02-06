"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Image from "next/image";

export default function Sanctuary() {

  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const beyondRef = useRef<HTMLDivElement>(null);
  const perfectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const image = imageRef.current;
    const content = contentRef.current;
    const beyond = beyondRef.current;
    const perfection = perfectionRef.current;

    if (!section || !image || !content || !beyond || !perfection) return;

    // Only create animation for lg breakpoint (1024px) and above
    if (window.innerWidth < 1280) {
      // Reset any inline styles that GSAP may have applied
      gsap.set([image, content, beyond, perfection], { clearProps: "all" });
      ScrollTrigger.refresh();
      return;
    }

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "+=200%",
        pin: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
      },
    });

    // 1. Move image AND cards from bottom/offset to vertical center/target
    tl.fromTo(
      image,
      {
        width: "20vw",
        height: "20vh",
        top: "120%",
        left: "50%",
        xPercent: -50,
        yPercent: -50,
        opacity: 0,
      },
      {
        top: "50%",
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      }
    );

    // Animate cards with distinct speeds for depth perception (Parallax-like)

    // "Beyond Limits" (Right/Top): CSS places it, we move it gently UP
    // Starting slightly lower (y: 100) and moving up past its origin (y: -100)
    tl.fromTo([beyond],
      { y: 150 },
      {
        y: -50,
        duration: 2, // Matches overall timeline duration closer
        ease: "power1.inOut", // Smoother start/end than 'none'
      },
      0
    );

    // "True Perfection" (Left/Bottom): CSS places it, we move it FASTER UP
    // Starting lower (y: 50) and moving deeply up (y: -40vh)
    // Adjusted from -80vh which was likely too fast/far
    tl.fromTo([perfection],
      { y: 100 },
      {
        y: "-30vh",
        duration: 2,
        ease: "power1.inOut",
      },
      0
    );

    // Start fading text when image top reaches text bottom
    tl.to(content, {
      opacity: 0,
      y: -30,
      duration: 0.4,
    }, 0.3);

    // 2. Scale image to full screen
    tl.to(image, {
      width: "100vw",
      height: "100vh",
      duration: 1,
      ease: "none",
    }, ">-0.1");

  }, { scope: sectionRef });



  return (
    <div ref={sectionRef} className="relative w-full h-auto xl:h-screen flex flex-col gap-9 items-center fpx fpb lg:fpt bg-primary overflow-hidden">
      {/* Cards behind image - z-0 */}

      {/* Text on top - z-20 */}
      <div className="relative z-0 w-full h-full grid grid-cols-1 grid-rows-[repeat(4, auto)] md:grid-cols-3 md:grid-rows-[repeat(3, auto)] xl:grid-cols-1 xl:grid-rows-1 gap-9 items-center justify-items-center">
        {/* Beyond Limits */}
        <div
          ref={beyondRef}
          className="relative xl:absolute right-0 top-0 w-[85%] h-[304px] sm:w-[45%] md:w-full xl:w-[20%] 3xl:w-[330px] 3xl:h-[400px] bg-[url('/images/home/beyond-limits.webp')] bg-cover bg-center z-0 md:col-span-1  order-2"
        >
          <h4 className="-rotate-90 absolute top-1/2 left-0 -translate-x-1/2 -translate-y-1/2 font-body f-h4 tracking-wider text-ivory text-nowrap uppercase">Beyond Limits</h4>
        </div>
        {/* End of Beyond Limits */}

        {/* True Perfection */}
        <div
          ref={perfectionRef}
          className="relative xl:absolute left-0 bottom-0 w-[85%] h-[184px] sm:w-[55%] md:w-full xl:w-[20%] 3xl:w-[334px] 3xl:h-[250px] bg-[url('/images/home/true-perfection.webp')] bg-cover bg-center z-0 order-4 md:order-3"
        >
          <h4 className="f-md 2xl:f-md absolute bottom-0 left-0 translate-x-1/4 3xl:translate-x-1/2 translate-y-1/2 font-body f-h4 tracking-wider text-ivory  text-nowrap uppercase">True Perfection</h4>
        </div>
        {/* End of True Perfection */}

        {/* Text */}
        <div ref={contentRef} className="flex flex-col gap-y-4 w-full xl:w-1/2 3xl:w-1/2 lg:-mt-20 md:col-span-2 order-1">
          <h2 className="f-h3 text-accent font-display leading-tight tracking-wider text-center md:text-left xl:text-center">A Sanctuary of Luxury <br /> and Peace</h2>
          <p className="text-ivory f-body leading-normal text-center md:text-left xl:text-center">  A boutique retreat nestled in the heart of the Western Ghats, where luxury meets tranquility. Surrounded by lush greenery and sacred hills, our resort offers more than just a stay — it&apos;s an escape into serene landscapes, thoughtful comforts, and warm hospitality. Whether you&apos;re here for spiritual solace or mountain air, every moment is designed to relax, rejuvenate, and reconnect. </p>
        </div>
        {/* End of Text */}

        <Image
          src="/images/home/luxury.webp"
          width={687}
          height={489}
          alt="Luxury"
          className=" xl:hidden w-full h-[250px] sm:h-[371px] object-cover object-center md:col-span-2 md:col-start-2 md:row-start-3 order-3 md:order-4"
        />
      </div>

      {/* Main scaling image - z-1 */}
      <Image
        ref={imageRef}
        src="/images/home/reception.webp"
        width={687}
        height={489}
        alt="Luxury"
        className="hidden xl:block xl:absolute object-cover object-center z-1"
      />
    </div>
  );
}