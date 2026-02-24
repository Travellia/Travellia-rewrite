import React from "react";
import FilterSearch from "@/components/common/FilterSearch";
import Welcome from "@/components/flights/welcome";
import FlyWithUs from "@/components/flights/FlyWithUs";
import PopularFlights from "@/components/flights/PopularFlights";
import FamilyAdventure from "@/components/flights/FamilyAdventure";
import TrendingPackage from "@/components/flights/TrendingPackage";
import BookNow from "@/components/common/BookNow";
import PlanYourTrip from "@/components/common/PlanYourTrip";

const page = () => {
  const imageData = {
    image: "/flights/booknow.png",
    alt: "resturant",
  };

  return (
    <section className="relative flex flex-col">
      <Welcome />
      <div className="flex flex-col gap-7 xl:gap-10 -translate-y-10  md:-translate-y-40 lg:-translate-y-32 xl:-translate-y-50 z-1 -mb-20">
        <FilterSearch defaultTab="flights" />
        <FlyWithUs />
        <PopularFlights />
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
