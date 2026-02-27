"use client";

import { usePathname } from "next/navigation";
import Link from 'next/link';
import { useState, useEffect } from "react";
import Image from "next/image";
import { useSmoothScroll } from "@/context/SmoothScrollContext";

const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Explore", href: "/explore" },
    { label: "Wedding", href: "/wedding" },
    { label: "Restaurants", href: "/restaurants" },
    { label: "Events", href: "/events" },
];

export default function Header() {
    const pathname = usePathname();
    const isRelativePage = pathname === "/contact-us" || (pathname.startsWith("/blog/") && pathname !== "/blog");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { lenis } = useSmoothScroll();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
            lenis?.stop();
        } else {
            document.body.style.overflow = "";
            lenis?.start();
        }

        return () => {
            document.body.style.overflow = "";
            lenis?.start();
        };
    }, [isMenuOpen, lenis]);

    return (
        <>
            <header className={`${isRelativePage ? "relative bg-primary" : "absolute bg-secondary/10 backdrop-blur-xl"} top-0 left-0 right-0 z-101 font-body font-normal text-xxs mlg:text-xs sm:text-sm 3xl:text-lg tracking-widest text-ivory border-b-[0.5px] border-secondary uppercase transition-all duration-300`}>

                <div className="flex justify-between fpx">

                    <div className="flex">
                        {/* Hamburger Menu */}
                        <div className="flex items-center gap-3 sm:gap-4 pr-3 md:pr-7 py-3 sm:py-6 2xl:py-5 3xl:py-6 group cursor-pointer z-90 relative" onClick={toggleMenu}>
                            {/* Hamburger Menu Line */}
                            <div className="flex flex-col items-end gap-1.5 sm:gap-2 3xl:gap-2.5">
                                <span className={`w-6 sm:w-8 3xl:w-10 h-px bg-secondary block rounded-full transition-transform duration-300`}></span>
                                <span className={`w-6 sm:w-8 3xl:w-10 group-hover:w-6 h-px bg-secondary block rounded-full transition-all duration-300`}></span>
                            </div>
                            {/* End of Hamburger Menu Line */}

                            {/* Menu text */}
                            <div className="relative overflow-clip h-4 sm:h-5 leading-1.8 3xl:leading-tight">
                                <div className={`transform-3d transition-all duration-300 ease-in-out ${isMenuOpen ? "transform-[translateY(-100%)]" : "translate-y-0"}`}>
                                    Menu&nbsp;
                                </div>
                                <div className={`absolute  transform-3d transition-all duration-300 ease-in-out ${isMenuOpen ? "transform-[translateY(-100%)]" : "translate-y-0"}`}>
                                    Close
                                </div>
                            </div>
                            {/* End of Menu text */}
                        </div>
                        {/* End of Hamburger Menu */}

                        {/* Logo */}
                        <div className="pl-3 md:pl-7 py-3  2xl:py-5 3xl:py-6 z-10 relative border-l-[0.5px] border-secondary">
                            <Image src="/images/footer-logo.png" alt="logo" width={163.5} height={75} className="w-[80.3] md:w-[120.3] md:h-[55.25] h-[36.88]" />
                        </div>
                        {/* End of Logo */}
                    </div>


                    <div className="flex justify-between items-center py-3 2xl:py-5 3xl:py-6 gap-10 3xl:gap-16 uppercase z-10 relative">
                        <nav className="hidden xl:flex items-center gap-10 2xl:gap-12 3xl:gap-16 mt-3  ">
                            {menuItems.map((item) => (
                                <Link key={item.label} href={item.href} className="leading-none transition-colors flex flex-col gap-2 group ">
                                    {item.label}
                                    <span className="block w-full h-px bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-right group-hover:origin-left"></span>
                                </Link>
                            ))}
                        </nav>
                        <Link href="/contact-us" className="bg-secondary/30 text-secondary px-4 md:px-8 py-2 md:py-3.5 3xl:py-4 rounded-full uppercase">Contact</Link>
                    </div>

                </div>
                {/* Menu Overlay */}
                <div className={`${isMenuOpen ? "h-screen" : "h-0"} fixed inset-0 w-full flex items-center justify-center bg-primary z-80 overflow-hidden transition-[height] duration-400 ease-[cubic-bezier(0.76,0,0.24,1)]`}>

                    <div className="absolute w-screen h-screen inset-0 flex justify-center items-center bg-primary">

                        <div className="flex flex-col items-center gap-10 2xl:gap-12 3xl:gap-16 uppercase z-10 relative">
                            {menuItems.map((item) => (
                                <Link key={item.label} href={item.href} className="leading-none transition-colors flex flex-col gap-2 group ">
                                    {item.label}
                                    <span className="block w-full h-px bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-right group-hover:origin-left"></span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
                {/* End of Menu Overlay */}
            </header>
        </>
    );
}
