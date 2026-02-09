import Image from "next/image";
import PeopleIcon from "../icons/PeopleIcon";
import Button from "../ui/Button";

interface Room {
  id: number;
  tagline: string;
  title: string;
  capacity: string;
  description: string;
  image: string;
}

const rooms: Room[] = [
  {
    id: 1,
    tagline: "Secluded comfort, surrounded by nature.",
    title: "Cottage Room",
    capacity: "2 People",
    description: "Our Cottages offer a peaceful stay amidst lush greenery, blending rustic charm with refined comfort. Ideal for couples or families, each cottage is thoughtfully designed with spacious interiors, modern amenities, and calming views — perfect for those seeking privacy, space, and a closer connection to nature.",
    image: "/images/home/suite-room.webp",
  },
  {
    id: 2,
    tagline: "Where timeless elegance meets soulful retreat.",
    title: "Suite Room",
    capacity: "2 People",
    description: "The Royale Suite is a refined blend of classic luxury and modern comfort. With sweeping mountain views, rich furnishings, and a spacious layout, it offers an indulgent escape designed for serenity and style. Perfect for those who seek elegance in every detail.",
    image: "/images/home/suite-room.webp",
  },
  {
    id: 3,
    tagline: "Where timeless elegance meets soulful retreat.",
    title: "Suite Room",
    capacity: "2 People",
    description: "The Royale Suite is a refined blend of classic luxury and modern comfort. With sweeping mountain views, rich furnishings, and a spacious layout, it offers an indulgent escape designed for serenity and style. Perfect for those who seek elegance in every detail.",
    image: "/images/home/suite-room.webp",
  },
  {
    id: 4,
    tagline: "Where timeless elegance meets soulful retreat.",
    title: "Suite Room",
    capacity: "2 People",
    description: "The Royale Suite is a refined blend of classic luxury and modern comfort. With sweeping mountain views, rich furnishings, and a spacious layout, it offers an indulgent escape designed for serenity and style. Perfect for those who seek elegance in every detail.",
    image: "/images/home/suite-room.webp",
  },
  {
    id: 5,
    tagline: "Where timeless elegance meets soulful retreat.",
    title: "Suite Room",
    capacity: "2 People",
    description: "The Royale Suite is a refined blend of classic luxury and modern comfort. With sweeping mountain views, rich furnishings, and a spacious layout, it offers an indulgent escape designed for serenity and style. Perfect for those who seek elegance in every detail.",
    image: "/images/home/suite-room.webp",
  },
  {
    id: 6,
    tagline: "Where timeless elegance meets soulful retreat.",
    title: "Suite Room",
    capacity: "2 People",
    description: "The Royale Suite is a refined blend of classic luxury and modern comfort. With sweeping mountain views, rich furnishings, and a spacious layout, it offers an indulgent escape designed for serenity and style. Perfect for those who seek elegance in every detail.",
    image: "/images/home/suite-room.webp",
  },
];

interface RoomCardProps {
  room: Room;
  index: number;
  svgColor?: string;
}

const RoomCard = ({ room, index, svgColor = "accent" }: RoomCardProps) => {
  const isEven = index % 2 === 0;
  const bgColor = isEven ? "bg-secondary" : "bg-primary";
  const textColor = isEven ? "text-text" : "text-secondary";
  const buttonAlignment = isEven ? "self-start lg:self-end" : "self-start sm:self-end lg:self-start";
  const flexDirection = isEven ? "flex-col-reverse lg:flex-row" : "flex-col lg:flex-row";
  const contentAlignment = isEven ? "sm:items-start" : "sm:items-end";
  const taglineAlignment = isEven ? "text-start" : "text-start sm:text-end";


  const contentSection = (
    <div className={`w-full lg:w-1/2 flex flex-col ${contentAlignment} fp gap-4 mlg:gap-5 lg:gap-6 2xl:gap-9 ${bgColor}`}>
      <h6 className={`text-xxs mlg:text-xs md:text-sm 2xl:text-base 3xl:text-xl text-accent font-body uppercase font-semibold tracking-wide ${taglineAlignment}`}>{room.tagline}</h6>
      <h3 className={`f-h2 font-display ${textColor} font-medium`}>{room.title}</h3>
      <div className="flex justify-start items-center gap-x-3 3xl:gap-x-4 z-10">
        <PeopleIcon svgColor={svgColor} className="w-4 xl:w-5 3xl:w-6 h-4 xl:h-5 3xl:h-6" />
        <h6 className="text-xs mmd:text-sm xl:text-base 3xl:text-xl text-accent font-mona uppercase font-semibold">{room.capacity}</h6>
      </div>
      <p className={`f-body leading-normal ${textColor} font-body sm:text-justify`}>{room.description}</p>
      <Button
        buttonBgColor="bg-transparent"
        borderColor="border-accent"
        text="All Rooms"
        bgColor="bg-accent"
        textColor="text-secondary"
        showIcon={true}
        iconClassName="fill-accent"
        className={`${buttonAlignment} mt-2 sm:mt-0`}

      />
    </div>
  );

  const imageSection = (
    <div className="relative w-full lg:w-1/2 h-[250px] mlg:h-[300px] md:h-[430px] lg:h-auto overflow-hidden group cursor-pointer">
      <Image
        src={room.image}
        alt={room.title}
        fill
        className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority={index < 2} // Prioritize loading for the first couple of items
      />
    </div>
  );

  return (
    <div className={`flex ${flexDirection}`}>
      {isEven ? (
        <>
          {contentSection}
          {imageSection}
        </>
      ) : (
        <>
          {imageSection}
          {contentSection}
        </>
      )}
    </div>
  );
};

export default function RoomsAndSuites() {
  const svgColor = "accent";

  return (
    <div className="flex flex-col fpt lg:pt-0">
      {rooms.map((room, index) => (
        <RoomCard key={room.id} room={room} index={index} svgColor={svgColor} />
      ))}
    </div>
  );
}