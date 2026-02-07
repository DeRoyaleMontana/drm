import AboutUs from "@/components/about/AboutUs";
import BreadCrumbs from "@/components/about/BreadCrumbs";
import OurEssence from "@/components/about/OurEssence";
import OurPeople from "@/components/about/OurPeople";
import OurVision from "@/components/about/OurVision";
import Testimonials from "@/components/about/Testimonials";

export default function About() {
    return (
        <main>
            <BreadCrumbs />
            <AboutUs />
            <OurVision />
            <OurEssence />
            <Testimonials />
            <OurPeople />
        </main>
    );
}