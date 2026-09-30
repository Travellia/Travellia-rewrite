import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import SideMenu from "@/components/hotel/Packages/SideMenu/index.";
import React from "react";
import FlightPackageCard from "./FlightPackageCard";
import PopularTours from "./PopularTours";

const FlightPackage = ({ data }) => {
  return (
    <section className="relative">
      <ContentLayoutWrapper className="flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:gap-8">
        {/* Flight Package */}
        <div className="flex flex-col gap-20 lg:col-span-8">
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
