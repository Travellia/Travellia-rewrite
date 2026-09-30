import React from "react";
import popularFlightData from "@/lib/data/popularFlightsData";
import PopularFlights from "@/components/common/PopularFlights";
import SectionHeading from "@/components/ui/SectionHeading";

const FLIGHTS_CARDS_DATA = popularFlightData.slice(0, 3);

const PopularTours = ({ data }) => {
  return (
    <section className="flex flex-col gap-10">
      <SectionHeading
        eyebrow="Keep exploring"
        title={
          <>
            Popular tours in <em>{data.country}</em>
          </>
        }
      />
      <PopularFlights
        cards={FLIGHTS_CARDS_DATA}
        show={false}
        enableImages={false}
        heading={false}
      />
    </section>
  );
};

export default PopularTours;
