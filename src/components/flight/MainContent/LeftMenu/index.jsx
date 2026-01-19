import React from "react";
import AirFlight from "./AirFlight";
import CallUs from "./CallUs";

const LeftMenu = () => {
  return (
    <section className="">
      <div className="flex flex-col gap-10">
        <AirFlight />
        <CallUs />
      </div>
    </section>
  );
};

export default LeftMenu;
