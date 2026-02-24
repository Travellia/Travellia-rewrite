import React from "react";
import popularFlightData from "@/lib/data/popularFlightsData";
import PopularFlights from "@/components/common/PopularFlights";

const FLIGHTS_CARDS_DATA = popularFlightData.slice(0, 3);

const PopularTours = ({ data }) => {
  return (
    <section className="flex flex-col justify-center items-center gap-10 md:justify-start md:items-start md:text-start">
      <div className="">
        <h1 className="text-2xl md:text-3xl text-black/70">POPULAR TOURS IN</h1>
        <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-primary text-center">
          {data.country}
        </h1>
      </div>
      <div className="">
        <PopularFlights
          cards={FLIGHTS_CARDS_DATA}
          show={false}
          enableImages={false}
          heading={false}
        />
      </div>
    </section>
  );
};

export default PopularTours;
