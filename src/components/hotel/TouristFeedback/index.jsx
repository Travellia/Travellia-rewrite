import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import Image from "next/image";
import React from "react";
import ProfileCard from "@/components/common/ProfileCard";
import { TESTIMONIALS } from "@/lib/data/Testimonial";

// Tossef Khan's Trustpilot review mentions the hotels we arranged.
const HOTEL_REVIEW = TESTIMONIALS.find(
  (review) => review.user.name === "Tossef Khan"
);

const TouristFeedback = () => {
  const TESTIMONIAL = {
    comment: `"${HOTEL_REVIEW.comment}"`,
    name: HOTEL_REVIEW.user.name,
    location: HOTEL_REVIEW.user.location,
  };

  return (
    <section className="h-auto md:pb-15 lg:pb-10">
      <ContentLayoutWrapper className="flex flex-col items-center w-full gap-10">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-4xl font-bold text-primary tracking-widest">
            TOURIST FEEDBACK
          </h1>
          <p className="text-gray-600 text-base text-center w-[80%] m-auto">
            From stays steps away from the Haram to relaxing family resorts,
            our guests tell us how much a well-chosen hotel adds to their
            journey. Here is what one of them had to say.
          </p>
        </div>

        <div className="relative w-full flex flex-col lg:flex-row ">
          {/* Image */}
          <div className="w-full sm:w-2/3">
            <Image
              src="/hotel/TouristFeedback/Image.png"
              alt="Tourist"
              width={600}
              height={400}
              className="w-full h-auto rounded-2xl shadow-lg "
              loading="lazy"
            />
          </div>

          {/* Card (overlapping image) */}
          <div className="w-full sm:absolute sm:right-0 sm:top-1/2 sm:transform md:translate-x-20 sm:-translate-y-1/2 md:w-1/2 lg: -bottom-2/12 ">
            <ProfileCard data={TESTIMONIAL} />
          </div>
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default TouristFeedback;
