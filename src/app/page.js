import Welcome from "@/components/homepage/Welcome";
import BestServices from "@/components/homepage/BestServices";
import Adventures from "@/components/homepage/Adventures";
import PopularDestination from "@/components/homepage/PopularDestination";
import UmrahPackages from "@/components/homepage/UmrahPackages";
import SummerDeals from "@/components/homepage/SummerDeals";
import HotelBookings from "@/components/homepage/HotelBookings";
import OfferedServices from "@/components/homepage/OfferedServices";
import TrendingPackages from "@/components/homepage/TrendingPackages";
import BookNow from "@/components/homepage/BookNow";
import Testimonials from "@/components/homepage/Testimonial";
import FilterSearch from "@/components/flight1/FilterSearch";

export default function Home() {
  return (
    <div className="flex flex-col bg-background">
      <Welcome />
      <div className="flex flex-col  -translate-y-10  md:-translate-y-40 lg:-translate-y-32 xl:-translate-y-50 z-1 -mb-20">
        <FilterSearch />
        <BestServices />
        <Adventures />
        <PopularDestination />
        <UmrahPackages />
        <SummerDeals />
        <HotelBookings />
        <OfferedServices />
        <TrendingPackages />
        <BookNow />
        <Testimonials />
      </div>
    </div>
  );
}
