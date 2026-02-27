"use client";
import Image from "next/image";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";
import { getStrapiMedia } from "@/lib/strapi";

interface FeaturedProps {
    post: any;
}

export default function Featured({ post }: FeaturedProps) {
    const router = useRouter();
    if (!post) return null;

    const coverUrl = post.coverImage?.url
        ? getStrapiMedia(post.coverImage.url)
        : "/images/about/about.webp"; // Fallback image

    return (
        <section className="grid grid-cols-1 lg:grid-cols-3 grid-rows-auto gap-y-5 md:gap-y-7 lg:gap-y-5 2xl:gap-y-7 3xl:gap-y-10 lg:gap-x-10 xl:gap-x-12 2xl:gap-x-15 3xl:gap-x-18 fpx lg:fpy ">
            <div className="w-full h-[200px] sm:h-[250px] lg:h-auto relative overflow-hidden order-2 lg:order-1 lg:col-span-1 lg:row-span-3">
                <Image
                    src={coverUrl!}
                    alt={post.title || "Featured Post"}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="flex flex-col gap-3 lg:gap-4 2xl:gap-6 lg:col-span-2 order-1">
                <h4 className="text-base sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-[45px] text-text z-10 border-l-4 border-accent pl-4 md:pl-6 leading-tight">{post.title}</h4>
                {post.subtitle && (
                    <div className="text-sm sm:text-base md:text-lg xl:text-xl 2xl:text-2xl 3xl:text-3xl italic text-accent font-light leading-normal">{post.subtitle}</div>
                )}
            </div>
            <p className="f-body leading-normal font-light lg:col-span-2 lg:col-start-2 order-3">{post.excerpt}</p>
            <Button
                buttonBgColor="bg-secondary"
                borderColor="border-accent"
                text="Read More"
                bgColor="bg-accent"
                textColor="text-secondary"
                showIcon={true}
                iconClassName="fill-accent"
                className='justify-self-center md:justify-self-start lg:col-start-2 lg:col-span-2 order-4'
                onClick={() => router.push(`/blog/${post.slug}`)}
            />


        </section>
    );
}