import Hero from "@/components/home/Hero";
import OurResort from "@/components/home/OurResort";
import Sanctuary from "@/components/home/Sanctuary";
import Rooms from "@/components/home/Rooms";
import Extraordinary from "@/components/home/Extraordinary";
import Stay from "@/components/home/Stay";
import Dining from "@/components/home/Dining";
import CallToAction from "@/components/ui/CallToAction";

export default function Home() {
  return (
    <main>
      <Hero />
      <OurResort />
      <Sanctuary />
      <Rooms />
      <Extraordinary />
      <Stay />
      <Dining />
      <CallToAction
        title="Book your <br class='hidden lg:block'/>stay with us"
        subtitle="and enjoy"
        buttonText="Book your stay"
        backgroundImage="/images/home/book.webp"
        svgColor="accent"
      />
    </main>
  );
}
