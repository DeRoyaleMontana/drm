"use client";

import ScrollZoomImage from "@/components/animations/ScrollZoomImage";

const data = [
  {
    image: '/images/home/dining.webp',
    title: 'Dining',
    description: 'Savor a curated culinary experience rooted in tradition and taste. At DRM, every meal is a celebration — from handcrafted local delicacies to international favorites, all served with a view that makes every bite memorable.',
  },
  {
    image: '/images/home/bar.webp',
    title: 'Bar',
    description: 'Raise a glass to elegance at our intimate bar. Whether you&apos;re sipping on classic cocktails or exploring handcrafted blends, our rooftop lounge offers the perfect setting to unwind under the stars.',
  },
];

export default function Dining() {
  return (
    <div className="grid grid-cols-1 grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 items-center lg:items-start justify-items-center gap-10 sm:gap-16 lg:gap-12 xl:gap-16 2xl:gap-32 3xl:gap-48  fp bg-primary">
      {data.map((diningItem, index) => (

        <ScrollZoomImage
          key={index}
          zoomScale={1.3}
          className={`w-full h-auto mlg:h-[400px] sm:w-4/5 lg:w-full sm:h-[490px] md:h-[600px] lg:h-[590px] xl:h-[600px] 3xl:h-[800px] relative p-5 mlg:p-6 sm:p-8 md:p-10 3xl:p-12 rounded-t-full overflow-hidden group hover:cursor-pointer ${index === 1 ? 'lg:mt-16 xl:mt-32' : ''}`}
        >
          {/* Background image that will zoom */}
          <div className="absolute inset-0 bg-sky-100  bg-cover bg-center rounded-t-full" style={{ backgroundImage: `url('${diningItem.image}')` }}>
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black rounded-t-full"></div>
            {/* End of Gradient overlay */}
          </div>
          {/* Content - positioned above the zoomed background */}
          <div className="border border-transparent group-hover:border-accent w-full h-full p-5 mlg:p-6 sm:p-8 md:p-10 3xl:p-12 rounded-t-full z-10 relative transition-all ">
            <div className="flex flex-col items-center justify-end gap-y-6 border border-transparent group-hover:border-accent w-full h-full p-5  md:p-10 3xl:p-12 rounded-t-full transition-all  delay-100">
              <h3 className="text-lg mmd:text-xl mlg:text-2xl sm:text-3xl md:text-4xl xl:text-[45px] 3xl:text-[60px] text-ivory font-display tracking-wider z-10 ">{diningItem.title}</h3>
              <span className="h-1 w-20 bg-accent block"></span>
              <p className="text-xs mmd:text-sm md:text-base 3xl:text-xl font-body text-ivory text-center">{diningItem.description}</p>
            </div>
          </div>
          {/* End of Content */}
        </ScrollZoomImage>
      ))}
    </div>
  );
}