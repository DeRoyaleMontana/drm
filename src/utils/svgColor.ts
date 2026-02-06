export interface SvgColorProps {
    svgColor?: string;
}

/**
 * Maps color names to CSS variables and handles color values
 * @param color - Color name (primary, accent, secondary, text) or any valid color value
 * @param defaultColor - Default color to return if color is not provided
 * @returns CSS variable, hex color, or the original color value
 */
export const getColorValue = (color?: string, defaultColor?: string): string => {
    if (!color) return defaultColor || "#FFFBF4";

    // Map color names to CSS variables
    const colorMap: Record<string, string> = {
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        secondary: "var(--color-secondary)",
        text: "var(--color-text)",
    };

    // Return mapped color or the original value (hex, CSS var, etc.)
    return colorMap[color.toLowerCase()] || color;
};

