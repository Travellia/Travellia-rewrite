import Welcome from "@/components/common/Welcome";
import LuxuryAssuring from "@/components/common/LuxuryAssuring";
import FreshlyAdded from "@/components/holidaypackagepage/FreshlyAdded";
import ContactUs from "@/components/holidaypackagepage/ContactUs";
import TravelItinearies from "@/components/common/TravelItinearies";
import PlanYourTrip from "@/components/common/PlanYourTrip";
import React from "react";
import FilterSearch from "@/components/common/FilterSearch";
import BookNow from "@/components/common/BookNow";
import { LuxuryAssuringHolidayPackage } from "@/lib/data/holidayPackage/LuxuryAssuringHolidayPackage";
import { PACKAGES_DATA } from "@/lib/data/holidayPackage/TravelItineariesPackageData-holidayPackage";
import { Bullets } from "@/lib/data/holidayPackage/TravelItineariesBullets-holidayPackage";

const page = () => {
  const welcomeData = {
    slides: [
      { id: 1, image: "/holidayPackage/welcome/welcome1.jpg" },
      { id: 2, image: "/holidayPackage/welcome/welcome2.jpg" },
    ],
    title: "HOLIDAY PACKAGES",
  };

  const LUXURY_ASSURING_DATA = LuxuryAssuringHolidayPackage;

  const PACKAGE_DATA = PACKAGES_DATA;
  const BULLETS = Bullets;

  const imageData = {
    image: "/holidayPackage/BookNow/bgImage.png",
    alt: "resturant",
  };

  return (
    <div className="flex flex-col ">
      <Welcome data={welcomeData} />
      <div className="flex flex-col gap-7 xl:gap-10 relative z-10 -mt-24 md:-mt-40">
        <FilterSearch />
        <LuxuryAssuring data={LUXURY_ASSURING_DATA} />
        <div className="flex flex-col">
          <FreshlyAdded />
          <BookNow data={imageData} />
        </div>
        <div className="flex flex-col">
          <TravelItinearies
            data1={PACKAGE_DATA}
            data2={BULLETS}
            href="#plan-your-trip"
          />
        </div>
        <ContactUs />
        <PlanYourTrip />
      </div>
    </div>
  );
};

export default page;
