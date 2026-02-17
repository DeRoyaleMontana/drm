import Divider from "../ui/Divider";

export default function Connect() {
    return (
        <section className="flex flex-col items-center gap-6 bg-accent fp font-body text-secondary">
            <Divider dividerColor="bg-secondary" className="w-[50%] sm:w-[35%] lg:w-[25%] xl:w-[20%] 2xl:w-[15%]" />
            <h4 className="f-h4 text-center">Let us craft an event that reflects your vision — with elegance, privacy, and grace.</h4>
            <div className="w-full flex justify-center items-center gap-4 sm:gap-8">
                <div className="hidden sm:block min-w-[50px] max-w-[236px] grow h-px bg-secondary"></div>
                <p className="font-body f-body leading-normal text-center shrink">Connect with our team to begin your journey.</p>
                <div className="hidden sm:block min-w-[50px] max-w-[236px] grow h-px bg-secondary"></div>
            </div>
        </section>
    )
}