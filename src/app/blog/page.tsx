import BreadCrumbs from "@/components/ui/BreadCrumbs";
import CallToAction from "@/components/ui/CallToAction";
import Stories from "@/components/blogs/stories";
import Why from "@/components/blogs/why";
import Explore from "@/components/blogs/explore";
import Featured from "@/components/blogs/featured";
import { fetchAPI } from "@/lib/strapi";

// Ensure this page is dynamically re-generated when posts change via ISR
export const revalidate = 60;

async function getFeaturedPost() {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = "/posts";
    const urlParamsObject = {
        populate: "*",
        filters: {
            isFeatured: {
                $eq: true
            }
        },
        pagination: {
            limit: 1 // We only need one featured post
        }
    };

    const options = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
    return await fetchAPI(path, urlParamsObject, options);
}

async function getStandardPosts() {
    const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
    const path = "/posts";
    const urlParamsObject = {
        populate: "*",
        filters: {
            $or: [
                { isFeatured: { $eq: false } },
                { isFeatured: { $null: true } }
            ]
        },
        sort: ["publishedAt:desc"],
    };

    const options = token ? { headers: { Authorization: `Bearer ${token}` } } : {};
    return await fetchAPI(path, urlParamsObject, options);
}

export default async function Blogs() {
    let featuredPost = null;
    let standardPosts = [];

    try {
        const [featuredRes, standardRes] = await Promise.all([
            getFeaturedPost(),
            getStandardPosts()
        ]);
        featuredPost = featuredRes?.data?.[0] || null;
        standardPosts = standardRes?.data || [];
    } catch (error) {
        console.error("Failed to load blog posts:", error);
    }

    return (
        <main>
            <BreadCrumbs title="Blogs" backgroundImage="/images/about/breadcrumb.webp" />
            <Stories />
            {featuredPost && <Featured post={featuredPost} />}
            <Explore posts={standardPosts} />
            <Why />
            <CallToAction
                title="Book your <br class='hidden lg:block'/>stay with us"
                subtitle="and enjoy"
                buttonText="Book your stay"
                backgroundImage="/images/home/book.webp"
                svgColor="accent"
            />
        </main>
    );
}