import Welcome from "@/components/common/Welcome";
import MainContent from "@/components/terms/MainContent";
import React from "react";
import PlanYourTrip from "@/components/common/PlanYourTrip";
import FilterSearch from "@/components/common/FilterSearch";

const page = () => {
  return (
    <div className="relative flex flex-col">
      <Welcome
        data={{
          slides: [{ id: 1, image: "/terms/Image.png" }],
          heading: "Legal",
          title: (
            <>
              Terms <em>&amp; conditions.</em>
            </>
          ),
          subtitle: "Please read these terms carefully before making a booking with Travellia Limited.",
        }}
      />
      <div className="relative z-10 -mt-24 flex flex-col gap-20 md:-mt-40 md:gap-28">
        <FilterSearch />
        <MainContent />
        <PlanYourTrip />
      </div>
    </div>
  );
};

export default page;
