"use client";

import { useLayoutEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ScrollZoomImageProps {
  children: ReactNode;
  zoomScale?: number; // Zoom scale (default: 1.3 = 130%)
  start?: string; // ScrollTrigger start position (default: "top bottom")
  end?: string; // ScrollTrigger end position (default: "bottom top")
  className?: string; // Additional classes for container
  imageClassName?: string; // Additional classes for image element
  backgroundSelector?: string; // CSS selector for background element to zoom (if not provided, first child with background image is used)
}

export default function ScrollZoomImage({
  children,
  zoomScale = 1.3,
  start = "top bottom",
  end = "bottom top",
  className = "",
  imageClassName = "",
  backgroundSelector,
}: ScrollZoomImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const ctxRef = useRef<gsap.Context | null>(null);

  useGSAP(() => {
    const container = containerRef.current;
    if (!container) return;

    // Find the background element to zoom
    let imageElement: HTMLElement | null = null;

    if (backgroundSelector) {
      imageElement = container.querySelector<HTMLElement>(backgroundSelector);
    } else {
      // Find first element with background image
      const allElements = container.querySelectorAll('*');
      for (const el of allElements) {
        const htmlEl = el as HTMLElement;
        const bgImage = window.getComputedStyle(htmlEl).backgroundImage;
        if (bgImage && bgImage !== 'none') {
          imageElement = htmlEl;
          break;
        }
      }
    }

    if (!imageElement) return;

    // Create scroll-based zoom animation
    // Zoom in when scrolling down, zoom out when scrolling up
    gsap.fromTo(
      imageElement,
      { scale: 1 }, // Start at 100% (no zoom)
      {
        scale: zoomScale, // Zoom in when scrolling down
        ease: "none",
        scrollTrigger: {
          trigger: container,
          start, // When top of container hits bottom of viewport
          end, // When bottom of container hits top of viewport
          scrub: true, // Smoothly follows scroll position
        },
      }
    );
  }, { scope: containerRef, dependencies: [zoomScale, start, end, backgroundSelector] });

  return (
    <div
      ref={containerRef}
      className={`${className}`}
      style={{ overflow: 'hidden' }}
    >
      {children}
    </div>
  );
}

