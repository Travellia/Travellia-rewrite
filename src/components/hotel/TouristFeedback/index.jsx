import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import Image from "next/image";
import React from "react";
import ProfileCard from "./ProfileCard";

const TouristFeedback = () => {
  return (
    <section>
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

        <div className="relative w-full flex ">
          {/* Image */}
          <div className="w-2/3">
            <Image
              src="/hotel/TouristFeedback/Image.png"
              alt="Tourist"
              width={600}
              height={400}
              className="w-full h-auto rounded-2xl shadow-lg border border-amber-950"
            />
          </div>

          {/* Card (overlapping image) */}
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/3">
            <ProfileCard />
          </div>
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default TouristFeedback;
