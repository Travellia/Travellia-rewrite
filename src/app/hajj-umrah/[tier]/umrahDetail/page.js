import BookNow from "@/components/common/BookNow";
import PlanYourTrip from "@/components/common/PlanYourTrip";
import FilterSearch from "@/components/common/FilterSearch";
import Welcome from "@/components/common/Welcome";
import HotelPackage from "@/components/umrahDetail/umrahPackage/HotelPackage";
import { BookNowList } from "@/lib/data/umrahDetail/BookNowList";
import { buildHotelPackageDetails } from "@/lib/data/umrahDetail/HotelPackageDetail";
import { StarPackagesByTier } from "@/lib/data/hajj-umrah/StarPackagesData";
import HotelGallery from "@/components/umrahDetail/HotelGallery";
import PackageInclude from "@/components/umrahDetail/PackageInclude";
import React from "react";
import { notFound } from "next/navigation";

const page = async (props) => {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const tierData = StarPackagesByTier[params.tier];

  if (!tierData) {
    notFound();
  }

  // `?package=` identifies which of the tier's cards was clicked; fall back to
  // the first card so a bare /umrahDetail URL still renders a real package.
  const packageId = Number(searchParams?.package);
  const card =
    tierData.cards.find((item) => item.id === packageId) ?? tierData.cards[0];

  const welcomeData = {
    slides: [{ id: 1, image: "/umrahDetail/welcome/slide1.webp" }],
    heading: `${tierData.stars}-star Umrah package`,
    title: (
      <>
        {card.nights?.split(" (")[0] ?? "Your Umrah"} <em>in the Holy Cities.</em>
      </>
    ),
    subtitle: `${card.makkah} in Makkah and ${card.madinah} in Madinah, ${card.start?.toLowerCase() ?? "from"} ${card.price} per person.`,
  };

  const { makkah: MAKKAH_HOTEL_PACKAGE, madinah: MADINAH_HOTEL_PACKAGE } =
    buildHotelPackageDetails(card, tierData.stars);

  const imageData = {
    image: "/umrahDetail/BookNow/BookNow-bg.webp",
    alt: "",
  };
  const imageData2 = {
    image: "/umrahDetail/BookNow/bookNow.webp",
    alt: "",
  };

  const BOOKNOWLIST = BookNowList;

  return (
    <div className="flex flex-col">
      <Welcome data={welcomeData} />
      <div className="relative z-10 -mt-24 flex flex-col gap-20 md:-mt-40 md:gap-28">
        <FilterSearch defaultTab={"umrah"} />
        <HotelPackage data={MAKKAH_HOTEL_PACKAGE} />
        <HotelPackage data={MADINAH_HOTEL_PACKAGE} reverse />
        <BookNow
          data={imageData}
          data2={imageData2}
          data3={BOOKNOWLIST}
          reverse
        />
        <HotelGallery />
        <PackageInclude />
        <PlanYourTrip />
      </div>
    </div>
  );
};

export default page;
