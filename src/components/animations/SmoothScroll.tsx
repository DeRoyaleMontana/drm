"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const mainRef = useRef<HTMLDivElement>(null);
    const smootherRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        ScrollSmoother.create({
            wrapper: mainRef.current,
            content: smootherRef.current,
            smooth: 1.5, // Scroll speed/smoothing duration (seconds)
            effects: true, // Allow data-speed and data-lag effects
            smoothTouch: 0.2, // Disable smoothing on touch devices (native scroll is better)
        });
    }, { scope: mainRef });

    return (
        <div id="smooth-wrapper" ref={mainRef}>
            <div id="smooth-content" ref={smootherRef}>
                {children}
            </div>
        </div>
    );
}
