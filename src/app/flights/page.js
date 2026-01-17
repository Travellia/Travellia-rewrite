import FilterSearch from "@/components/flight/FilterSearch";
import Welcome from "@/components/flight/welcome";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col">
      <Welcome />
      <div className="flex flex-col gap-7 xl:gap-10 -translate-y-10  md:-translate-y-40 lg:-translate-y-32 xl:-translate-y-50 z-1 -mb-20">
        <FilterSearch defaultTab="flights" />
      </div>
    </div>
  );
};

export default page;
