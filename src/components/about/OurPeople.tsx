import FloralIcon2 from "@/components/icons/FloralIcon2";

export default function OurPeople() {
    return (
        <div className="flex flex-col items-center gap-6 md:gap-8 3xl:gap-10 fp ">
            {/* Row 1 */}
            <div className="w-full flex flex-col items-center gap-6 md:gap-8 3xl:gap-10">
                <h3 className="f-h2 text-accent font-medium font-display leading-tight -tracking-1">Our People</h3>
                {/* Divider */}
                <div className="w-full flex flex-col items-center gap-y-3">
                    <span className="w-[80%] sm:w-[400px] h-px bg-accent block"></span>
                    <span className="w-[80%] sm:w-[400px] h-1 bg-accent block"></span>
                </div>
            </div>
            {/* End of Row 1 */}

            {/* Row 2 */}
            <div className="flex flex-col items-center gap-6 md:gap-8 3xl:gap-10 font-body">
                <h4 className="f-h4 text-text font-light italic text-center">“ Hospitality begins with heart. ” </h4>
                <p className="f-body leading-normal lg:max-w-3xl 2xl:max-w-4xl 3xl:max-w-5xl  font-light text-center">At De Royale Montana, our team is not just trained — they are cultivated. Every member embodies the spirit of refined hospitality — warm, poised, and always present. Whether it’s a thoughtful gesture or an unspoken need met, our people are the soul of our promise.</p>
            </div>
            {/* End of Row 2 */}

            {/* Row 3 */}
            <div className="flex flex-col items-center gap-6 md:gap-8 3xl:gap-10 font-body">
                <FloralIcon2 svgColor="accent" />
                <h4 className="f-h4 text-center text-text font-light">De Royale Montana is more than a destination. It’s a retreat for those who seek the rare and the real.</h4>
                <h6 className="f-sm text-accent text-center uppercase font-semibold">Welcome to your sanctuary — where luxury breathes, and nature listens.</h6>
            </div>
            {/* End of Row 3 */}


        </div>
    );
}