import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import React from "react";
import SearchTabs from "@/components/common/SearchTabs";

const FilterSearch = ({ defaultTab }) => {
  return (
    <section id="search" className="relative z-30 scroll-mt-28">
      <ContentLayoutWrapper>
        <div className="rounded-frame border border-line bg-white p-4 shadow-lift sm:p-6 md:p-8">
          <SearchTabs defaultTab={defaultTab} />
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default FilterSearch;
