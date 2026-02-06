
import ScrollZoomImage from "@/components/animations/ScrollZoomImage";
import { FloralIcon2 } from "@/components/icons";
import { SvgColorProps } from "@/utils/svgColor";
import Button from "./Button";

interface CallToActionProps extends SvgColorProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  backgroundImage: string;
  zoomScale?: number;
  buttonBgColor?: string;
  buttonBorderColor?: string;
  buttonTextColor?: string;
  buttonIconColor?: string;
  showIcon?: boolean;
  dividerColor?: string;
  subtitleColor?: string;
  className?: string;
}

export default function CallToAction({
  title,
  subtitle = "and enjoy",
  buttonText,
  backgroundImage,
  zoomScale = 1.3,
  svgColor = "accent",
  buttonBgColor = "bg-accent",
  buttonBorderColor = "border-accent",
  buttonTextColor = "text-secondary",
  buttonIconColor = "fill-accent",
  showIcon = true,
  dividerColor = "bg-accent",
  subtitleColor = "text-accent",
  className = "",
}: CallToActionProps) {
  return (
    <div className={`flex flex-col w-full gap-12 3xl:gap-20 items-center fp bg-secondary ${className}`}>
      <div className="w-full grid grid-cols-1 grid-rows-[repeat(3,auto)] lg:grid-cols-3 lg:grid-rows-1 gap-8 lg:gap-4">
        {/* Column 1 */}
        <div className="w-full  flex flex-col gap-y-4 lg:gap-y-8 justify-center items-center lg:items-start">
          <h2
            className="f-h2 font-display tracking-wider leading-tight -tracking-1"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className={`f-body font-body ${subtitleColor} font-medium tracking-widest  uppercase`}>{subtitle}</p>
        </div>
        {/* End of Column 1 */}

        {/* Column 2 */}
        <div className="w-full flex flex-col items-center gap-y-6">
          <FloralIcon2 svgColor={svgColor} />
          <ScrollZoomImage
            zoomScale={zoomScale}
            className="w-full h-[287px] mlg:h-[387px] md:h-[513px] lg:h-[400px]  2xl:h-[513px] 3xl:h-[782px]"
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url('${backgroundImage}')` }}
            />
          </ScrollZoomImage>
        </div>
        {/* End of Column 2 */}

        {/* Column 3 */}
        <div className="w-full  flex flex-col justify-center">
          <Button
            buttonBgColor="bg-secondary"
            borderColor={buttonBorderColor}
            text={buttonText}
            bgColor={buttonBgColor}
            textColor={buttonTextColor}
            showIcon={showIcon}
            iconClassName={buttonIconColor}
            className="self-center lg:self-end"
          />
        </div>
        {/* End of Column 3 */}
      </div>

      <div className={`${dividerColor} w-full h-[3px]`}></div>
    </div>
  );
}

