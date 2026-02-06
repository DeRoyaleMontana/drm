import { getColorValue, SvgColorProps } from "@/utils/svgColor";

interface ResortIconProps extends SvgColorProps {
    width?: number | string;
    height?: number | string;
    className?: string;
}

export default function ResortIcon({ 
    svgColor = "accent", 
    width = 72, 
    height = 72,
    className 
}: ResortIconProps) {
    const strokeColor = getColorValue(svgColor, "#AF8D57");
    
    return (
        <svg 
            width={width} 
            height={height} 
            viewBox="0 0 72 72" 
            fill="none"
            stroke={strokeColor}
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M10.146 23.4973H5.60034V32.3047H10.146V23.4973Z" />
            <path d="M10.146 36.8528H5.60034V45.6602H10.146V36.8528Z" />
            <path d="M10.146 57.5911H5.60034V66.3984H10.146V57.5911Z" />
            <mask id="mask0_resort" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="72" height="72">
                <path d="M0 0H72V72H0V0Z" fill="white"/>
            </mask>
            <g mask="url(#mask0_resort)">
                <path d="M57.3074 54.7509V70.9453H14.6924V54.7509" />
            </g>
            <path d="M57.3074 5.60219V50.207" />
            <path d="M14.6925 50.207V5.60219" />
            <mask id="mask1_resort" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="72" height="72">
                <path d="M0 0H72V72H0V0Z" fill="white"/>
            </mask>
            <g mask="url(#mask1_resort)">
                <path d="M70.9452 26.2344V70.9453H57.308" />
                <path d="M57.3081 15.5443H70.9454V21.3047" />
                <path d="M1.05457 26.2344V70.9453H14.6918" />
                <path d="M14.6918 15.5443H1.05457V21.3047" />
            </g>
            <path d="M19.2377 10.1458H23.7834V18.9531H19.2377V10.1458Z" />
            <path d="M28.8973 10.1458H33.443V18.9531H28.8973V10.1458Z" />
            <path d="M38.557 10.1458H43.1027V18.9531H38.557V10.1458Z" />
            <path d="M48.2167 10.1458H52.7624V18.9531H48.2167V10.1458Z" />
            <path d="M19.2377 23.4973H23.7834V32.3047H19.2377V23.4973Z" />
            <path d="M28.8973 23.4973H33.443V32.3047H28.8973V23.4973Z" />
            <path d="M38.557 23.4973H43.1027V32.3047H38.557V23.4973Z" />
            <path d="M48.2167 23.4973H52.7624V32.3047H48.2167V23.4973Z" />
            <path d="M19.2377 36.8528H23.7834V45.6602H19.2377V36.8528Z" />
            <path d="M28.8973 36.8528H33.443V45.6602H28.8973V36.8528Z" />
            <path d="M38.557 36.8528H43.1027V45.6602H38.557V36.8528Z" />
            <path d="M48.2167 36.8528H52.7624V45.6602H48.2167V36.8528Z" />
            <path d="M19.2377 59.2958H25.7721V66.3984H19.2377V59.2958Z" />
            <path d="M52.7623 59.2958H46.2278V66.3984H52.7623V59.2958Z" />
            <mask id="mask2_resort" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="72" height="72">
                <path d="M0 0H72V72H0V0Z" fill="white"/>
            </mask>
            <g mask="url(#mask2_resort)">
                <path d="M30.3177 59.2969H36V70.9453H30.3177V59.2969Z" />
                <path d="M41.6821 59.2969H36V70.9453H41.6821V59.2969Z" />
            </g>
            <path d="M13.2714 50.2043H58.7287V54.75H13.2714V50.2043Z" />
            <mask id="mask3_resort" style={{maskType: "luminance"}} maskUnits="userSpaceOnUse" x="0" y="0" width="72" height="72">
                <path d="M0 0H72V72H0V0Z" fill="white"/>
            </mask>
            <g mask="url(#mask3_resort)">
                <path d="M48.2517 5.60156H13.2714V1.05586H58.7287V5.60156H53.1814" />
            </g>
            <path d="M61.8539 23.4973H66.3996V32.3047H61.8539V23.4973Z" />
            <path d="M61.8539 36.8528H66.3996V45.6602H61.8539V36.8528Z" />
            <path d="M61.8539 57.5911H66.3996V66.3984H61.8539V57.5911Z" />
        </svg>
    );
}
