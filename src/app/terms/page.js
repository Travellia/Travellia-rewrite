import Welcome from "@/components/terms/welcome";
import MainContent from "@/components/terms/MainContent";
import React from "react";
import PlanYourTrip from "@/components/common/PlanYourTrip";
import FilterSearch from "@/components/common/FilterSearch";

const page = () => {
  return (
    <div className="relative flex flex-col">
      <Welcome />
      <div className="flex flex-col gap-7 xl:gap-10 -translate-y-10  md:-translate-y-40 lg:-translate-y-32 xl:-translate-y-50 z-1 -mb-20">
        <FilterSearch />
        <MainContent />
        <PlanYourTrip />
      </div>
    </div>
  );
};

export default page;
