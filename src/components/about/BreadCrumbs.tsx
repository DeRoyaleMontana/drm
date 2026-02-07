export default function BreadCrumbs() {

    const Divider = () => {
        return (
            <div className="w-full lg:w-[15%] hidden sm:flex flex-col  gap-1 sm:gap-2 3xl:gap-3 ">
                <div className=" h-0.5 bg-accent"></div>
                <div className=" h-1 bg-accent"></div>
            </div>
        );
    };
    return (
        <div className="relative fpx fbpy bg-[url('/images/about/breadcrumb.webp')] bg-cover bg-center text-secondary font-medium font-display text-xl mlg:text-2xl sm:text-3xl md:text-4xl lg:text-[45px] 2xl:text-5xl 3xl:text-6xl leading-tight sm:leading-none tracking-wide">
            {/* overlay */}
            <div className="absolute inset-0 bg-black opacity-60"></div>
            {/* End of overlay */}

            {/* Content */}
            <div className="relative flex flex-col items-center justify-center gap-1 mmd:gap-2 md:gap-4 text-center">
                <h2>In the heart of the Western Ghats,</h2>
                <div className="w-full flex items-center justify-center sm:gap-10 lg:gap-15 3xl:gap-20">

                    <Divider />

                    <h2 className="mlg:whitespace-nowrap">We didn’t just build a retreat</h2>

                    <Divider />

                </div>
                <h2>We carved out a sanctuary of timeless elegance.</h2>
            </div>
            {/* End of Content */}


        </div>
    );
}