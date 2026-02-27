"use client";

import { BlocksRenderer, type BlocksContent } from "@strapi/blocks-react-renderer";
import { getStrapiMedia } from "@/lib/strapi";
import Image from "next/image";

interface StrapiRichTextProps {
    content: BlocksContent;
}

export default function StrapiRichText({ content }: StrapiRichTextProps) {
    if (!content) return null;

    return (
        <BlocksRenderer
            content={content}
            blocks={{
                paragraph: ({ children }) => <p>{children}</p>,
                heading: ({ children, level }) => {
                    switch (level) {
                        case 1:
                            return <h1 className="text-5xl font-light">{children}</h1>;
                        case 2:
                            return <h2 className="text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl">{children}</h2>;
                        case 3:
                        default:
                            return <h3 className="text-base sm:text-lg md:text-xl xl:text-2xl 2xl:text-3xl 3xl:text-4xl">{children}</h3>;
                    }
                },
                image: ({ image }) => {
                    const url = getStrapiMedia(image.url);
                    return (
                        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[550px] overflow-hidden shrink-0">
                            <Image
                                src={url!}
                                alt={image.alternativeText || "Blog image"}
                                fill
                                className="object-cover object-center"
                            />
                            {image.caption && (
                                <p className="absolute bottom-4 left-0 right-0 text-center text-sm text-white/80 bg-black/50 py-2 inline-block mx-auto max-w-fit px-4 rounded-full italic z-10 w-fit">
                                    {image.caption}
                                </p>
                            )}
                        </div>
                    );
                },
            }}
        />
    );
}
