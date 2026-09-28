import FilterSearch from "@/components/common/FilterSearch";
import Welcome from "@/components/common/Welcome";
import LuxuryAssuring from "@/components/common/LuxuryAssuring";
import Question from "@/components/hajj-ummrah/Question";
import { LuxuryAssuringHajjUmmrahPackage } from "@/lib/data/hajj-umrah/LuxuryAssuringHajjUmmrahPackage";
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
    slides: [{ id: 1, image: "/hajj-ummrah/welcome/slide1.png" }],
    heading: "SCROLL DOWN",
    title: "BEST UMRAH PACKAGES",
  };

  const LUXURY_ASSURING_DATA = LuxuryAssuringHajjUmmrahPackage;

  const PACKAGE_DATA = PACKAGES_DATA;
  const BULLETS = Bullets;

  const imageData = {
    image: "/umrahDetail/BookNow/BookNow-bg.png",
    
    alt: "hajj-umrah",
  };

  return (
    <div className="flex flex-col">
      <Welcome data={welcomeData} />
      <div className="flex flex-col gap-7 xl:gap-10 relative z-10 -mt-24 md:-mt-40">
        <FilterSearch defaultTab={"umrah"} />
        <div className="relative space-y-5">
          <Image
            src="/hajj-ummrah/haram.png"
            alt="haram"
            fill
            sizes="100vw"
            className="object-contain absolute bottom-0 -z-10 pointer-events-none"
          />
          <LuxuryAssuring data={LUXURY_ASSURING_DATA} />
        </div>
        <div>
          <HalalFriendly />
          <BookNow data={imageData} />
        </div>
        <TravelItinearies data1={PACKAGE_DATA} data2={BULLETS} />
        <Question />
        <PlanYourTrip />
      </div>
    </div>
  );
};

export default page;
