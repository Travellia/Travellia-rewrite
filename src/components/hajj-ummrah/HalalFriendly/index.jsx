import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import PackageCard from "@/components/common/PackageCard";
import ArrowButton from "@/components/ui/ArrowButton";
import SectionHeading from "@/components/ui/SectionHeading";
import React from "react";

const index = () => {
  const Packages = [
    {
      id: 1,
      image: "/hajj-ummrah/halalFriendly/Image-1.png",
      description: "Ramadan Packages",
      startingPrice: "Starting From £1349",
    },
    {
      id: 2,
      image: "/hajj-ummrah/halalFriendly/Image-2.png",
      description: "Christmas Packages",
      startingPrice: "Starting From £1349",
    },
    {
      id: 3,
      image: "/hajj-ummrah/halalFriendly/Image-3.png",
      description: "Easter Packages",
      startingPrice: "Starting From £1349",
    },
    {
      id: 4,
      image: "/hajj-ummrah/halalFriendly/Image-4.png",
      description: "Umrah with Abu Dhabi Stay",
      startingPrice: "Starting From £1349",
    },
    {
      id: 5,
      image: "/hajj-ummrah/halalFriendly/Image-5.png",
      description: "Umrah with Turkey Stay",
      startingPrice: "Starting From £1349",
    },
    {
      id: 6,
      image: "/hajj-ummrah/halalFriendly/Image-6.png",
      description: "Umrah with Abu Dhabi Stay",
      startingPrice: "Starting From £1349",
    },
  ];

  return (
    <section>
      <ContentLayoutWrapper className="flex flex-col gap-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Halal-friendly"
            title={
              <>
                Holiday abutting
                <br />
                <em>Umrah package.</em>
              </>
            }
          />
          <p className="max-w-md text-ink/65">
            Extend your Umrah journey with a holiday that follows the rules of
            Islamic Shariah. Visit countries with hotels serving halal food,
            alcohol-free properties, private beaches, secluded pools and
            women-only spas. Add a special spark of excitement in your Umrah
            trip by having a holiday stay in any halal-friendly destination.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {Packages.map((place) => (
            <a
              key={place.id}
              href="#plan-your-trip"
              className="relative h-80 overflow-hidden rounded-card shadow-soft md:h-96"
            >
              <PackageCard data={place} />
            </a>
          ))}
        </div>
        <ArrowButton href="#plan-your-trip">Enquire Now</ArrowButton>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
