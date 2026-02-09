import { FloralIcon2 } from "@/components/icons";
import { SvgColorProps } from "@/utils/svgColor";
import Divider from "../ui/Divider";

interface BeginProps extends SvgColorProps { }

export default function Begin({ svgColor = "accent" }: BeginProps) {
    return (
        <div className="flex flex-col items-center gap-6 mlg:gap-9 fp font-body">
            {/* Row 1 */}
            <div className="flex flex-col items-center gap-4 ">
                <FloralIcon2 svgColor={svgColor} />
                <h4 className="f-h4 text-accent font-light text-center">Begin your forever where the hills echo with joy, and every moment feels like a dream.</h4>
                <Divider className="w-full sm:w-[400px]" />
            </div>
            {/* End of Row 1 */}

            {/* Row 2 */}
            <div className="w-full lg:w-11/12 flex flex-col items-center text-center gap-4 2xl:gap-6 3xl:gap-8  text-text f-body font-body leading-normal">

                <p>A wedding is more than a celebration — it's a memory in the making, a story that deserves a setting as timeless as your love. At De Royale Montana, we offer a destination that balances natural grandeur with refined luxury, creating an atmosphere that is as intimate as it is breathtaking.</p>
                <p>With both elegant indoor spaces and sweeping outdoor landscapes, your wedding here is not just an event — it’s an experience woven into nature, comfort, and grace.</p>
            </div>
            {/* End of Row 2 */}
        </div>
    )
}