import { getColorValue, SvgColorProps } from "@/utils/svgColor";

interface RightArrowIconProps extends SvgColorProps {
    width?: number | string;
    height?: number | string;
    className?: string;
    bgColor?: string;
    arrowColor?: string;
}

export default function RightArrowIcon({ 
    svgColor = "secondary",
    width, 
    height,
    className,
    bgColor,
    arrowColor
}: RightArrowIconProps) {
    const uniqueId = `right-arrow-${Math.random().toString(36).substr(2, 9)}`;
    const finalBgColor = bgColor ? getColorValue(bgColor, "#FFFBF4") : getColorValue(svgColor, "#FFFBF4");
    const finalArrowColor = arrowColor ? getColorValue(arrowColor, "#182B21") : getColorValue("primary", "#182B21");
    
    return (
        <svg 
            width={width} 
            height={height} 
            viewBox="0 0 64 64" 
            fill="none"
            className={`w-16 h-16 ${className || ''}`}
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
                <rect 
                    x="64" 
                    y="64" 
                    width="64" 
                    height="64" 
                    rx="32" 
                    transform="rotate(-180 64 64)" 
                    fill={finalBgColor} 
                />
                <path 
                    d="M28 23.9773L36 32L28 40.0227" 
                    stroke={finalArrowColor} 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                />
            </g>
            <defs>
                <clipPath id={`${uniqueId}_clip`} transform="translate(60 60)">
                    <rect 
                        x="64" 
                        y="64" 
                        width="64" 
                        height="64" 
                        rx="32" 
                        transform="rotate(-180 64 64)" 
                    />
                </clipPath>
            </defs>
        </svg>
    );
}

