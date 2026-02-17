import Welcome from "@/components/common/Welcome";
import MainContent from "@/components/flights/page-5/MainContent";
import React from "react";
import PlanYourTrip from "@/components/common/PlanYourTrip";
import Image from "next/image";
import FilterSearch from "@/components/common/FilterSearch";

const page = () => {
  const welcomeData = {
    slides: [
      { id: 1, image: "/flights/welcome/Image4.png" },
      { id: 2, image: "/flights/welcome/Image5.png" },
      { id: 3, image: "/flights/welcome/Image3.png" },
    ],
    title: "FLIGHT DETAIL",

    heightClassName: "h-[65vh] md:h-[72vh] lg:h-[77vh] xl:h-screen",
  };

  const imageData = {
    image: "/flights/page-1/booknow.png",
    alt: "resturant",
  };

  return (
    <section className="relative flex flex-col">
      <Image
        src="/common/plane.png"
        alt="Plan Image"
        width={1000}
        height={1000}
        className=" absolute w-[22%] lg:w-[32%] h-auto bottom-1 z-10 translate-y-25 md:translate-y-5 lg:translate-y-25  xl:translate-y-30  "
      />
      <Welcome data={welcomeData} />
      <div className="flex flex-col gap-7 xl:gap-10 -translate-y-10  md:-translate-y-40 lg:-translate-y-32 xl:-translate-y-50 z-1 -mb-20">
        <FilterSearch defaultTab="flights" />
        <MainContent />
        <PlanYourTrip />
      </div>
    </section>
  );
};

export default page;
