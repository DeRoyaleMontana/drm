import { SvgColorProps } from "@/utils/svgColor";
import FloralIcon from "../icons/FloralIcon";


export default function Bond({ svgColor = "secondary" }: SvgColorProps) {
    return (
        <div className="flex flex-col items-center gap-4 bg-accent fp font-body text-secondary">
            <FloralIcon svgColor={svgColor} className="w-[40%] h-auto" />
            <h4 className="f-h4 text-center">Your love story deserves a setting as beautiful as your bond.</h4>
            <div className="w-full flex justify-center items-center gap-4 sm:gap-8">
                <div className="min-w-[50px] max-w-[236px] grow h-px bg-secondary"></div>
                <p className="font-body f-body leading-normal text-center shrink">Let De Royale Montana be the beginning of your forever</p>
                <div className="min-w-[50px] max-w-[236px] grow h-px bg-secondary"></div>
            </div>
        </div>
    )
}