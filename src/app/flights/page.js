import Welcome from "@/components/flight/welcome";
import FilterSearch from "@/components/flight/FilterSearch";
import MainContent from "@/components/flight/MainContent";
import React from "react";
import PlanYourTrip from "@/components/common/PlanYourTrip";
import Image from "next/image";

const page = () => {
  return (
    <section className="relative flex flex-col">
      <Image
        src="/flight/plan.png"
        alt="Plan Image"
        width={1000}
        height={1000}
        className=" absolute w-[25%] lg:w-[35%] h-auto bottom-1 z-10 translate-y-25 md:translate-y-5 lg:translate-y-25  xl:translate-y-45  "
      />
      <Welcome />
      <div className="flex flex-col gap-7 xl:gap-10 -translate-y-10  md:-translate-y-40 lg:-translate-y-32 xl:-translate-y-50 z-1 -mb-20">
        <FilterSearch defaultTab="flights" />
        <MainContent />
        <PlanYourTrip />
      </div>
    </section>
  );
};

export default page;
