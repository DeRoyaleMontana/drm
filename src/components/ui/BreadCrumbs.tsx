import Divider from "@/components/ui/Divider";

interface BreadCrumbsProps {
  title: string;
  backgroundImage: string;
  overlayOpacity?: number;
  className?: string;
}

export default function BreadCrumbs({
  title,
  backgroundImage,
  overlayOpacity = 60,
  className = "",
}: BreadCrumbsProps) {
  return (
    <div
      className={`relative fbpy fpx bg-cover bg-center ${className}`}
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity / 100 }}
      ></div>
      {/* End of Overlay */}

      {/* Content */}
      <div className="relative flex flex-col mlg:flex-row items-center justify-center gap-4 sm:gap-6">
        <Divider className="hidden mlg:flex mlg:w-full sm:w-[15%] lg:w-[13%]" />
        <h2 className="flex-1 sm:flex-0 text-2xl mlg:text-3xl sm:text-4xl md:text-[45px] xl:text-[55px] 2xl:text-[62px] 3xl:text-[80px] font-display font-medium text-secondary text-center whitespace-nowrap tracking-wide ">
          {title}
        </h2>
        <Divider className="w-[30%] mlg:w-full sm:w-[15%] lg:w-[13%]" />
      </div>
      {/* End of Content */}
    </div>
  );
}

