"use client"
import Divider from "../ui/Divider";
import Image from "next/image";
import LeftArrowIcon from "../icons/LeftArrowIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import Carousel from "../ui/Carousel";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { Swiper as SwiperType } from 'swiper';
import { getStrapiMedia } from "@/lib/strapi";

interface ExploreProps {
    posts?: any[];
}

export default function Explore({ posts = [] }: ExploreProps) {
    const swiperRef = useRef<SwiperType>(null);
    const router = useRouter();
    const [isBeginning, setIsBeginning] = useState(true);
    const [isEnd, setIsEnd] = useState(false);
    const [activeCategory, setActiveCategory] = useState("All");

    const categories = [
        "All",
        "Retreat & Rejuvenation",
        "Weddings & Celebrations",
        "Culinary Stories",
        "Local Explorations",
        "Luxury Living"
    ];

    const filteredPosts = activeCategory === "All"
        ? posts
        : posts.filter(post => post.category === activeCategory);

    return (
        <section className="flex flex-col fp gap-10 xl:gap-12  3xl:gap-20">
            {/* Row 1 */}
            <div className=" flex flex-col items-center gap-4">

                <h3 className="text-2xl mlg:text-3xl sm:text-4xl xl:text-[45px] 2xl:text-[50px] 3xl:text-6xl text-accent font-medium font-display leading-tight -tracking-1 capitalize">
                    Explore by experience
                </h3>

                <Divider className="w-[80%] mlg:w-[70%] sm:w-[400px]" />

            </div>
            {/* End of Row 1 */}

            {/* Row 2 */}
            <div className="flex flex-col gap-7 lg:gap-10 3xl:gap-15">
                {/* Categories */}
                <div className="flex gap-4 sm:gap-8 f-body font-light text-accent border-b border-accent pb-4 overflow-x-auto overflow-y-hidden whitespace-nowrap [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => {
                                setActiveCategory(category);
                                swiperRef.current?.slideTo(0); // Reset carousel position on filter change
                            }}
                            className={`${activeCategory === category
                                ? "text-primary font-semibold relative after:content-[''] after:absolute after:-bottom-4 after:left-0 after:w-full after:h-px after:bg-primary"
                                : "hover:text-primary transition-colors"
                                }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
                {/* End of Categories */}


                <div className="w-full relative">
                    <Carousel
                        showNavigation={false}
                        showPagination={false}
                        autoplay={false}
                        loop={false}
                        gap={{
                            mobile: 20,
                            sm: 20,
                            md: 25,
                            lg: 30,
                            xl: 30,
                            '2xl': 30,
                            '3xl': 35
                        }}
                        slidesPerView={{
                            mobile: 1,
                            sm: 2,
                            md: 2,
                            lg: 2,
                            xl: 3,
                            '2xl': 3,
                            '3xl': 3
                        }}
                        onSwiperInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        onSlideChange={() => {
                            if (swiperRef.current) {
                                setIsBeginning(swiperRef.current.isBeginning);
                                setIsEnd(swiperRef.current.isEnd);
                            }
                        }}
                        className="w-full h-full [&_.swiper-wrapper]:items-stretch [&_.swiper-slide]:h-auto!"
                    >
                        {filteredPosts.map((post) => {
                            const coverUrl = post.coverImage?.url
                                ? getStrapiMedia(post.coverImage.url)
                                : "/images/about/about.webp"; // Fallback image

                            return (
                                <div key={post.documentId || post.id} className="flex flex-col bg-primary h-full p-5 lg:p-6 2xl:p-7 3xl:p-8 rounded-3xl gap-5 lg:gap-7">
                                    {/* Featured Image */}
                                    <div className="relative w-full h-[150px] mmd:h-[180px] lg:h-[222px] rounded-xl overflow-hidden shrink-0">
                                        <Image src={coverUrl!} alt={post.title} fill className="object-cover object-center" />
                                    </div>
                                    {/* End of Featured Image */}

                                    {/* Content */}
                                    <div className="flex flex-col gap-2 md:gap-4 grow">
                                        <div className="flex flex-col gap-1 mmd:gap-2 font-semibold">
                                            <h4 className="text-xxs mmd:text-xs lg:text-sm 3xl:text-xl text-accent uppercase">{post.category || "Article"}</h4>
                                            <h3 className="text-sm mmd:text-base lg:text-lg 3xl:text-2xl text-secondary line-clamp-2">{post.title}</h3>
                                        </div>
                                        <p className="f-body leading-normal font-light text-secondary line-clamp-3">{post.excerpt}</p>
                                    </div>
                                    {/* End of Content */}

                                    {/* Read More Button */}
                                    <button
                                        onClick={() => router.push(`/blog/${post.slug}`)}
                                        className="text-xxs mlg:text-xs xl:text-sm 3xl:text-lg bg-accent text-secondary uppercase px-6 py-4 rounded-full w-full mt-auto"
                                    >
                                        Read More
                                    </button>
                                    {/* End of Read More Button */}
                                </div>
                            );
                        })}
                    </Carousel>
                </div>

                <div className="flex justify-center gap-10">
                    <button
                        onClick={() => swiperRef.current?.slidePrev()}
                        className={`cursor-pointer shrink-0  transition-opacity ${isBeginning ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
                        aria-label="Previous testimonial"
                        disabled={isBeginning}
                    >
                        <LeftArrowIcon bgColor="accent" arrowColor="secondary" />
                    </button>
                    <button
                        onClick={() => swiperRef.current?.slideNext()}
                        className={`cursor-pointer shrink-0 transition-opacity ${isEnd ? 'opacity-50 cursor-not-allowed' : 'opacity-100'}`}
                        aria-label="Next testimonial"
                        disabled={isEnd}
                    >
                        <RightArrowIcon bgColor="accent" arrowColor="secondary" />
                    </button>

                </div>

            </div>
            {/* End of Row 2 */}
        </section>
    )
}