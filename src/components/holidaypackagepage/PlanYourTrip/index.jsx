import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import { Button } from "@/components/ui/button";
import React from "react";
import BookingForm from "./BookingForm";

const Index = () => {
  return (
    <section className="bg-secondary">
      <ContentLayoutWrapper className="flex flex-col gap-5 items-center py-20">
        {/* Heading */}
        <div className="flex flex-col text-center heading-big">
          <h1 className="">PLAN YOUR TRIP</h1>
          <h1 className=" text-black pt-3">WITH US</h1>
        </div>

        {/* Form */}
        <div className="w-full">
          <BookingForm />
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default Index;
