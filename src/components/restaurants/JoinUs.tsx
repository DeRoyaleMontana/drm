import Image from "next/image";
import { FloralIcon2 } from "../icons";

export default function JoinUs() {
    return (
        <section className="relative h-[400px] md:h-[500px] 3xl:h-[750px] flex flex-col justify-end items-center fp font-body overflow-hidden">
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
                <h4 className="f-h2 sm:w-2/3 md:w-1/2 lg:w-full font-display text-center font-light text-secondary leading-tight">Flavours to remember. Moments to savour.</h4>
                <hr className="w-[40%] sm:w-[30%] max-w-[199px] h-0.5 bg-accent" />
                <p className="md:max-w-4/6 f-body leading-normal text-secondary text-center">Join us at De Royale Montana and experience dining that feels just right — balanced, memorable, and always welcoming.</p>
            </div>
        </section>
    )
}