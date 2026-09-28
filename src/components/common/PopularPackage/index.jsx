import React from "react";
import PopularPackageCard from "./PopularPackageCard";

const PopularPackage = () => {
  const Popular_Destination = [
    {
      image: "/common/PopularPackages/Image1.png",
      days: "6 Days / 5 Nights",
      place: "Lake Garda",
      price: "£180",
      person: "per person",
    },
    {
      image: "/common/PopularPackages/Image2.png",
      days: "6 Days / 5 Nights",
      place: "Paris Hill Tour",
      price: "£200",
      person: "per person",
    },
    {
      image: "/common/PopularPackages/Image3.png",
      days: "6 Days / 5 Nights",
      place: "Lake Garda",
      price: "£200",
      person: "per person",
    },
  ];
  return (
    <section className="flex flex-col gap-4 w-full">
      <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink">
        Popular packages
      </h2>
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
