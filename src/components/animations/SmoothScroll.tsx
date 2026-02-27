"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { useGSAP } from "@gsap/react";
import { SmoothScrollProvider, useSmoothScroll } from "@/context/SmoothScrollContext";

gsap.registerPlugin(ScrollTrigger);

function SmoothScrollContent({ children }: { children: React.ReactNode }) {
    const lenisRef = useRef<Lenis | null>(null);
    const { setLenis } = useSmoothScroll();

    useGSAP(() => {
        const lenis = new Lenis({
            duration: 2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: 2,
            orientation: 'vertical',
            gestureOrientation: 'vertical',
        });

        lenisRef.current = lenis;
        setLenis(lenis);

        lenis.on('scroll', ScrollTrigger.update);

        const update = (time: number) => {
            lenis.raf(time * 1000);
        };

        gsap.ticker.add(update);

        gsap.ticker.lagSmoothing(0);
        ScrollTrigger.refresh();

        return () => {
            gsap.ticker.remove(update);
            lenis.destroy();
            setLenis(null); // Cleanup
        };
    });

    return (
        <div id="smooth-wrapper">
            {children}
        </div>
    );
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
    return (
        <SmoothScrollProvider>
            <SmoothScrollContent>
                {children}
            </SmoothScrollContent>
        </SmoothScrollProvider>
    );
}
