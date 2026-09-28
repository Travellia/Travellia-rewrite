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
      { id: 2, image: "/about/welcome/Image1.png" },
      { id: 3, image: "/home/welcome/welcome.jpg" },
    ],
    heading: "Holiday packages",
    title: (
      <>
        Escape <em>somewhere new.</em>
      </>
    ),
    subtitle:
      "Beach escapes, city breaks and family adventures, with flights, hotels and transfers in one booking.",
  };

  const LUXURY_ASSURING_DATA = LuxuryAssuringHolidayPackage;

  const PACKAGE_DATA = PACKAGES_DATA;
  const BULLETS = Bullets;

  const imageData = {
    image: "/holidayPackage/BookNow/bgImage.png",
    alt: "",
  };

  return (
    <div className="flex flex-col">
      <Welcome data={welcomeData} />
      <div className="relative z-10 -mt-24 flex flex-col gap-20 md:-mt-40 md:gap-28">
        <FilterSearch />
        <LuxuryAssuring data={LUXURY_ASSURING_DATA} />
        <FreshlyAdded />
        <BookNow data={imageData} />
        <TravelItinearies
          data1={PACKAGE_DATA}
          data2={BULLETS}
          href="#plan-your-trip"
        />
        <ContactUs />
        <PlanYourTrip />
      </div>
    </div>
  );
};

export default page;
