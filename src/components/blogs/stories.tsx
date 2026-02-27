import Divider from "../ui/Divider";
import { SvgColorProps } from "@/utils/svgColor";
import FloralIcon2 from "../icons/FloralIcon2";
import Image from "next/image";

export default function Stories({ svgColor }: SvgColorProps) {
    return (
        <section className="flex flex-col fp gap-8 sm:gap-10 lg:gap-15 2xl:gap-20">
            {/* Row 1 */}
            <div className=" flex flex-col items-center gap-4">
                <FloralIcon2 svgColor={svgColor} />
                <h3 className="text-2xl mlg:text-3xl sm:text-4xl xl:text-[45px] 2xl:text-[50px] 3xl:text-6xl text-accent font-medium font-display leading-tight -tracking-1">
                    Stories from the Hills
                </h3>

                <Divider className="w-[80%] mlg:w-[70%] sm:w-[400px]" />

            </div>
            {/* End of Row 1 */}

            {/* Row 2 */}
            <div className="w-full flex flex-col lg:flex-row gap-5 sm:gap-8 lg:gap-10 2xl:gap-15">
                <div className="w-full lg:w-1/2 flex flex-col gap-5 lg:gap-7 3xl:gap-9">
                    <h4 className="text-accent italic text-base mmd:text-lg sm:text-xl md:text-2xl 2xl:text-[28px] 3xl:text-4xl leading-tight font-light">Where serenity is lived, luxury is felt, and every stay becomes a story.</h4>
                    <div className="flex flex-col gap-4 f-body leading-normal font-light">
                        <p>Beyond the mist-covered peaks and sacred landscapes of Subramanya lies a collection of moments — quiet mornings, grand celebrations, soulful meals, and unforgettable escapes.</p>
                        <p>Our journal captures the essence of De Royale Montana — a space where nature, elegance, and emotion come together.</p>
                    </div>

                </div>
                <div className="w-full lg:w-1/2 h-[200px] sm:h-[250px] lg:h-auto relative">
                    <Image src="/images/about/about.webp" alt="Stories" fill className="object-cover object-center" />
                </div>

            </div>
            {/* End of Row 2 */}

        </section>
    );
}