import Link from "next/link";
import Image from "next/image";
import { fetchAPI, getStrapiMedia } from "@/lib/strapi";
import StrapiRichText from "@/components/StrapiRichText";
import { notFound } from "next/navigation";

export const revalidate = 60; // ISR revalidation

async function getPostBySlug(slug: string) {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = `/posts`;
    const urlParamsObject = {
        filters: { slug },
        populate: {
            coverImage: true,
            content: {
                populate: "*"
            }
        }
    };

    const options = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
    const res = await fetchAPI(path, urlParamsObject, options);
    return res.data?.[0];
}

export default async function BlogDetail({ params }: { params: { slug: string } }) {
    // Wait and get the dynamic param
    const slug = (await params).slug;
    const post = await getPostBySlug(slug);

    if (!post) {
        notFound();
    }

    const coverUrl = post.coverImage?.url ? getStrapiMedia(post.coverImage.url) : "/images/about/about.webp";

    return (
        <article className="flex flex-col gap-4 lg:gap-6 2xl:gap-8 fp">
            <header className="flex flex-col gap-4 lg:gap-6 2xl:gap-9">
                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-xs sm:text-sm md:text-base 3xl:text-xl">
                    <Link href="/blog" className="text-accent hover:text-accent/50 transition-colors">Back</Link>
                    <span className="text-accent">/</span>
                    <span className="text-primary font-semibold">Blogs</span>
                </div>
                {/* End of Breadcrumb */}

                {/* Title & Subtitle */}
                <div className="flex flex-col gap-2 3xl:gap-4">
                    <h1 className="text-lg sm:text-xl md:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl font-light">{post.title}</h1>
                    {post.subtitle && (
                        <h4 className="text-sm sm:text-base md:text-lg xl:text-xl 3xl:text-2xl font-light italic text-accent">{post.subtitle}</h4>
                    )}
                </div>
                {/* End of Title & Subtitle */}

                {/* Feattured Image */}
                <div className="relative h-[200px] sm:h-[250px] md:h-[350px] 2xl:h-[450px] 3xl:h-[550px] overflow-hidden shrink-0 ">
                    <Image src={coverUrl!} alt={post.title} fill className="object-cover object-center" />
                </div>
                {/* End of Feattured Image */}
            </header>

            {/* Content */}
            <div className="flex flex-col f-body font-light leading-normal gap-4 2xl:gap-6 3xl:gap-8">
                {post.content && post.content.length > 0 ? (
                    post.content.map((block: any, index: number) => {
                        if (block.__component === 'blog.rich-text') {
                            return <StrapiRichText key={index} content={block.content} />;
                        } else if (block.__component === 'blog.image') {
                            const imgUrl = block.media?.url ? getStrapiMedia(block.media.url) : null;
                            if (!imgUrl) return null;
                            return (
                                <div key={index} className="relative w-full h-[200px] sm:h-[250px] md:h-[350px] 2xl:h-[450px] 3xl:h-[550px] overflow-hidden shrink-0">
                                    <Image
                                        src={imgUrl}
                                        alt={block.caption || "Blog image"}
                                        fill
                                        className="object-cover object-center"
                                    />
                                    {block.caption && (
                                        <p className="absolute bottom-4 left-0 right-0 text-center text-sm text-white/80 bg-black/50 py-2 inline-block mx-auto max-w-fit px-4 rounded-full italic z-10 w-fit">
                                            {block.caption}
                                        </p>
                                    )}
                                </div>
                            );
                        } else if (block.__component === 'blog.quote') {
                            return <blockquote key={index} className="text-sm sm:text-base md:text-lg xl:text-xl 3xl:text-2xl text-accent italic">{block.text}</blockquote>;
                        }
                        return null;
                    })
                ) : (
                    <p className="text-neutral-500 italic">No content available for this post.</p>
                )}
            </div>
            {/* End of Content */}
        </article>
    );
}