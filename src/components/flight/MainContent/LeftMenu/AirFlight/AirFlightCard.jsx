import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const AirFlightCard = ({ data }) => {
  return (
    <Card className="relative bg-secondary rounded-4xl px-6 py-5  flex-flex-col gap-3 shadow-lg">
      {/* Floating Header */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white font-semibold px-6 py-2 rounded-full text-sm shadow">
        {data.route}
      </div>

      {/* Main Content */}
      <div className=" flex flex-col py-5 xl:flex-row gap-8 md:gap-4  items-center">
        {/* Flight Details */}
        <div className="flex flex-col gap-6 flex-1">
          {/* Going */}
          <FlightRow data={data.going} />

          {/* Return */}
          <FlightRow data={data.return} />
        </div>

        {/* Divider */}
        <div className=" rotate-180 block w-[80%] xl:w-px h-0.5 xl:h-40 bg-gray-400/40 " />

        {/* Price Section */}
        <div className="flex justify-evenly items-center gap-10 md:gap-20 xl:flex xl:flex-col xl:items-center xl:gap-4 lg:min-w-40">
          <div className="text-4xl font-bold ">{data.price}</div>

          <Button className="rounded-full px-6">Book Now</Button>

          <div className="flex gap-4">
            <Image
              src="/flight/MainContent/LeftMenu/AirFlights/phone logo.png"
              alt="phone"
              width={22}
              height={22}
              loading="lazy"
            />
            <Image
              src="/flight/MainContent/LeftMenu/AirFlights/Whatsapp Logo.png"
              alt="whatsapp"
              width={22}
              height={22}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className=" text-center">
        <button className="text-primary font-medium hover:underline">
          More Etihad Airways Flights »
        </button>
      </div>
    </Card>
  );
};

/* Reusable Flight Row */
const FlightRow = ({ data }) => {
  return (
    <div className="flex flex-col gap-5 md:flex md:flex-row md:items-center md:gap-6">
      <Image src={data.logo} alt="logo" width={80} height={80} loading="lazy" />

      <div className="flex gap-10 text-center">
        <FlightCol title={data.from.time} sub={data.from.location} />
        <FlightCol title={data.stop.number} sub={data.stop.location} />
        <FlightCol title={data.to.time} sub={data.to.location} />
        <div className="flex items-center text-sm font-medium text-gray-600">
          {data.time}
        </div>
      </div>
    </div>
  );
};

const FlightCol = ({ title, sub }) => (
  <div className="flex flex-col items-center md:min-w-25 lg:min-w-15">
    <div className="text-lg font-bold">{title}</div>
    <div className="text-sm font-medium text-gray-600">{sub}</div>
  </div>
);

export default AirFlightCard;
