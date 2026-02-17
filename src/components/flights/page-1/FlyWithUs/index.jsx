import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <section className="relative">
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
          src="/flights/page-1/flywithus/worldmap.png"
          alt="World Map"
          width={1920} // original image width
          height={1080} // original image height
          loading="lazy"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Index;
