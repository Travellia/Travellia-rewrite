import Image from "next/image";
import React from "react";
import TestimonialCard from "./TestimonialCard";
import { TRUSTPILOT_URL } from "@/lib/data/Testimonial";
import ContentLayoutWrapper from "../ContentLayoutWrapper";

const index = ({ data }) => {
  return (
    <section className="relative py-20 p-10 sm:px-12 lg:px-18 lg:py-10">
      {/* Background */}
      <div className="absolute inset-0 hidden xl:block w-[80vw] lg:w-[60vw] aspect-[4/5] max-h-full">
        <Image
          src="/common/Testimonial/friends-trip.png"
          alt="friends trip"
          fill
          sizes="60vw"
          className="z-0 object-contain object-left-bottom"
        />
      </div>

      {/* Main Layout */}
      <div className="relative z-10 ">
        <ContentLayoutWrapper>
          <div className="flex-[45%] flex flex-col gap-2 sm:gap-3 md:gap-5 items-center xl:items-center pb-8">
            <h1 className="text-primary text-3xl md:text-5xl font-bold uppercase">
              Testimonial
            </h1>

            <p className="text-gray-800 text-lg md:text-2xl lg:text-3xl font-normal text-center md:text-left lg:text-center uppercase ">
              What our travellers are saying
            </p>
            <a
              href={TRUSTPILOT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-primary underline underline-offset-4"
            >
              Read all our reviews on Trustpilot
            </a>
          </div>
        </ContentLayoutWrapper>

        {/* Cards */}
        <div className="p-2 xl:p-10 grid grid-cols-1 lg:grid-cols-2 gap-5 relative xl:ml-auto xl:w-[60%] ">
          {data.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default index;
