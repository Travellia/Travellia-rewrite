import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import StarPackageCard from "./StarPackageCard";
import React from "react";

const StarPackagesGrid = ({ data }) => {
  const headingMatch = data.heading?.match(/(\d+)\s*Star\s*(\d+)\s*NIGHTS/i);
  const description = headingMatch
    ? `${headingMatch[1]}-Star December Ummrah Packages for ${headingMatch[2]} Nights - All-inclusive`
    : null;

  return (
    <section>
      <ContentLayoutWrapper className=" sm:pt-5 flex justify-center items-center ">
        <div className="flex flex-col gap-5 m-auto">
          {/* Header */}
          <div className="flex flex-col items-center">
            <h1 className="text-4xl font-bold text-primary tracking-widest">
              {data.heading}
            </h1>
          </div>

          {/* Line */}
          <div className="flex justify-center">
            <hr className="border-primary border-t-2 w-[20%]" />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-5">
            {data.cards.map((card) => (
              <StarPackageCard
                key={card.id}
                card={card}
                description={description}
                stars={data.stars}
              />
            ))}
          </div>
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default StarPackagesGrid;
