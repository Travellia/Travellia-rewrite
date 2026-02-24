import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import Image from "next/image";
import React from "react";
import ProfileCard from "@/components/common/ProfileCard";

const TouristFeedback = () => {
  const TESTIMONIAL = {
    comment:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,ultricies nec, pellentesque.",
    src: "/common/CardPic1.png",
    name: "Shannon J. Williams",
    location: "New York, USA",
  };

  return (
    <section className="h-auto md:pb-15 lg:pb-10">
      <ContentLayoutWrapper className="flex flex-col items-center w-full gap-10">
        <div className="flex flex-col items-center w-full">
          <h1 className="text-4xl font-bold text-primary tracking-widest">
            TOURIST FEEDBACK
          </h1>
          <p className="text-gray-600 text-base text-center w-[80%] m-auto">
            Sorem ipsum dolor sit amet, consectetur adipisicing Suscipit votas
            aperiam Sorem ipsum dolor consectur adipisicing elit.
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
