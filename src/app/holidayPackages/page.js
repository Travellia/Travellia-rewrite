import Welcome from "@/components/holidaypackagepage/Welcome";
import ContactUs from "@/components/holidaypackagepage/ContactUs";
import LuxuryAssuring from "@/components/holidaypackagepage/LuxuryAssuring";
import FreshlyAdded from "@/components/holidaypackagepage/FreshlyAdded";
import BookNow from "@/components/holidaypackagepage/BookNow";
import TravelItinearies from "@/components/holidaypackagepage/TravelItinearies";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col ">
      <Welcome />
      <div className="flex flex-col md:gap-7 xl:gap-10 -translate-y-10  md:-translate-y-40 lg:-translate-y-32 z-1">
        <ContactUs />
        <LuxuryAssuring />
        <div className="flex flex-col">
          <FreshlyAdded />
          <BookNow />
        </div>
        <div className="flex flex-col">
          <TravelItinearies />
        </div>
      </div>
    </div>
  );
};

export default page;
