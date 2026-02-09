interface DividerProps {
    className?: string;
    dividerColor?: string;
}

export default function Divider({ className, dividerColor = "bg-accent" }: DividerProps) {
    return (
        <div className={`flex flex-col gap-1.5 sm:gap-2 3xl:gap-3 ${className}`}>
            <div className={`h-px ${dividerColor}`}></div>
            <div className={`h-1 ${dividerColor}`}></div>
        </div>
    );
}