import BreadCrumbs from "@/components/ui/BreadCrumbs";
import Begin from "@/components/wedding/Begin";
import WeddingSpace from "@/components/wedding/WeddingSpace";
import Craft from "@/components/wedding/Craft";
import Bond from "@/components/wedding/Bond";

export default function Wedding() {
    return (
        <main>
            <BreadCrumbs title="Wedding Spaces" backgroundImage="/images/about/breadcrumb.webp" />
            <Begin />
            <WeddingSpace />
            <Craft />
            <Bond />
        </main>
    );
}