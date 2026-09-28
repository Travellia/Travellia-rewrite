import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import React from "react";
import SideMenu from "./SideMenu/index.";
import PackagesClient from "./PackagesClient";
import Image from "next/image";
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
    <section className="relative">
      <Image
        src="/hotel/Ballon.png"
        alt="background"
        width={300}
        height={300}
        className="hidden lg:block absolute top-1/2 left-0 "
        loading="lazy"
      />

      <Image
        src="/hotel/passport.png"
        alt="passport"
        width={300}
        height={300}
        className="hidden lg:block absolute right-0 bottom-0 "
        loading="lazy"
      />
      <ContentLayoutWrapper className=" flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:gap-6">
        {/* Cards */}
        <div className="lg:col-span-8">
          <PackagesClient packages={PACKAGES_DATA} />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <SideMenu />
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default Packages;
