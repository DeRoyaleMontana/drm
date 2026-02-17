import BreadCrumbs from "@/components/ui/BreadCrumbs";
import Celebration from "@/components/events/Celebration";
import EventsList from "@/components/events/EventsList";
import Experience from "@/components/events/Experience";
import Connect from "@/components/events/Connect";

export default function Events() {
    return (
        <main>
            <BreadCrumbs title="Events" backgroundImage="/images/about/breadcrumb.webp" />
            <Celebration />
            <EventsList svgColor="accent" />
            <Experience />
            <Connect />
        </main>
    );
}