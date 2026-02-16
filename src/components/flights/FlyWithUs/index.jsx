import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <section className="relative">
      {/* Plane Image at bottom-left */}
      <div className="absolute bottom-0 left-0 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
        <Image
          src="/flights/flywithus/plane.png"
          alt="Plane"
          fill
          className="object-contain"
        />
      </div>

      {/* Content Section */}
      <ContentLayoutWrapper>
        <div className="flex flex-col">
          <p className="heading-para">Come</p>
          <h1 className="heading">FLY WITH US</h1>
        </div>
      </ContentLayoutWrapper>

      {/* Map Section (full screen width, height auto as per image) */}
      <div className="relative w-screen">
        <Image
          src="/flights/flywithus/worldmap.png"
          alt="World Map"
          width={1920} // original image width
          height={1080} // original image height
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Index;
