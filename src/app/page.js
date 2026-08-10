import Welcome from "@/components/common/Welcome";
import BestServices from "@/components/homepage/BestServices";
import Adventures from "@/components/homepage/Adventures";
import UmrahPackages from "@/components/homepage/UmrahPackages";
import UmrahStayPackages from "@/components/homepage/UmrahPackages/UmrahStayPackages";
import SummerDeals from "@/components/homepage/SummerDeals";
import HotelBookings from "@/components/homepage/HotelBookings";
import OfferedServices from "@/components/homepage/OfferedServices";
import TrendingPackages from "@/components/homepage/TrendingPackages";
import BookNow from "@/components/homepage/BookNow";
import Testimonials from "@/components/common/Testimonial";
import FilterSearch from "@/components/common/FilterSearch";
import { TESTIMONIALS } from "@/lib/data/Testimonial";
import FamilyAdventures from "@/components/homepage/Adventures/FamilyAdventures";

export default function Home() {
  const welcomeData = {
    slides: [
      { id: 1, image: "/home/welcome/welcome.png" },
      { id: 2, image: "/flights/welcome/Image2.png" },
      { id: 3, image: "/flights/welcome/Image3.png" },],
    title: "TRAVELLIA",
    buttons: [
      { label: "Explore Our Tours" },
      { label: "View Packages", variant: "ghost" },
    ],
    heightClassName: "h-[65vh] md:h-[72vh] lg:h-[77vh] xl:h-[90vh]",
  };

  const TESTIMONIAL = TESTIMONIALS;

  return (
    <div className="flex flex-col bg-background">
      <Welcome data={welcomeData} />
      <div className="flex flex-col  -translate-y-10  md:-translate-y-40 lg:-translate-y-32 xl:-translate-y-50 z-1 -mb-20">
        <FilterSearch />
        <FamilyAdventures/>
        <TrendingPackages />
        <BookNow />
        <HotelBookings />
        <UmrahPackages />
        <UmrahStayPackages />
        <Adventures />
        <SummerDeals />
        <OfferedServices />
        <BestServices />
        <Testimonials data={TESTIMONIAL} />
      </div>
    </div>
  );
}
