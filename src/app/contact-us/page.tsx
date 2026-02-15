"use client"
import { FloralIcon2 } from "@/components/icons";
import Image from "next/image";

const contact = [
    {
        title: "Address",
        info: "De Royale Montana Yennekal Village, Kukke SubramanyaKadaba Taluk, Karnataka – 574238",
    },
    {
        title: "Reservations & Enquiries",
        info: "montanareservations@deroyale.in",
    },
    {
        title: "Timings",
        info: "8:00 AM – 10:00 PM [ All Days ]",
    }
    ,
    {
        title: "Call Us",
        info: "+91 6364-462-511 ",
        extraInfo: "+91 6364-462-511"
    }
];
export default function ContactUs({ svgColor }: { svgColor: string }) {
    return (
        <section className="flex flex-col xl:flex-row ">
            {/* First Column */}
            <div className="w-full xl:w-1/2 relative p-5 mlg:p-8 sm:p-10 md:p-12 lg:p-15 3xl:p-20">

                <Image
                    src="/images/home/deluxe-room.webp"
                    alt="Dining Experience"
                    fill
                    className="object-cover object-center z-0"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
                />
                <div className="absolute inset-0 bg-linear-to-t from-black to-black/40 z-10"></div>

                <div className="relative h-full w-full z-20 flex flex-col gap-8 md:gap-15 border border-accent justify-center p-5 mlg:p-8 sm:p-10 md:p-12 lg:p-15 3xl:p-20">
                    <h2 className="f-h2 font-display text-secondary">Reach Us Directly</h2>
                    <div className="flex flex-col gap-5 md:gap-y-9">
                        {contact.map((item, index) => (
                            <div key={index} className="flex flex-col gap-y-4 text-xxs mmd:text-xs sm:text-sm md:text-base 3xl:text-xl font-semibold ">
                                <div className="border-l-4 border-accent pl-4 text-accent uppercase">{item.title}</div>
                                <div className="text-ivory leading-relaxed  uppercase pl-4">{item.info}</div>
                                {item.extraInfo && <div className="text-ivory uppercase pl-4">{item.extraInfo}</div>}
                            </div>
                        ))}
                    </div>
                </div>


            </div>
            {/* End of First Column */}

            {/* Second Column */}
            <div className="w-full xl:w-1/2 bg-secondary p-5 lg:p-15 3xl:p-20 flex flex-col justify-center items-center gap-10 lg:gap-15 3xl:gap-20 font-body">


                <div className="flex flex-col gap-y-4 sm:gap-y-8">
                    {/* Row 1 */}
                    <div className="flex flex-col items-center gap-4 ">
                        <FloralIcon2 svgColor={svgColor} />
                        <h4 className="f-h4 text-accent font-light text-center">We’re here to help you plan your perfect stay.</h4>

                    </div>
                    {/* End of Row 1 */}

                    {/* Row 2 */}
                    <div className="w-full flex flex-col items-center text-center gap-4  text-text f-body font-light leading-normal">

                        <p>At De Royale Montana, we believe in personal connection and seamless service. Whether you're looking to book a room, plan an event, host a wedding, or simply ask a question — our team is always just a message or call away.</p>
                        <p>Let us assist you in making your experience smooth, special, and tailored to your needs.</p>
                    </div>
                    {/* End of Row 2 */}
                </div>

                <form className="w-full grid grid-cols-2 grid-rows-auto gap-6 sm:gap-10 f-sm font-body focus:ring-0 focus:outline-none" onSubmit={(e) => e.preventDefault()}>

                    <input type="text" required placeholder="First Name" className="w-full pl-4 pb-4 bg-transparent border-b-[1.5px] border-text text-text  placeholder:text-text/50 placeholder:uppercase col-span-2 sm:col-span-1 row-span-1" />
                    <input type="text" required placeholder="Email" className="w-full pl-4 pb-4 bg-transparent border-b-[1.5px] border-text text-text  placeholder:text-text/50 placeholder:uppercase col-span-2 sm:col-span-1 row-span-1" />
                    <div className="flex flex-col gap-y-4 col-span-2 sm:col-span-1 row-span-1">
                        <label className="text-accent uppercase" htmlFor="arrival">Arrival </label>
                        <input type="date" required placeholder="Arrival Time" className="w-full pl-4 pb-4 bg-transparent border-b-[1.5px] border-text text-text  [&::-webkit-datetime-edit]:text-text/50 [&::-webkit-datetime-edit]:uppercase " />
                    </div>
                    <div className="flex flex-col gap-y-4 col-span-2 sm:col-span-1 row-span-1">
                        <label className="text-accent uppercase" htmlFor="departure">Departure </label>
                        <input type="date" required placeholder="Departure " className="w-full pl-4 pb-4 bg-transparent border-b-[1.5px] border-text text-text  [&::-webkit-datetime-edit]:text-text/50 [&::-webkit-datetime-edit]:uppercase" />
                    </div>

                    <button className="bg-accent text-secondary  px-6 py-3  uppercase col-span-2">Book Now</button>
                </form>

            </div>
            {/* End of Second Column */}

        </section>
    );
}