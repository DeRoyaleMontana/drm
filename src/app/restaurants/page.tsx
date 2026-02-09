import Dine from "@/components/restaurants/Dine";
import Flavours from "@/components/restaurants/Flavours";
import Restaurant from "@/components/restaurants/Restaurant";
import Explore from "@/components/restaurants/Explore";
import JoinUs from "@/components/restaurants/JoinUs";

export default function Restaurants() {
    return (
        <main>
            <Dine />
            <Flavours />
            <Restaurant />
            <Explore />
            <JoinUs />
        </main>
    );
}