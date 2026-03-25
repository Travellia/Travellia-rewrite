import UnderConstruction from "@/components/common/UnderConstruction";

export default function Home() {
  return <UnderConstruction />;
}

/* ── Restore instructions ──────────────────────────────────────────────
   1. Delete src/components/common/UnderConstruction.jsx
   2. Delete src/middleware.js
   3. Uncomment layout.js Banner / Navbar / Footer
   4. Replace this file with the original content below:

import Welcome from "@/components/common/Welcome";
import BestServices from "@/components/homepage/BestServices";
import Adventures from "@/components/homepage/Adventures";
import PopularDestination from "@/components/homepage/PopularDestination";
import UmrahPackages from "@/components/homepage/UmrahPackages";
import SummerDeals from "@/components/homepage/SummerDeals";
import HotelBookings from "@/components/homepage/HotelBookings";
import OfferedServices from "@/components/homepage/OfferedServices";
import TrendingPackages from "@/components/homepage/TrendingPackages";
import BookNow from "@/components/homepage/BookNow";
import Testimonials from "@/components/common/Testimonial";
import FilterSearch from "@/components/common/FilterSearch";
import { TESTIMONIALS } from "@/lib/data/Testimonial";

export default function Home() {
  const welcomeData = {
    slides: [{ id: 1, image: "/home/welcome/welcome.png" }],
    title: "TRAVELLIA",
    buttons: [
      { label: "Explore Our Tours" },
      { label: "View Packages", variant: "ghost" },
    ],
    heightClassName: "h-[65vh] md:h-[72vh] lg:h-[77vh] xl:h-screen",
  };

  const TESTIMONIAL = TESTIMONIALS;

  return (
    <div className="flex flex-col bg-background">
      <Welcome data={welcomeData} />
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
        <Testimonials data={TESTIMONIAL} />
      </div>
    </div>
  );
}
─────────────────────────────────────────────────────────────────────── */
