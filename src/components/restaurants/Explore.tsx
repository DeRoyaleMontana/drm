import { SvgColorProps } from "@/utils/svgColor";
import FloralIcon from "../icons/FloralIcon";
import Button from "../ui/Button";

export default function Explore({ svgColor = "secondary" }: SvgColorProps) {
    return (
        <div className="flex flex-col items-center gap-4 md:gap-5 xl:gap-7 3xl:gap-8 bg-accent fp font-body text-secondary">
            <FloralIcon svgColor={svgColor} className="w-[40%] h-auto" />

            <div className="w-full flex justify-center items-center gap-4 sm:gap-8 xl:gap-12 3xl:gap-16">
                <div className="w-full shrink h-px bg-secondary"></div>
                <h4 className="text-xl mmd:text-2xl md:text-3xl 2xl:text-4xl 3xl:text-5xl text-center whitespace-nowrap">Explore Events</h4>
                <div className="w-full shrink h-px bg-secondary"></div>
            </div>
            <Button
                buttonBgColor="bg-transparent"
                borderColor="border-secondary"
                text="View All"
                bgColor="bg-secondary"
                textColor="text-primary"
                showIcon={true}
                iconClassName="fill-secondary"
                className="justify-self-center sm:justify-self-end items-center"
            />
        </div>
    )
}