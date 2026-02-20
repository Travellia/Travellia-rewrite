import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import React from "react";
import Image from "next/image";
import SearchTabs from "@/components/common/SearchTabs";

const FilterSearch = ({ defaultTab }) => {
  const shouldShowImage = defaultTab.toLowerCase() !== "umrah";

  return (
    <section className="">
      {/* Content */}
      <ContentLayoutWrapper className="lg:w-[90vw] xl:w-[60vw] relative z-10 border border-primary rounded-3xl shadow-2xl bg-secondary">
        {shouldShowImage && (
          <Image
            src="/holidayPackage/ContactUs/bg.png"
            alt="background"
            fill
            priority
            className="absolute object-cover min-h-50 -z-10 rounded-3xl "
          />
        )}
        <SearchTabs defaultTab={defaultTab} />
      </ContentLayoutWrapper>
    </section>
  );
};

export default FilterSearch;
