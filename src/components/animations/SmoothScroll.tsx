"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);

    useGSAP(() => { // Changed useEffect to useGSAP
        const lenis = new Lenis({
            duration: 1.6, // Increased for smoother, floatier scroll
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: 2,
            orientation: 'vertical', // Added orientation
            gestureOrientation: 'vertical', // Optimize for vertical scroll, letting native horizontal scroll work better
        });

        lenisRef.current = lenis;

        // Sync Lenis scroll with GSAP ScrollTrigger
        lenis.on('scroll', ScrollTrigger.update);

        // Connect GSAP Ticker to Lenis
        // This makes sure animations are perfectly synced with scroll
        const update = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(update);

        // Disable lag smoothing in GSAP to prevent jumps during heavy scrolls
        gsap.ticker.lagSmoothing(0);

        // Cleanup
        return () => {
            gsap.ticker.remove(update);
            lenis.destroy();
        };
    }); // Removed dependency array as useGSAP doesn't use it in this context

    return (
        <div id="smooth-wrapper">
            {children}
        </div>
    );
}
