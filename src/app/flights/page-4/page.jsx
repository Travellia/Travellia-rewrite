import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import FilterSearch from "@/components/common/FilterSearch";
import RightMenu from "@/components/common/RightMenu";
import Welcome from "@/components/common/Welcome";
import React from "react";
import AirFlightLists from "@/lib/data/AirFlightList";
import AirFlightCard from "@/components/common/AirFlightCard";
import BookNow from "@/components/common/BookNow";
import PlanYourTrip from "@/components/common/PlanYourTrip";

const page = () => {
  const welcomeData = {
    slides: [
      { id: 1, image: "/flights/welcome/Image4.png" },
      { id: 2, image: "/flights/welcome/Image5.png" },
      { id: 3, image: "/flights/welcome/Image3.png" },
    ],
    title: "FLIGHT DETAIL",
  };

  const AIR_FLIGHTS_LIST = AirFlightLists;

  const imageData = {
    image: "/flights/page-4/bg.png",
    alt: "resturant",
  };

  return (
    <section className="relative flex flex-col">
      <Welcome data={welcomeData} />
      <div className="flex flex-col gap-7 xl:gap-10 relative z-10 -mt-24 md:-mt-40">
        <FilterSearch defaultTab="flights" />
        <ContentLayoutWrapper className="relative flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:gap-6">
          {/* AirFlightLists */}
          <div className="lg:col-span-8 space-y-10">
            {AIR_FLIGHTS_LIST.map((flight) => (
              <div key={flight.id}>
                <AirFlightCard data={flight} />
              </div>
            ))}
          </div>
          <div className="lg:col-span-4">
            <RightMenu />
          </div>
        </ContentLayoutWrapper>
        <div>
          <BookNow data={imageData} />
          <PlanYourTrip />
        </div>
      </div>
    </section>
  );
};

export default page;
