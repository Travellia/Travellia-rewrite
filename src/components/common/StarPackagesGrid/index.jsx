import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import StarPackageCard from "./StarPackageCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ArrowButton from "@/components/ui/ArrowButton";
import React from "react";

const StarPackagesGrid = ({ data, tier }) => {
  const headingMatch = data.heading?.match(/(\d+)\s*Star\s*(\d+)\s*NIGHTS/i);
  const description = headingMatch
    ? `${headingMatch[1]}-Star December Umrah Packages for ${headingMatch[2]} Nights - All-inclusive`
    : null;

  return (
    <section>
      <ContentLayoutWrapper className="flex flex-col gap-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow={`${data.stars}-star Umrah`}
            title={data.heading}
            intro="Choose your Makkah and Madinah hotel pairing. Every package includes flights, visa, transport and Ziyarat."
          />
          <ArrowButton href="/hajj-umrah" tone="light">
            All Umrah packages
          </ArrowButton>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.cards.map((card) => (
            <StarPackageCard
              key={card.id}
              card={card}
              description={description}
              stars={data.stars}
              tier={tier}
            />
          ))}
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default StarPackagesGrid;
