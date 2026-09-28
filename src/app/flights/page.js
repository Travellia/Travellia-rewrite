import React from "react";
import FilterSearch from "@/components/common/FilterSearch";
import Welcome from "@/components/common/Welcome";
import FlyWithUs from "@/components/flights/page-1/FlyWithUs";
import popularFlightData from "@/lib/data/popularFlightsData";
import PopularFlights from "@/components/common/PopularFlights";
import FamilyAdventure from "@/components/flights/page-1/FamilyAdventure";
import TrendingPackage from "@/components/flights/page-1/TrendingPackage";
import BookNow from "@/components/common/BookNow";
import PlanYourTrip from "@/components/common/PlanYourTrip";

const page = () => {
  const welcomeData = {
    slides: [
      { id: 1, image: "/flights/welcome/Image1.png" },
      { id: 2, image: "/flights/welcome/Image2.png" },
      { id: 3, image: "/flights/welcome/Image3.png" },
    ],
    title: "TRAVELLIA",
    heightClassName: "h-[65vh] md:h-[72vh] lg:h-[77vh] xl:h-[90vh]",
  };

  const FLIGHTS_CARDS_DATA = popularFlightData.slice(0, 6);

  const imageData = {
    image: "/flights/page-1/booknow.png",
    alt: "resturant",
  };

  return (
    <section className="relative flex flex-col">
      <Welcome data={welcomeData} />
      <div className="flex flex-col gap-7 xl:gap-10 relative z-10 -mt-24 md:-mt-40">
        <FilterSearch defaultTab="flights" />
        <FlyWithUs />
        <PopularFlights cards={FLIGHTS_CARDS_DATA} show={false} />
        <FamilyAdventure />
        <TrendingPackage />
        <div className="mt-10">
          <BookNow data={imageData} />
          <PlanYourTrip />
        </div>
      </div>
    </section>
  );
};

export default page;
