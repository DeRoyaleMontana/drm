"use client";

import Button from "../ui/Button";
import Carousel from "@/components/ui/Carousel";

export default function Extraordinary() {
  // Card component for temple/place cards
  const Card = ({
    title,
    bgImage = "/images/fine-dining.png",
  }: {
    title: string;
    bgImage?: string;
  }) => (
    <div
      className="relative flex flex-col justify-end items-start h-[360px] md:h-[420px] xl:h-[500px] 3xl:h-[600px] p-5 md:p-9 bg-cover bg-center shrink-0 w-full group hover:cursor-pointer overflow-hidden"
    >

      <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out group-hover:scale-110" style={{ backgroundImage: `url('${bgImage}')` }}></div>
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-black"></div>
      {/* End of Gradient overlay */}

      {/* Content */}
      <div className="relative w-full h-full flex items-end justify-start">
        <h4 className="f-h4 font-body text-ivory leading-relaxed  pl-5 md:pl:8 border-l-4 border-accent absolute bottom-3 left-10 mlg:left-12 mlg:bottom-5 sm:bottom-3 md:left-10 md:bottom-0 2xl:left-12 2xl:bottom-5 3xl:left-17 origin-bottom-left transform -rotate-90 whitespace-nowrap">
          {title}
        </h4>
      </div>
    </div>
  );

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 grid-rows-repeat-[auto,2] gap-y-10 sm:gap-y-16 gap-x-0 items-center fp bg-primary">

      <div className="flex flex-col gap-y-2 order-1">
        <h4 className="f-body font-body text-accent">What Makes Your Stay</h4>
        <h2 className="f-h2 font-display tracking-wider text-ivory leading-none">Extraordinary</h2>
      </div>

      <Button
        buttonBgColor="bg-primary"
        borderColor="border-secondary"
        text="View All"
        bgColor="bg-secondary"
        textColor="text-primary"
        showIcon={true}
        iconClassName="fill-secondary"
        className="justify-self-center sm:justify-self-end items-center order-3 sm:order-2"
      />


      <div className="w-full col-span-1 sm:col-span-2 order-2 sm:order-3">
        <Carousel
          showNavigation={false}
          showPagination={false}
          autoplay={true}
          autoplayDelay={3000}
          loop={true}
          speed={0.8}
          gap={20}
          slidesPerView={{
            mobile: 1.2,
            small: 2,
            tablet: 2,
            desktop: 3,
          }}
        >
          <Card title="Bachanayaka Temple" bgImage="/images/home/bachanayaka-temple.webp" />
          <Card title="Kukke Subramanya Temple" bgImage="/images/home/kukke-subbramanya.webp" />
          <Card title="Patla Betta" bgImage="/images/home/patla-betta.webp" />
        </Carousel>
      </div>
    </div>
  );
}