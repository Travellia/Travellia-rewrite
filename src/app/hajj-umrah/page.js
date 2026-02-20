import FilterSearch from "@/components/common/FilterSearch";
import Welcome from "@/components/common/Welcome";
import LuxuryAssuring from "@/components/common/LuxuryAssuring";
import Question from "@/components/hajj-ummrah/Question";
import { LuxuryAssuringHajjUmmrahPackage } from "@/lib/data/holidayPackage/LuxuryAssuringHajjUmmrahPackage";
import HalalFriendly from "@/components/hajj-ummrah/HalalFriendly";
import React from "react";
import Image from "next/image";
import BookNow from "@/components/common/BookNow";
import TravelItinearies from "@/components/common/TravelItinearies";
import { PACKAGES_DATA } from "@/lib/data/hajj-umrah/TravelItineariesPackageData-hajj-umrah";
import { Bullets } from "@/lib/data/hajj-umrah/TravelItineariesBullets-hajj-umrah";
import PlanYourTrip from "@/components/common/PlanYourTrip";

const page = () => {
  const welcomeData = {
    slides: [{ id: 1, image: "/hajj-umrah/welcome/slide1.png" }],
    heading: "SCROLL DOWN",
    title: "BEST UMMRAH PACKAGES",
    heightClassName: "h-[65vh] md:h-[72vh] lg:h-[77vh] xl:h-screen",
  };

  const LUXURY_ASSURING_DATA = LuxuryAssuringHajjUmmrahPackage;

  const PACKAGE_DATA = PACKAGES_DATA;
  const BULLETS = Bullets;

  const imageData = {
    image: "/hajj-ummrah/BookNow/bgImage.png",
    alt: "hajj-umrah",
  };

  return (
    <div className="flex flex-col">
      <Welcome data={welcomeData} />
      <div className="flex flex-col gap-7 xl:gap-10 -translate-y-10  md:-translate-y-40 lg:-translate-y-32 xl:-translate-y-50 z-1 -mb-20">
        <FilterSearch defaultTab={"hotels"}  />
        <div className="space-y-5">
          <Image
            src="/hajj-ummrah/halalFriendly/haram.png"
            alt="haram"
            fill
            className="object-contain absolute bottom-0"
          />
          <LuxuryAssuring data={LUXURY_ASSURING_DATA} />
          <Question />
        </div>
        <div>
          <HalalFriendly />
          <BookNow data={imageData} />
        </div>
        <TravelItinearies data1={PACKAGE_DATA} data2={BULLETS} />
        <PlanYourTrip />
      </div>
    </div>
  );
};

export default page;
