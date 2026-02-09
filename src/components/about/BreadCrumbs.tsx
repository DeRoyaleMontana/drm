import Image from "next/image";
import Divider from "@/components/ui/Divider";

export default function BreadCrumbs() {

    return (
        <div className="relative fpx fbpy text-secondary font-medium font-display text-xl mlg:text-2xl sm:text-3xl md:text-4xl lg:text-[45px] 2xl:text-5xl 3xl:text-6xl leading-tight sm:leading-none tracking-wide">
            {/* Background Image */}
            <Image
                src="/images/about/breadcrumb.webp"
                alt="Breadcrumbs background"
                fill
                priority
                className="object-cover object-center -z-20"
            />
            {/* overlay */}
            <div className="absolute inset-0 bg-black/60 -z-10"></div>
            {/* End of overlay */}

            {/* Content */}
            <div className="relative flex flex-col items-center justify-center gap-1 mmd:gap-2 md:gap-4 text-center z-10">
                <h2>In the heart of the Western Ghats,</h2>
                <div className="w-full flex items-center justify-center sm:gap-10 lg:gap-15 3xl:gap-20">

                    <Divider className="w-full lg:w-[15%] hidden sm:flex flex-col" />

                    <h2 className="mlg:whitespace-nowrap">We didn’t just build a retreat</h2>

                    <Divider className="w-full lg:w-[15%] hidden sm:flex flex-col" />

                </div>
                <h2>We carved out a sanctuary of timeless elegance.</h2>
            </div>
            {/* End of Content */}


        </div>
    );
}