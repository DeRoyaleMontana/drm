import { SvgColorProps } from "@/utils/svgColor";
import { WeddingIcon } from "@/components/icons";
import Divider from "../ui/Divider";

export default function Craft({ svgColor = "accent" }: SvgColorProps) {
    return (
        <div className="flex flex-col items-center gap-4 mlg:gap-6 fp font-body">
            {/* Row 1 */}
            <div className="w-full flex flex-col  items-center gap-4">
                <WeddingIcon svgColor={svgColor} />
                <h4 className="f-h4 text-accent font-light italic">Crafting Your Dream Wedding</h4>
                <Divider className="w-full lg:w-[600px] xl:w-[800px]" />
                {/* End of Divider */}
            </div>
            {/* End of Row 1 */}

            {/* Row 2 */}
            <div className="w-full lg:w-11/12 flex flex-col items-center text-center gap-9 f-body leading-normal font-light text-text">

                <p>From the first welcome to the final farewell, our team is devoted to bringing your vision to life. With luxurious guest accommodations, gourmet in-house catering, decor tailored to your theme, and seamless event coordination, we offer a full-service wedding experience — elegant, effortless, and unforgettable.</p>

            </div>
            {/* End of Row 2 */}
        </div>
    );
}