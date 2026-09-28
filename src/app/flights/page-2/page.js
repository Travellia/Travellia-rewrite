import Welcome from "@/components/common/Welcome";
import FilterSearch from "@/components/common/FilterSearch";
import PopularFlights from "@/components/common/PopularFlights";
import popularFlightData from "@/lib/data/popularFlightsData";
import Testimonials from "@/components/common/Testimonial";
import React from "react";
import BookNow from "@/components/common/BookNow";
import PlanYourTrip from "@/components/common/PlanYourTrip";
import { TESTIMONIALS } from "@/lib/data/Testimonial";

const page = () => {
  const welcomeData = {
    slides: [
      { id: 1, image: "/flights/welcome/Image1.png" },
      { id: 2, image: "/flights/welcome/Image2.png" },
      { id: 3, image: "/flights/welcome/Image3.png" },
    ],
    title: "TRAVELLIA",
  };

  const imageData = {
    image: "/flights/page-2/bg.png",
    alt: "resturant",
  };

  const FLIGHTS_CARDS_DATA = popularFlightData.slice(0, 12);

  const TESTIMONIAL = TESTIMONIALS;

  return (
    <section className="relative flex flex-col">
      <Welcome data={welcomeData} />
      <div className="flex flex-col gap-7 xl:gap-10 relative z-10 -mt-24 md:-mt-40">
        <FilterSearch defaultTab="flights" />
        <PopularFlights cards={FLIGHTS_CARDS_DATA} show={false} />
        <div>
          <Testimonials data={TESTIMONIAL} />
          <BookNow data={imageData} />
          <PlanYourTrip />
        </div>
      </div>
    </section>
  );
};

export default page;
