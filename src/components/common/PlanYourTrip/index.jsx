import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import React from "react";

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
      <ContentLayoutWrapper
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
      </ContentLayoutWrapper>
    </section>
  );
};

export default PlanYourTrip;
