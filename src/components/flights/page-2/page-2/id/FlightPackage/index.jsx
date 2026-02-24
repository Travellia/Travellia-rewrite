import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import SideMenu from "@/components/hotel/Packages/SideMenu/index.";
import React from "react";
import FlightPackageCard from "./FlightPackageCard";
import PopularTours from "./PopularTours";
import Image from "next/image";

const FlightPackage = ({ data }) => {
  return (
    <section className="relative">
      <>
        <Image
          src="/common/plane.png"
          alt="plane"
          height={500}
          width={500}
          loading="lazy"
          className="hidden md:block opacity-50 absolute md:-translate-y-5 xl:-translate-y-10 top-0 -z-1"
        />{" "}
        <Image
          src="/common/passport.png"
          alt="passport"
          height={300}
          width={300}
          loading="lazy"
          className="hidden md:block absolute md:-translate-y-5 xl:translate-x-10 right-0 bottom-1/2 -z-1"
        />{" "}
        <Image
          src="/common/ballon.png"
          alt="ballon"
          height={350}
          width={350}
          loading="lazy"
          className="hidden md:block absolute md:-translate-y-5 xl:-translate-x-25 top-2/3  -z-1"
        />
      </>
      <ContentLayoutWrapper className=" flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:gap-6">
        {/* Flight Package */}
        <div className="lg:col-span-8 flex flex-col gap-20">
          <FlightPackageCard data={data} />
          <PopularTours data={data} />
        </div>
        {/* Sidebar */}
        <div className="lg:col-span-4">
          <SideMenu />
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default FlightPackage;
