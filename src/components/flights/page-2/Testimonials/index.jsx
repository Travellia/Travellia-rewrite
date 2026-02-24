import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import ProfileCard from "@/components/common/ProfileCard";
import Image from "next/image";
import React from "react";



const index = () => {
  return (
    <section className=" min-h-[135vh] xl:min-h-[115vh] relative py-24 p-10 sm:px-12 lg:px-18 lg:py-0">
      <div className="hidden xl:block w-[80vw] lg:w-[60vw] h-[80vh] absolute left-0 bottom-0">
        <Image
          src="/home/testimonial/friends-trip.png"
          alt="friends-trip"
          fill
          className="z-0"
        />
      </div>
      <ContentLayoutWrapper>
        <div className="flex-[45%] flex flex-col gap-2 sm:gap-3 md:gap-5 items-center xl:items-start   py-8 z-50">
          <h1 className="text-primary text-3xl md:text-5xl font-bold uppercase  ">
            Testimonial
          </h1>
          <p className="text-gray-800 text-lg md:text-2xl lg:text-3xl font-normal text-center md:text-left uppercase lg:text-left  xl:w-[35%]">
            What our travellers are saying
          </p>
        </div>
      </ContentLayoutWrapper>

      <div
        className={`
    p-2 xl:p-10
    grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-5
    relative xl:absolute
    xl:right-0 xl:top-0 xl:w-[60%]
    flex flex-col items-center justify-center
  `}
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <ProfileCard data={testimonial} key={index} />
        ))}
      </div>
    </section>
  );
};

export default index;
