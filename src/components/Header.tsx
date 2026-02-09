import Image from 'next/image';
import Link from 'next/link';

const menuItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Explore", href: "/explore" },
    { label: "Wedding", href: "#" },
    { label: "Restaurants", href: "#" },
    { label: "Events", href: "#" },
];

export default function Header() {
    return (
        <header className="bg-secondary/10 backdrop-blur-xl absolute top-0 left-0 right-0 z-50 font-body font-normal text-xxs mlg:text-xs sm:text-sm 3xl:text-lg tracking-widest text-ivory border-b-[0.5px] border-secondary uppercase">
            <div className="flex justify-between fpx">

                <div className="flex divide-x-[0.5px] divide-secondary ">
                    {/* Hamburger Menu */}
                    <div className="flex items-center gap-3 sm:gap-4 pr-3 md:pr-7 py-3 sm:py-6 2xl:py-5 3xl:py-6 group cursor-pointer">
                        {/* Hamburger Menu Line */}
                        <div className="flex flex-col items-end gap-1.5 sm:gap-2 3xl:gap-2.5">
                            <span className="w-6 sm:w-8 3xl:w-10 h-px bg-secondary block rounded-full"></span>
                            <span className="w-6 sm:w-8 3xl:w-10 group-hover:w-6 h-px bg-secondary block rounded-full transition-all"></span>
                        </div>
                        {/* End of Hamburger Menu Line */}

                        {/* Menu text */}
                        <Link href="/rooms" className="">Rooms</Link>
                        {/* End of Menu text */}
                    </div>
                    {/* End of Hamburger Menu */}

                    {/* Logo */}
                    <div className="pl-3 md:pl-7 py-3  2xl:py-5 3xl:py-6">
                        {/* <Image src="/images/logo.png" alt="logo" width={163.5} height={75} className="w-[80.3] md:w-[120.3] md:h-[55.25] h-[36.88]" /> */}
                    </div>
                    {/* End of Logo */}
                </div>


                <div className="flex justify-between items-center py-3 2xl:py-5 3xl:py-6 gap-10 3xl:gap-16 uppercase ">
                    <nav className="hidden xl:flex items-center gap-10 2xl:gap-12 3xl:gap-16 mt-3  ">
                        {menuItems.map((item) => (
                            <Link key={item.label} href={item.href} className="leading-none transition-colors flex flex-col gap-2 group ">
                                {item.label}
                                <span className="block w-full h-px bg-secondary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-right group-hover:origin-left"></span>
                            </Link>
                        ))}
                    </nav>
                    <button className="bg-secondary/30 text-secondary px-4 md:px-8 py-2 md:py-3.5 3xl:py-4 rounded-full uppercase">Contact</button>
                </div>

            </div>
        </header>
    );
}
