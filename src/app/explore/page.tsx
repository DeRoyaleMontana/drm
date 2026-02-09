import Attraction from "@/components/explore/Attraction";
import Welcome from "@/components/explore/Welcome";
import BreadCrumbs from "@/components/ui/BreadCrumbs";

export default function Explore() {
    return (
        <main>
            <BreadCrumbs title="Nearby Attractions" backgroundImage="/images/about/breadcrumb.webp" />
            <Welcome />
            <Attraction />
        </main>
    );
}