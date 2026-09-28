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
import Image from "next/image";
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
    slides: [{ id: 1, image: "/umrahDetail/welcome/slide1.png" }],
    title: "DETAIL PAGE",
  };

  const { makkah: MAKKAH_HOTEL_PACKAGE, madinah: MADINAH_HOTEL_PACKAGE } =
    buildHotelPackageDetails(card, tierData.stars);

  const imageData = {
    image: "/umrahDetail/BookNow/BookNow-bg.png",
    alt: "resturant",
  };
  const imageData2 = {
    image: "/umrahDetail/BookNow/bookNow.png",
    alt: "resturant",
  };

  const BOOKNOWLIST = BookNowList;

  return (
    <div className="flex flex-col">
      <Welcome data={welcomeData} />
      <div className="flex flex-col gap-7 xl:gap-10 relative z-10 -mt-24 md:-mt-40">
        <FilterSearch defaultTab={"umrah"} />

        <div className="flex flex-col gap-7 xl:gap-20 relative">
          <Image
            src="/umrahDetail/umrahPackage/makkah.png"
            alt="makkah"
            height={1000}
            width={1000}
            className="hidden lg:block absolute bottom-0 right-0 -z-10 pointer-events-none"
            loading="lazy"
          />
          <Image
            src="/umrahDetail/umrahPackage/madinah.png"
            alt="makkah"
            height={1000}
            width={1000}
            className="hidden lg:block absolute bottom-0 left-0 -z-10 pointer-events-none"
            loading="lazy"
          />
          <Image
            src="/umrahDetail/umrahPackage/dot.png"
            alt="makkah"
            height={1000}
            width={1000}
            className="hidden lg:block absolute w-full right-0 -translate-y-10 -z-10 pointer-events-none"
            loading="lazy"
          />

          <HotelPackage data={MAKKAH_HOTEL_PACKAGE} />
          <HotelPackage data={MADINAH_HOTEL_PACKAGE} reverse />
          <BookNow
            data={imageData}
            data2={imageData2}
            data3={BOOKNOWLIST}
            reverse
          />
        </div>

        <div>
          <HotelGallery />
          <PackageInclude />
        </div>
        <PlanYourTrip />
      </div>
    </div>
  );
};

export default page;
