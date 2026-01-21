import React from "react";
import AirFlight from "./AirFlight";
import CallUs from "./CallUs";
import FlightForm from "./FlightForm";

const LeftMenu = () => {
  return (
    <section className="flex flex-col gap-5">
      <div className="flex flex-col gap-10 pb-5">
        <AirFlight />
        <CallUs />
      </div>
      <FlightForm />
    </section>
  );
};

export default LeftMenu;
