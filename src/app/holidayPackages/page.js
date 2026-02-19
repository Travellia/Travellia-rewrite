import Welcome from "@/components/common/Welcome";
import LuxuryAssuring from "@/components/common/LuxuryAssuring";
import FreshlyAdded from "@/components/holidaypackagepage/FreshlyAdded";
import TravelItinearies from "@/components/holidaypackagepage/TravelItinearies";
import PlanYourTrip from "@/components/holidaypackagepage/PlanYourTrip";
import React from "react";
import FilterSearch from "@/components/common/FilterSearch";
import BookNow from "@/components/common/BookNow";
import { LuxuryAssuringHolidayPackage } from "@/lib/data/LuxuryAssuringHolidayPackage";

const page = () => {
  const welcomeData = {
    slides: [
      { id: 1, image: "/holidayPackage/welcome/welcome1.jpg" },
      { id: 2, image: "/holidayPackage/welcome/welcome2.jpg" },
    ],
    title: "HOLIDAY PACKAGES",
    heightClassName: "h-[65vh] md:h-[72vh] lg:h-[77vh] xl:h-screen",
  };

  const LUXURY_ASSURING_DATA = LuxuryAssuringHolidayPackage;

  const imageData = {
    image: "/holidayPackage/BookNow/bgImage.png",
    alt: "resturant",
  };

  return (
    <div className="flex flex-col ">
      <Welcome data={welcomeData} />
      <div className="flex flex-col gap-7 xl:gap-10 -translate-y-10  md:-translate-y-40 lg:-translate-y-32 xl:-translate-y-50 z-1 -mb-20">
        <FilterSearch />
        <LuxuryAssuring data={LUXURY_ASSURING_DATA} />
        <div className="flex flex-col">
          <FreshlyAdded />
          <BookNow data={imageData} />
        </div>
        <div className="flex flex-col">
          <TravelItinearies />
        </div>
        <PlanYourTrip />
      </div>
    </div>
  );
};

export default page;
