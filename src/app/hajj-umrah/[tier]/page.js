import FilterSearch from "@/components/common/FilterSearch";
import Welcome from "@/components/common/Welcome";
import StarPackagesGrid from "@/components/common/StarPackagesGrid";
import Question from "@/components/hajj-ummrah/Question";
import { StarPackagesByTier } from "@/lib/data/hajj-umrah/StarPackagesData";
import HalalFriendly from "@/components/hajj-ummrah/HalalFriendly";
import React from "react";
import Image from "next/image";
import BookNow from "@/components/common/BookNow";
import TravelItinearies from "@/components/common/TravelItinearies";
import { PACKAGES_DATA } from "@/lib/data/hajj-umrah/TravelItineariesPackageData-hajj-umrah";
import { Bullets } from "@/lib/data/hajj-umrah/TravelItineariesBullets-hajj-umrah";
import PlanYourTrip from "@/components/common/PlanYourTrip";
import { notFound } from "next/navigation";

const page = async (props) => {
  const params = await props.params;
  const STAR_PACKAGES_DATA = StarPackagesByTier[params.tier];

  if (!STAR_PACKAGES_DATA) {
    notFound();
  }

  const welcomeData = {
    slides: [{ id: 1, image: "/hajj-ummrah/welcome/slide1.png" }],
    heading: "SCROLL DOWN",
    title: "BEST UMMRAH PACKAGES",
    heightClassName: "h-[65vh] md:h-[72vh] lg:h-[77vh] xl:h-[90vh]",
  };

  const PACKAGE_DATA = PACKAGES_DATA;
  const BULLETS = Bullets;

  const imageData = {
    image: "/umrahDetail/BookNow/BookNow-bg.png",
    alt: "hajj-umrah",
  };

  return (
    <div className="flex flex-col">
      <Welcome data={welcomeData} />
      <div className="flex flex-col gap-7 xl:gap-10 -translate-y-10  md:-translate-y-40 lg:-translate-y-32 xl:-translate-y-50 z-1 -mb-20">
        <FilterSearch defaultTab={"umrah"} />
        <div className="relative space-y-5">
          <Image
            src="/hajj-ummrah/haram.png"
            alt="haram"
            fill
            sizes="100vw"
            className="object-contain absolute bottom-0 -z-10 pointer-events-none"
          />
          <StarPackagesGrid data={STAR_PACKAGES_DATA} tier={params.tier} />
        </div>
        <div>
          <HalalFriendly />
          <BookNow data={imageData} />
        </div>
        <TravelItinearies data1={PACKAGE_DATA} data2={BULLETS} />
        <PlanYourTrip />
        <Question />
      </div>
    </div>
  );
};

export default page;
