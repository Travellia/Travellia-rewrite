import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import React from "react";
import SearchTabs from "../../common/SearchTabs";
import Image from "next/image";

const FilterSearch = ({ defaultTab }) => {
  return (
    <section className="">
      {/* Content */}
      <ContentLayoutWrapper className="lg:w-[90vw] xl:w-[60vw] relative z-10 border border-primary rounded-3xl shadow-2xl">
        <Image
          src="/holidayPackage/ContactUs/bg.png"
          alt="background"
          fill
          priority
          className="absolute object-cover min-h-50 -z-10 rounded-3xl "
        />
        <SearchTabs defaultTab="flights" />
      </ContentLayoutWrapper>
    </section>
  );
};

export default FilterSearch;
