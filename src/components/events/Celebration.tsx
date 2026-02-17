import { QuoteIcon } from "../icons";
import { SvgColorProps } from "@/utils/svgColor";
import Image from "next/image";

interface CelebrationProps extends SvgColorProps { }

export default function Celebration({ svgColor = "primary" }: CelebrationProps) {
    return (
        <section className="flex flex-col fp gap-5 sm:gap-8 lg:gap-12 xl:gap-15">
            {/* First Row */}
            <div className="flex justify-center items-center gap-2 mlg:gap-3 sm:gap-5 xl:gap-10 2xl:gap-15">
                <QuoteIcon svgColor={svgColor} className="self-start md:ml-20 w-[16%] mlg:w-[12%] h-auto sm:w-[8%] md:w-[10%] lg:w-[8%] xl:w-[6%] 3xl:w-[5%]" />
                <h3 className=" text-sm mmd:text-base sm:text-lg md:text-2xl lg:text-3xl 2xl:text-4xl 3xl:text-5xl text-accent text-center  italic font-light leading-normal">Where every gathering becomes a timeless celebration.</h3>
            </div>
            {/* End of First Row */}

            {/* Second Row */}
            <div className="flex flex-col-reverse lg:flex-row gap-5 sm:gap-8 2xl:gap-12 3xl:gap-15">
                <div className="w-full lg:w-[50%] 3xl:w-[55%] flex items-center  ">
                    <p className="f-body leading-normal text-justify">Tucked away in the breathtaking landscapes of Subramanya, De Royale Montana offers more than just a venue — it offers a canvas for your most cherished moments. Whether it's an intimate celebration, a sophisticated family reunion, or a curated corporate retreat, our property blends understated luxury with natural splendor to create experiences that linger in memory.</p>
                </div>
                <div className=" w-full lg:w-[50%] 3xl:w-[45%] bg-linear-to-r from-transparent to-accent p-0.5">
                    <div className=" bg-secondary w-full h-full p-3 md:p-8 3xl:p-10">
                        <div className="relative w-full h-[150px] sm:h-[250px]">
                            <Image src="/images/about/about.webp" alt="Celebration" fill className="object-cover object-center" sizes="(max-width: 1024px) 100vw, 40vw" />
                        </div>
                    </div>

                </div>
            </div>
            {/* End of Second Row */}
        </section>
    );
}