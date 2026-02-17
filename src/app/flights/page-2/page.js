import Welcome from "@/components/common/Welcome";
import FilterSearch from "@/components/common/FilterSearch";
import PopularFlights from "@/components/common/PopularFlights";
import popularFlightData from "@/lib/data/popularFlightsData";
import Testimonials from "@/components/flights/page-2/Testimonials";

import React from "react";

const page = () => {
  const welcomeData = {
    slides: [
      { id: 1, image: "/flights/welcome/Image1.png" },
      { id: 2, image: "/flights/welcome/Image2.png" },
      { id: 3, image: "/flights/welcome/Image3.png" },
    ],
    title: "TRAVELLIA",

    heightClassName: "h-[65vh] md:h-[72vh] lg:h-[77vh] xl:h-screen",
  };

  const FLIGHTS_CARDS_DATA = popularFlightData.slice(0, 12);

  return (
    <section className="relative flex flex-col">
      <Welcome data={welcomeData} />
      <div className="flex flex-col gap-7 xl:gap-10 -translate-y-10  md:-translate-y-40 lg:-translate-y-32 xl:-translate-y-50 z-1 -mb-20">
        <FilterSearch defaultTab="flights" />
        <PopularFlights cards={FLIGHTS_CARDS_DATA} show={false} />
        <div >
          <Testimonials />
        </div>
      </div>
    </section>
  );
};

export default page;
