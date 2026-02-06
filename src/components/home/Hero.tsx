"use client";

import { useRef, useState } from "react";
import Button from "../ui/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [progress, setProgress] = useState(0);

    useGSAP(() => {
        const tl = gsap.timeline();

        tl.from(".hero-title", {
            y: 100,
            opacity: 0,
            duration: 1.5,
            ease: "power4.out",
        })
            .from(".hero-btn", {
                opacity: 0,
                duration: 1.5,
                ease: "power2.out",
            }, "-=1");

    }, { scope: containerRef });

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const { currentTime, duration } = videoRef.current;
            if (duration) {
                setProgress((currentTime / duration) * 100);
            }
        }
    };
    return (
        <section ref={containerRef} className=" relative h-[75vh] sm:h-screen overflow-hidden flex flex-col items-center justify-end fp">
            {/* Background Video */}
            <video
                ref={videoRef}
                autoPlay
                loop
                muted
                playsInline
                onTimeUpdate={handleTimeUpdate}
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/videos/hotel-background-new-opt.webm" type="video/webm" />
                <source src="/videos/hotel-background-new-opt.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="flex flex-col items-center justify-end relative z-10 text-center text-ivory gap-y-12 sm:gap-y-28 2xl:gap-y-32 3xl:gap-y-52  w-full ">
                <h1 className="hero-title font-display f-h1 tracking-wide">Paradise of Serenity</h1>

                <div className="flex flex-col items-center gap-y-8 w-full">

                    <Button
                        buttonBgColor="bg-primary/70"
                        borderColor="border-none"
                        text="Book Now"
                        bgColor="bg-secondary"
                        textColor="text-primary "
                        showIcon={true}
                        iconClassName="fill-secondary"
                        className='backdrop-blur-lg hero-btn'
                    />

                    {/* Scroll Circle */}
                    <span className=" relative p-3.5 xl:p-4 3xl:p-6 pb-10 xl:pb-12 3xl:pb-17 rounded-full bg-primary/70 backdrop-blur-lg">
                        <span className="w-1.5 xl:w-2 3xl:w-2.5 h-1.5 xl:h-2 3xl:h-2.5 bg-secondary rounded-full block scroll-circle"></span>
                    </span>
                    {/* End of Scroll Circle */}

                    {/* Progress Bar Container */}
                    <div className="h-0.5 w-full bg-secondary/20 relative overflow-hidden">
                        <div
                            className="h-full bg-linear-to-r from-transparent to-secondary absolute top-0 left-0 transition-[width] duration-300 ease-linear"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>

                </div>

            </div>
        </section>
    );
}