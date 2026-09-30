import React from "react";
import FilterSearch from "@/components/common/FilterSearch";
import Welcome from "@/components/common/Welcome";
import popularFlightData from "@/lib/data/popularFlightsData";
import PopularFlights from "@/components/common/PopularFlights";
import FamilyAdventure from "@/components/flights/page-1/FamilyAdventure";
import TrendingPackage from "@/components/flights/page-1/TrendingPackage";
import BookNow from "@/components/common/BookNow";
import PlanYourTrip from "@/components/common/PlanYourTrip";

const page = () => {
  const welcomeData = {
    slides: [
      { id: 1, image: "/flights/welcome/Image1.webp" },
      { id: 2, image: "/flights/welcome/Image2.webp" },
      { id: 3, image: "/flights/welcome/Image3.webp" },
    ],
    heading: "Flights from UK airports",
    title: (
      <>
        Fly <em>further.</em>
      </>
    ),
    subtitle:
      "Great fares with trusted airlines to Africa, Asia, Europe and the Middle East, booked by people you can call.",
  };

  const FLIGHTS_CARDS_DATA = popularFlightData.slice(0, 6);

  const imageData = {
    image: "/flights/page-1/booknow.webp",
    alt: "",
  };

  return (
    <section className="relative flex flex-col">
      <Welcome data={welcomeData} />
      <div className="relative z-10 -mt-24 flex flex-col gap-20 md:-mt-40 md:gap-28">
        <FilterSearch defaultTab="flights" />
        <TrendingPackage />
        <PopularFlights cards={FLIGHTS_CARDS_DATA} />
        <FamilyAdventure />
        <BookNow data={imageData} />
        <PlanYourTrip />
      </div>
    </section>
  );
};

export default page;
