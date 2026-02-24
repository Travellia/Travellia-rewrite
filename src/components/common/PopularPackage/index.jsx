import React from "react";
import PopularPackageCard from "./PopularPackageCard";

const PopularPackage = () => {
  const Popular_Destination = [
    {
      image: "/common/PopularPackages/Image1.png",
      days: "5 Days/6 Nights",
      place: "LAKE GARDA",
      price: "$180/",
      person: "Per Person",
    },
    {
      image: "/common/PopularPackages/Image2.png",
      days: "5 Days/6 Nights",
      place: "PARIS HILL TOUR",
      price: "$200/",
      person: "Per Person",
    },
    {
      image: "/common/PopularPackages/Image3.png",
      days: "5 Days/6 Nights",
      place: "LAKE GARDA",
      price: "$200/",
      person: "Per Person",
    },
  ];
  return (
    <section className="flex flex-col gap-5 w-full">
      <h1 className="text-2xl lg:text-2xl xl:text-3xl font-bold  text-black">
        {" "}
        POPULAR PACKAGES
      </h1>
      {Popular_Destination.map((card, index) => (
        <PopularPackageCard
          key={index}
          index={index}
          data={card}
          total={Popular_Destination.length}
        />
      ))}
    </section>
  );
};

export default PopularPackage;
