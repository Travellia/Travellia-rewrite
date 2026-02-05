import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import { Button } from "@/components/ui/button";
import React from "react";
import BookingForm from "./BookingForm";

const PlanYourTrip = () => {
  return (
    <section className="bg-secondary">
      <ContentLayoutWrapper className="flex flex-col gap-5 items-center py-20">
        {/* Heading */}
        <div className="flex flex-col gap-3 text-center heading-big">
          <h1 className="">PLAN YOUR TRIP</h1>
          <h1 className=" text-black">WITH US</h1>
        </div>

        {/* Form */}
        <div className="w-full">
          <BookingForm />
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default PlanYourTrip;
