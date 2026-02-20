import FilterSearch from "@/components/common/FilterSearch";
import Welcome from "@/components/common/Welcome";
import HotelPackage from "@/components/umrahDetail/umrahPackage/HotelPackage";
import { MADINAH_PACKAGE_DETAIL } from "@/lib/data/umrahDetail/MadinahHotelPackage copy";
import { MAKKAH_PACKAGE_DETAIL } from "@/lib/data/umrahDetail/MakkahHotelPackage";
import Image from "next/image";
import React from "react";

const page = () => {
  const welcomeData = {
    slides: [{ id: 1, image: "/umrahDetail/welcome/slide1.png" }],
    title: "DETAIL PAGE",
    heightClassName: "h-[65vh] md:h-[72vh] lg:h-[77vh] xl:h-screen",
  };

  const MAKKAH_HOTEL_PACKAGE = MAKKAH_PACKAGE_DETAIL;
  const MADINAH_HOTEL_PACKAGE = MADINAH_PACKAGE_DETAIL;

  return (
    <div className="flex flex-col">
      <Welcome data={welcomeData} />
      <div className="flex flex-col gap-7 xl:gap-10 -translate-y-10  md:-translate-y-40 lg:-translate-y-32 xl:-translate-y-50 z-1 -mb-20">
        <FilterSearch defaultTab={"umrah"} />
        <div className="flex flex-col gap-7 xl:gap-10 relative">
          <Image
            src="/umrahDetail/umrahPackage/makkah.png"
            alt="makkah"
            height={1000}
            width={1000}
            className="hidden lg:block absolute bottom-0 right-0"
          />
          <Image
            src="/umrahDetail/umrahPackage/madinah.png"
            alt="makkah"
            height={1000}
            width={1000}
            className="hidden lg:block absolute bottom-0 left-0"
          />
          <Image
            src="/umrahDetail/umrahPackage/dot.png"
            alt="makkah"
            height={1000}
            width={1000}
            className="hidden lg:block absolute w-full right-0 -translate-y-10"
          />

          <HotelPackage data={MAKKAH_HOTEL_PACKAGE} />
          <HotelPackage data={MADINAH_HOTEL_PACKAGE} reverse />
        </div>
      </div>
    </div>
  );
};

export default page;
