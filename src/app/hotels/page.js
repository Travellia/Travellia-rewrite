import Welcome from "@/components/hotel/Welcome";
import FilterSearch from "@/components/hotel/FilterSearch";
import Packages from "@/components/hotel/Packages";
import TouristFeedback from "@/components/hotel/TouristFeedback";
import BookNow from "@/components/hotel/BookNow";
import PlanYourTrip from "@/components/hotel/PlanYourTrip";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col">
      <Welcome />

      <div className="flex flex-col md:gap-7 xl:gap-10 -translate-y-10  md:-translate-y-40 lg:-translate-y-32 z-1 -mb-20">
        <FilterSearch />
        <div className="flex flex-col gap-10 pb-15">
          <Packages />
          <TouristFeedback />
        </div>
        <BookNow />
        <PlanYourTrip />
      </div>
    </div>
  );
};

export default page;
