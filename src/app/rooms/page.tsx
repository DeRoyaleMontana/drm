import BreadCrumbs from "@/components/ui/BreadCrumbs";
import CallToAction from "@/components/ui/CallToAction";
import RoomsAndSuites from "@/components/rooms/RoomsAndSuites";
export default function Rooms() {
    return (
        <main>
            <BreadCrumbs title="Rooms & Suites" backgroundImage="/images/about/breadcrumb.webp" />
            <RoomsAndSuites />
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