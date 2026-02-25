import React from "react";
import AirFlightLists from "@/lib/data/AirFlightList";
import AirFlightCard from "@/components/common/AirFlightCard";

const AirFlight = () => {
  const AIR_FLIGHTS_LIST = AirFlightLists[0];

  return (
    <section>
      <AirFlightCard data={AIR_FLIGHTS_LIST} />
    </section>
  );
};

export default AirFlight;
