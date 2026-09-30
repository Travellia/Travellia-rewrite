import FilterSearch from "@/components/common/FilterSearch";
import Welcome from "@/components/common/Welcome";
import StarPackagesGrid from "@/components/common/StarPackagesGrid";
import Question from "@/components/hajj-ummrah/Question";
import { StarPackagesByTier } from "@/lib/data/hajj-umrah/StarPackagesData";
import HalalFriendly from "@/components/hajj-ummrah/HalalFriendly";
import React from "react";
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
    slides: [{ id: 1, image: "/hajj-ummrah/welcome/slide1.webp" }],
    heading: "Umrah & Hajj packages",
    title: (
      <>
        A journey of <em>the heart.</em>
      </>
    ),
    subtitle:
      "All-inclusive Umrah packages with flights, visa, hotels near the Haram, transport and Ziyarat.",
  };

  const PACKAGE_DATA = PACKAGES_DATA;
  const BULLETS = Bullets;

  const imageData = {
    image: "/umrahDetail/BookNow/BookNow-bg.webp",
    alt: "",
  };

  return (
    <div className="flex flex-col">
      <Welcome data={welcomeData} />
      <div className="relative z-10 -mt-24 flex flex-col gap-20 md:-mt-40 md:gap-28">
        <FilterSearch defaultTab={"umrah"} />
        <StarPackagesGrid data={STAR_PACKAGES_DATA} tier={params.tier} />
        <HalalFriendly />
        <BookNow data={imageData} />
        <TravelItinearies data1={PACKAGE_DATA} data2={BULLETS} href="#plan-your-trip" />
        <Question />
        <PlanYourTrip />
      </div>
    </div>
  );
};

export default page;
