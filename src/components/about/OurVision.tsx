import Image from "next/image";

export default function OurVision() {
    return (
        <section className="flex flex-col gap-10 lg:gap-12 2xl:gap-14 3xl:gap-16 fp bg-primary text-secondary font-light">
            {/* Row 1 */}
            <div className="flex flex-col gap-10 lg:gap-12 3xl:gap-14">
                {/* Inner Row 1 */}
                <div className="flex flex-col md:flex-row gap-10 xl:gap-20 3xl:gap-29">
                    <div className="w-full md:w-[50%] lg:w-[60%] flex flex-col gap-8 3xl:gap-14">
                        <div className="flex flex-col gap-6 3xl:gap-10">
                            <h3 className="f-h2 font-display font-medium tracking-wide ">Our Vision</h3>
                            <div className="h-0.5 w-[200px] bg-accent"></div>
                        </div>

                        <p className="f-body leading-normal font-light text-justify ">
                            To be South India&apos;s most cherished luxury escape, seamlessly blending regal comfort with the untamed beauty of the Ghats — where guests rediscover what it means to truly relax, reconnect, and rejuvenate.
                        </p>
                    </div>
                    <div className="w-full md:w-[50%] lg:w-[40%] h-[223px] md:h-auto  bg-[url('/images/about/our-vision.webp')] bg-cover bg-center "></div>

                </div>
                {/* End of Inner Row 1 */}

                <div className="hidden lg:block h-0.5 w-full bg-accent"></div>

                {/* Inner Row 2 */}
                <div className="flex flex-col-reverse md:flex-row gap-10 xl:gap-20 3xl:gap-29">
                    <div className="w-full md:w-[50%] lg:w-[40%] h-[223px] md:h-auto  bg-[url('/images/about/our-mission.webp')] bg-cover bg-center "></div>
                    <div className="w-full md:w-[50%] lg:w-[60%] flex flex-col items-start md:items-end gap-8 3xl:gap-14 ">
                        <div className="w-full flex flex-col items-end gap-6 3xl:gap-10">
                            <h3 className="f-h2 font-display font-medium tracking-wide">Our Mission</h3>
                            <div className="h-0.5 w-[200px] bg-accent"></div>
                        </div>

                        <p className="f-body leading-normal font-light text-justify">
                            We strive to go beyond service — we create memories, relationships, and experiences that leave a mark. With personalized attention, bespoke offerings, and an ethos of excellence.
                        </p>
                    </div>


                </div>
                {/* End of Inner Row 2 */}
            </div>
            {/* End of Row 1 */}

            {/* Row 2 */}
            <div className="flex flex-col gap-10 items-center">
                {/* Divider */}
                <div className="flex flex-col gap-y-3 w-full sm:w-auto">
                    <span className="w-full sm:w-[400px] h-px bg-accent"></span>
                    <span className="w-full sm:w-[400px] h-1 bg-accent"></span>
                </div>
                {/* End of Divider */}

                <div className="flex flex-col items-center gap-4">
                    <h6 className="f-sm  text-accent uppercase font-semibold">our mission is simple</h6>
                    <h4 className="f-h4 text-center italic font-light">&quot;To make every guest feel like royalty — naturally.&quot;</h4>

                </div>
                <Image className="w-[910px] h-[250px] sm:h-[370px] 2xl:h-[558px] object-cover object-center" src="/images/about/simple.webp" alt="" width={910} height={558} />
            </div>
            {/* End of Row 2 */}
        </section>
    );
}