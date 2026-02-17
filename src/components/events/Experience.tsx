import Image from "next/image";
import { FloralIcon2 } from "../icons";

export default function Experience() {
    return (
        <section className="relative h-[285px] md:h-[300px] 3xl:h-[489px] flex flex-col justify-center items-center fp font-body overflow-hidden">
            <Image
                src="/images/home/stay-bg.webp"
                alt="Dining Experience"
                fill
                className="object-cover object-center z-0"
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
            />
            <div className="absolute inset-0 bg-linear-to-t from-black to-transparent z-10"></div>
            <div className="w-full flex flex-col items-center gap-3 md:gap-3 3xl:gap-4 font-body max-container z-20 relative">
                <FloralIcon2 svgColor="secondary" />
                <h4 className="lg:max-w-5/6 xl:max-w-4/6 text-lg mlg:text-xl sm:text-2xl lg:text-[28px] 2xl:text-3xl 3xl:text-[45px] text-secondary text-center leading-tight font-light italic">Your gathering deserves more than a venue. It deserves an experience.</h4>
            </div>
        </section>
    );
}