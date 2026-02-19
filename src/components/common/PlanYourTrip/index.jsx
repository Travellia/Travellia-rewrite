import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import React from "react";
import { cn } from "@/lib/utils";

import BookingForm from "./BookingForm";

const PlanYourTrip = ({
  titleLines1 = "PLAN YOUR TRIP",
  titleLines2 = "WITH US",
  titleLines2Class = "text-black",
  sectionBg = "bg-secondary",
  inputBg = "bg-white",
  paddingY = "py-20",
}) => {
  return (
    <section className={sectionBg}>
      <div
        className={`
          flex flex-col gap-10 items-center py-20 w-full,
          paddingY,
        `}
      >
        {/* Heading */}

        <div className="flex flex-col gap-3 text-center heading-big">
          <h1 className="">{titleLines1}</h1>
          <h1 className={titleLines2Class}>{titleLines2}</h1>
        </div>

        {/* Form */}
        <div className="w-full">
          <BookingForm inputBg={inputBg} />
        </div>
      </div>
    </section>
  );
};

export default PlanYourTrip;
