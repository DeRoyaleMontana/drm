import Divider from "../ui/Divider";
import Image from "next/image";



export default function Why() {
    return (
        <section className="flex flex-col fpx lg:fpy gap-10 lg:gap-15 xl:gap-20">
            {/* Row 1 */}
            <div className=" flex flex-col items-center gap-4">

                <h3 className="text-2xl mlg:text-3xl sm:text-4xl xl:text-[45px] 2xl:text-[50px] 3xl:text-6xl text-accent font-medium font-display leading-tight -tracking-1 capitalize">
                    Why our stories matters
                </h3>

                <Divider className="w-[80%] mlg:w-[70%] sm:w-[400px]" />

            </div>
            {/* End of Row 1 */}

            {/* Row 2 */}
            <div className="w-full flex flex-col lg:flex-row gap-5 sm:gap-10 2xl:gap-15 3xl:gap-20">
                <div className="w-full h-[200px] sm:h-[250px] lg:h-auto lg:w-[40%] relative">
                    <Image src="/images/about/about.webp" alt="Stories" fill className="object-cover object-center" />
                </div>
                <div className="w-full lg:w-[60%] flex flex-col gap-4 sm:gap-6 lg:gap-9">

                    <div className="flex flex-col gap-4 lg:gap-6 xl:gap-9 f-body leading-normal font-light">
                        <p>At De Royale Montana, we believe experiences deserve to be remembered — not just lived.</p>
                        <p>Our journal is an extension of our hospitality. It reflects the philosophy that luxury is not excess, but intention.</p>
                    </div>
                    <h4 className="text-accent italic text-sm mmd:text-base sm:text-xl 2xl:text-2xl 3xl:text-3xl leading-tight font-light">Every article is an invitation — to slow down, to celebrate deeply, to savor fully.</h4>

                </div>


            </div>
            {/* End of Row 2 */}

        </section>
    )
}
