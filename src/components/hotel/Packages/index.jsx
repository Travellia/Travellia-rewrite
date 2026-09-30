import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import React from "react";
import SideMenu from "./SideMenu/index.";
import PackagesClient from "./PackagesClient";
import SectionHeading from "@/components/ui/SectionHeading";
import { getHotelInfo } from "@/lib/data/umrahDetail/hotelInfo";
import { StarPackagesByTier } from "@/lib/data/hajj-umrah/StarPackagesData";

// Makkah and Madinah hotels from the reference material in
// references/Holy Travellers Misc Material/Hotels. Details come from
// hotelInfo.js and photos from the umrah package data, so both stay in sync.
const FEATURED_HOTELS = [
  { name: "Fairmont Clock Tower Makkah", city: "Makkah" },
  { name: "Pullman Zamzam Madinah", city: "Madinah" },
  { name: "Swissôtel Makkah", city: "Makkah" },
  { name: "Saja Al Madinah", city: "Madinah" },
  { name: "Sheraton Makkah Jabal Al Kaaba Hotel", city: "Makkah" },
  { name: "Emaar Taibah", city: "Madinah" },
];

const PACKAGE_CARDS = Object.values(StarPackagesByTier).flatMap(
  (tier) => tier.cards
);

const hotelImage = (name, city) => {
  const key = city === "Makkah" ? "makkah" : "madinah";
  const card = PACKAGE_CARDS.find((c) => c[key] === name);
  return card?.[`${key}Images`]?.[0];
};

const HOTEL_PACKAGES = FEATURED_HOTELS.map(({ name, city }, index) => {
  const info = getHotelInfo(name);

  return {
    id: String(index + 1),
    stars: info.stars,
    package: `${info.stars} STAR HOTEL`,
    title: name,
    location: `${city}, Saudi Arabia`,
    description: info.highlights?.slice(0, 3).join(" · "),
    image: hotelImage(name, city),
  };
});

const Packages = () => {
  const PACKAGES_DATA = HOTEL_PACKAGES;
  return (
    <section>
      <ContentLayoutWrapper className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Hotels near the Haram"
          title={
            <>
              Stays in Makkah
              <br />
              &amp; Madinah, <em>handpicked.</em>
            </>
          }
          intro="From steps-away 5-star towers to great-value 3-star hotels. Tell us your dates and we'll check the best rates for you."
        />
        <div className="flex flex-col gap-8 xl:grid xl:grid-cols-12 xl:gap-8">
          {/* Cards */}
          <div className="xl:col-span-8">
            <PackagesClient packages={PACKAGES_DATA} />
          </div>

          {/* Sidebar */}
          <aside className="xl:col-span-4">
            <div className="xl:sticky xl:top-28">
              <SideMenu />
            </div>
          </aside>
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default Packages;
