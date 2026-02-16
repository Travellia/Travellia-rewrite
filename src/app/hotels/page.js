import Welcome from "@/components/hotel/Welcome";
import Packages from "@/components/hotel/Packages";
import TouristFeedback from "@/components/hotel/TouristFeedback";
import BookNow from "@/components/hotel/BookNow";

import React from "react";
import PlanYourTrip from "@/components/common/PlanYourTrip";
import FilterSearch from "@/components/common/FilterSearch";

const page = () => {
  return (
    <div className="flex flex-col">
      <Welcome />

      <div className="flex flex-col gap-7 xl:gap-10 -translate-y-10  md:-translate-y-40 lg:-translate-y-32 xl:-translate-y-50 z-1 -mb-20">
        <FilterSearch defaultTab="hotels" />
        <div className="flex flex-col gap-10  sm:pb-15 h-auto ">
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
