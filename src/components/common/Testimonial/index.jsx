import Image from "next/image";
import React from "react";
import TestimonialCard from "./TestimonialCard";
import ContentLayoutWrapper from "../ContentLayoutWrapper";

const index = ({ data }) => {
  return (
    <section className="relative py-20 p-10 sm:px-12 lg:px-18 min-h-[135vh] xl:min-h-[115vh] lg:py-10">
      {/* Background */}
      <div className="absolute left-0 bottom-0 hidden xl:block w-[80vw] lg:w-[60vw] h-[80vh]">
        <Image
          src="/common/Testimonial/friends-trip.png"
          alt="friends trip"
          fill
          className="z-0"
        />
      </div>

      {/* Main Layout */}
      <div className="relative z-10 ">
        <ContentLayoutWrapper>
          <div className="flex-[45%] flex flex-col gap-2 sm:gap-3 md:gap-5 items-center xl:items-start py-8">
            <h1 className="text-primary text-3xl md:text-5xl font-bold uppercase">
              Testimonial
            </h1>

            <p className="text-gray-800 text-lg md:text-2xl lg:text-3xl font-normal text-center md:text-left uppercase xl:w-[35%]">
              What our travellers are saying
            </p>
          </div>
        </ContentLayoutWrapper>

        {/* Cards */}
        <div className="p-2 xl:p-10 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-5 relative xl:absolute xl:right-0 xl:top-0 xl:w-[60%] ">
          {data.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default index;
