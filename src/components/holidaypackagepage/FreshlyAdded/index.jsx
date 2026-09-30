import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import PackageCard from "@/components/common/PackageCard";
import SectionHeading from "@/components/ui/SectionHeading";
import React from "react";

const index = () => {
  const Packages = [
    {
      id: 1,
      image: "/holidayPackage/FreshlyAdded/Image-1.webp",
      description: "Paris City Break",
      startingPrice: "Starting From £1349",
    },
    {
      id: 2,
      image: "/holidayPackage/FreshlyAdded/Image-2.webp",
      description: "Istanbul Holidays",
      startingPrice: "Starting From £1349",
    },
    {
      id: 3,
      image: "/holidayPackage/FreshlyAdded/Image-3.webp",
      description: "Dubai Holidays",
      startingPrice: "Starting From £1349",
    },
    {
      id: 4,
      image: "/holidayPackage/FreshlyAdded/Image-4.webp",
      description: "Abu Dhabi Stay",
      startingPrice: "Starting From £1349",
    },
    {
      id: 5,
      image: "/holidayPackage/FreshlyAdded/Image-5.webp",
      description: "Doha, Qatar Stay",
      startingPrice: "Starting From £1349",
    },
    {
      id: 6,
      image: "/holidayPackage/FreshlyAdded/Image-6.webp",
      description: "Morocco Holidays",
      startingPrice: "Starting From £1349",
    },
  ];

  // Two text tiles sit between the photos, like an editorial grid.
  const tiles = [
    { type: "text", id: "t1", text: "Handpicked holidays.", sub: "Planned around you." },
    ...Packages.slice(0, 4),
    { type: "text", id: "t2", text: "Flights, hotels & transfers.", sub: "All in one booking." },
    ...Packages.slice(4),
  ];

  return (
    <section>
      <ContentLayoutWrapper className="flex flex-col gap-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Luxury assuring 5 star"
            title={
              <>
                Holidays worth
                <br />
                <em>packing for.</em>
              </>
            }
          />
          <p className="max-w-md text-ink/65">
            Handpicked holidays to some of the world&apos;s most loved
            destinations. Each package includes return flights, quality hotels
            and transfers, with flexible dates and family-friendly options, so
            you can enjoy a stress-free getaway from the moment you land.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-4 lg:grid-cols-4">
          {tiles.map((tile) =>
            tile.type === "text" ? (
              <div
                key={tile.id}
                className="flex aspect-[3/4] flex-col justify-center gap-2 rounded-card bg-sand-deep p-5 text-center"
              >
                <p className="font-display text-lg font-bold uppercase leading-tight tracking-tight text-ink md:text-xl">
                  {tile.text}
                </p>
                <p className="font-serif text-lg italic text-gold-deep">{tile.sub}</p>
              </div>
            ) : (
              <a
                key={tile.id}
                href="#plan-your-trip"
                className="relative aspect-[3/4] overflow-hidden rounded-card shadow-soft"
              >
                <PackageCard data={tile} />
              </a>
            )
          )}
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
