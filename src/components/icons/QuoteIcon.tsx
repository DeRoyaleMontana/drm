import { getColorValue, SvgColorProps } from "@/utils/svgColor";

interface QuoteIconProps extends SvgColorProps {
    width?: number | string;
    height?: number | string;
    className?: string;
}

export default function QuoteIcon({
    svgColor = "primary",
    width = 99,
    height = 64,
    className
}: QuoteIconProps) {
    const fillColor = getColorValue(svgColor, "#182B21");

    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 99 64"
            fill="none"
            className={className}
        >
            <path d="M55.2335 18.1208C56.9749 7.83437 65.9268 0 76.7103 0C88.7418 0 98.4951 9.75201 98.4951 21.7818C98.4951 33.8115 88.7416 43.5635 76.7103 43.5635C75.3554 43.5635 74.0299 43.4389 72.7435 43.2022C77.6709 52.6345 86.7513 57.6256 86.7513 57.6256V64C48.3116 49.6191 55.232 18.1275 55.2335 18.1208Z" fill={fillColor} />
            <path d="M0.485938 18.1208C2.22734 7.83437 11.1793 0 21.9628 0C33.9942 0 43.7476 9.75201 43.7476 21.7818C43.7476 33.8115 33.9942 43.5635 21.9628 43.5635C20.608 43.5635 19.2823 43.4389 17.9959 43.2022C22.9234 52.6345 32.0037 57.6256 32.0037 57.6256V64C-6.43599 49.6191 0.484454 18.1275 0.485938 18.1208Z" fill={fillColor} />
        </svg>
    );
}

