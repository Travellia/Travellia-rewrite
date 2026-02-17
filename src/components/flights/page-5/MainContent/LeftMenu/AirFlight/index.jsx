import React from "react";
import AirFlightCard from "./AirFlightCard";

const AirFlight = () => {
  const Flight_Data = [
    {
      id: "1",
      route: "Etihad Airways To Nairobi",
      going: {
        logo: "/flight/MainContent/LeftMenu/AirFlights/BR-logo.png",
        from: { time: "07:10", location: "KJA" },
        stop: { number: "1 Stop", location: "MOS" },
        to: { time: "08:10", location: "MIL" },
        time: "18H.20M",
      },
      return: {
        logo: "/flight/MainContent/LeftMenu/AirFlights/qatar-airways.jpg",
        from: { time: "08:10", location: "MIL" },
        stop: { number: "2 Stop", location: "CGN, VKO" },
        to: { time: "07:10", location: "KJA" },
        time: "18H.20M",
      },
      price: "240$",
    },
  ];

  return (
    <section>
      {Flight_Data.map((flight) => (
        <div key={flight.id}>
          <AirFlightCard data={flight} />
        </div>
      ))}
    </section>
  );
};

export default AirFlight;
