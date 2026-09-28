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
import PlanYourTrip from "@/components/common/PlanYourTrip";
import Marquee from "@/components/ui/Marquee";

export default function Home() {
  const welcomeData = {
    slides: [
      { id: 1, image: "/home/services/22.png" },
      { id: 2, image: "/flights/welcome/Image2.png" },
      { id: 3, image: "/hajj-ummrah/welcome/slide1.png" },
      { id: 4, image: "/home/welcome/welcome.jpg" },
    ],
    heading: "Flights · Hotels · Umrah · Holidays",
    title: (
      <>
        Travel <em>beautifully.</em>
      </>
    ),
    subtitle:
      "Handpicked flights, hotels, Umrah packages and holidays, planned around you by a UK travel team you can call.",
    feature: {
      image: "/home/umrah-package/package1.png",
      label: "Umrah · 7 nights",
      title: "5-Star Umrah from £885",
      href: "/hajj-umrah/5-star-7-nights",
    },
  };

  return (
    <div className="flex flex-col">
      <Welcome data={welcomeData} />
      <div className="relative z-10 -mt-24 flex flex-col gap-20 md:-mt-40 md:gap-28">
        <FilterSearch />
        <FamilyAdventures />
        <TrendingPackages />
        <Marquee />
        <BookNow />
        <HotelBookings />
        <UmrahPackages />
        <UmrahStayPackages />
        <Adventures />
        <SummerDeals />
        <BestServices />
        <OfferedServices />
        <Testimonials data={TESTIMONIALS} />
        <PlanYourTrip />
      </div>
    </div>
  );
}
