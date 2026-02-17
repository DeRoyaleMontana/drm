import { getColorValue, SvgColorProps } from "@/utils/svgColor";

interface LeftArrowIconProps extends SvgColorProps {
    width?: number | string;
    height?: number | string;
    className?: string;
    bgColor?: string;
    arrowColor?: string;
}

export default function LeftArrowIcon({
    svgColor = "secondary",
    width,
    height,
    className,
    bgColor,
    arrowColor
}: LeftArrowIconProps) {
    const uniqueId = `left-arrow-${Math.random().toString(36).substr(2, 9)}`;
    const finalBgColor = bgColor ? getColorValue(bgColor, "#FFFBF4") : getColorValue(svgColor, "#FFFBF4");
    const finalArrowColor = arrowColor ? getColorValue(arrowColor, "#182B21") : getColorValue("primary", "#182B21");

    const useDefaultSize = !width && !height && !className?.match(/\b(w-|h-)/);
    const sizeClasses = useDefaultSize ? "w-10 h-10 lg:w-12 lg:h-12 2xl:w-14 2xl:h-14 3xl:w-16 3xl:h-16" : "";

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 64 64"
            fill="none"
            className={`${sizeClasses} ${className || ''}`}
        >
            <foreignObject x="-60" y="-60" width="184" height="184">
                <div
                    style={{
                        backdropFilter: 'blur(30px)',
                        clipPath: `url(#${uniqueId}_clip)`,
                        height: '100%',
                        width: '100%'
                    }}
                />
            </foreignObject>
            <g data-figma-bg-blur-radius="60">
                <rect width="64" height="64" rx="32" fill={finalBgColor} />
                <path
                    d="M36 40.0227L28 32L36 23.9773"
                    stroke={finalArrowColor}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id={`${uniqueId}_clip`} transform="translate(60 60)">
                    <rect width="64" height="64" rx="32" />
                </clipPath>
            </defs>
        </svg>
    );
}

