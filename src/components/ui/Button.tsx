
interface ButtonProps {
    text: string;
    bgColor?: string;
    textColor?: string;
    buttonBgColor?: string;
    borderColor?: string;
    showIcon?: boolean;
    iconAlt?: string;
    iconClassName?: string;
    className?: string;
    onClick?: () => void;
}
export default function Button({
    text,
    bgColor,
    textColor,
    buttonBgColor,
    borderColor,
    showIcon,
    iconClassName,
    className,
    onClick
}: ButtonProps) {
    return (
        <button
            className={` relative flex items-center  gap-3 xl:gap-3 3xl:gap-4 ${buttonBgColor} border-2 ${borderColor} rounded-full group ${className}`}
            onClick={onClick}
        >
            {/* <div className="absolute inset-0 bg-secondary opacity-0 rounded-full group-hover:opacity-100 transition-all duration-300 will-change-transform z-0">

      </div> */}
            <div className={`relative text-xxs mlg:text-xs xl:text-sm 3xl:text-lg uppercase  ${bgColor} ${textColor} rounded-full px-8 2xl:px-9 3xl:px-11 py-3.5 2xl:py-4 3xl:py-5 z-10`}>

                <div className="relative overflow-hidden">
                    <div className="transform-3d group-hover:transform-[translateY(-100%)] transition-all duration-300 ease-in-out  z-10">{text}</div>
                    <div className="absolute top-full group-hover:transform-[translateY(-100%)] transition-all duration-300 ease-in-out  z-10 ">{text}</div>
                </div>

            </div>
            {showIcon && (
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`w-3 h-3 xl:w-3 xl:h-3 2xl:w-3.5 2xl:h-3.5 3xl:w-4.5 3xl:h-4.5 mr-4 xl:mr-5 2xl:mr-5 3xl:mr-7 group-hover:rotate-45 transition-all duration-300 z-10 ${iconClassName}`}
                >
                    <path
                        d="M14.0002 1.84254C14.0002 1.29026 13.5525 0.842541 13.0002 0.842541L4.00023 0.842542C3.44795 0.842542 3.00023 1.29026 3.00023 1.84254C3.00023 2.39483 3.44795 2.84254 4.00023 2.84254L12.0002 2.84254L12.0002 10.8425C12.0002 11.3948 12.4479 11.8425 13.0002 11.8425C13.5525 11.8425 14.0002 11.3948 14.0002 10.8425L14.0002 1.84254ZM1.68652 13.1562L2.39363 13.8634L13.7073 2.54965L13.0002 1.84254L12.2931 1.13543L0.979417 12.4491L1.68652 13.1562Z"

                    />
                </svg>
            )}
        </button>
    )
}