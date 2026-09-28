import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import Image from "next/image";
import React from "react";
import ProfileCard from "@/components/common/ProfileCard";
import SectionHeading from "@/components/ui/SectionHeading";
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
    <section>
      <ContentLayoutWrapper className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Tourist feedback"
          title={
            <>
              A well-chosen hotel
              <br />
              <em>changes the journey.</em>
            </>
          }
          intro="From stays steps away from the Haram to relaxing family resorts, our guests tell us how much a well-chosen hotel adds to their journey. Here is what one of them had to say."
        />

        <div className="relative grid items-center gap-6 lg:grid-cols-[1.2fr_1fr]">
          <div className="relative aspect-[4/3] overflow-hidden rounded-frame shadow-lift">
            <Image
              src="/hotel/TouristFeedback/Image.png"
              alt="Guests relaxing at a hotel"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>
          <div className="relative z-10 lg:-ml-24">
            <ProfileCard data={TESTIMONIAL} />
          </div>
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default TouristFeedback;
