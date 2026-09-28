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
    heading: "Hotels & resorts",
    title: (
      <>
        Stay <em>somewhere special.</em>
      </>
    ),
    subtitle:
      "Handpicked hotels in Makkah, Madinah and beyond, with the best rates checked for you.",
  };

  const imageData = {
    image: "/hotel/BookNow/bg.png",
    alt: "",
  };

  return (
    <div className="flex flex-col">
      <Welcome data={welcomeData} />

      <div className="relative z-10 -mt-24 flex flex-col gap-20 md:-mt-40 md:gap-28">
        <FilterSearch defaultTab="hotels" />
        <Packages />
        <TouristFeedback />
        <BookNow data={imageData} />
        <PlanYourTrip />
      </div>
    </div>
  );
};

export default page;
