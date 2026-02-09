import Image from "next/image";
import { QuoteIcon } from "@/components/icons";
import { SvgColorProps } from "@/utils/svgColor";

interface SecondProps extends SvgColorProps { }

export default function AboutUs({ svgColor = "primary" }: SecondProps) {
    return (
        <section className="flex flex-col items-center gap-8 lg:gap-12 3xl:gap-16 fp font-body ">
            {/* Row 1 */}
            <div className="lg:max-w-5xl flex flex-col items-center justify-center gap-4 ">
                <h6 className="f-sm text-accent uppercase  font-semibold">About us</h6>
                <QuoteIcon svgColor={svgColor} className="self-start md:ml-20 w-[15%] h-auto sm:w-[11%]  md:w-[10%] lg:w-[8%] 2xl:w-[7%]" />
                <h4 className="md:mt-2 f-h4 text-accent text-center  italic font-light">Luxury is not a thing, it&apos;s a feeling — and we make sure you feel it in every moment.</h4>

            </div>
            {/* End of Row 1 */}

            {/* Row 2 */}
            <div className=" flex flex-col lg:flex-row gap-8 lg:gap-12 3xl:gap-16 ">
                <p className="w-full lg:w-[45%] flex flex-col gap-4 2xl:gap-6 3xl:gap-8 f-body font-light text-justify leading-normal">
                    <div>Welcome to De Royale Montana, where sophistication meets serenity, and every stay tells a story. Tucked away in the sacred landscapes of Subramanya, our estate is not merely a destination — it is an experience. Inspired by the untouched beauty of nature and driven by a commitment to excellence, we offer a rare blend of curated luxury, heartfelt hospitality, and tranquil design.</div>
                    <div>Whether you seek a restful escape or a celebratory gathering, De Royale Montana redefines the idea of leisure — with refined interiors, personalized service, and views that take your breath away.</div>
                </p>
                <div className="relative w-full lg:w-[55%] h-[250px] sm:h-[390px] lg:h-auto">
                    <Image
                        src="/images/about/about.webp"
                        alt="Restful escape"
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 1024px) 100vw, 55vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 z-10"></div>
                </div>
            </div>
            {/* End of Row 2 */}
        </section>
    );
}