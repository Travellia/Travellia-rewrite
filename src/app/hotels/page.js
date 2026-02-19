import Welcome from "@/components/common/Welcome";
import Packages from "@/components/hotel/Packages";
import TouristFeedback from "@/components/hotel/TouristFeedback";
import React from "react";
import PlanYourTrip from "@/components/common/PlanYourTrip";
import FilterSearch from "@/components/common/FilterSearch";
import BookNow from "@/components/common/BookNow";

const page = () => {
  const welcomeData = {
    slides: [
      { id: 1, image: "/hotel/welcome/slide-1.png" },
      { id: 2, image: "/hotel/welcome/slide-2.png" },
      { id: 3, image: "/hotel/welcome/slide-3.png" },
      { id: 4, image: "/hotel/welcome/slide-4.png" },
    ],
    title: "Hotel",

    heightClassName: "h-[65vh] md:h-[72vh] lg:h-[77vh] xl:h-screen",
  };

  const imageData = {
    image: "/hotel/BookNow/bg.png",
    alt: "resturant",
  };

  return (
    <div className="flex flex-col">
      <Welcome data={welcomeData} />

      <div className="flex flex-col gap-7 xl:gap-10 -translate-y-10  md:-translate-y-40 lg:-translate-y-32 xl:-translate-y-50 z-1 -mb-20">
        <FilterSearch defaultTab="hotels" />
        <div className="flex flex-col gap-10  sm:pb-15 h-auto ">
          <Packages />
          <TouristFeedback />
        </div>
        <div>
          <BookNow data={imageData} />
          <PlanYourTrip />
        </div>
      </div>
    </div>
  );
};

export default page;
