import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import PackageCard from "@/components/common/PackageCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const index = () => {
  const Packages = [
    {
      id: 1,
      image: "/hajj-ummrah/halalFriendly/Image-1.png",
      description: "Ramadan Packages",
      startingPrice: "Starting From £1349",
    },
    {
      id: 2,
      image: "/hajj-ummrah/halalFriendly/Image-2.png",
      description: "Christmas Packages",
      startingPrice: "Starting From £1349",
    },
    {
      id: 3,
      image: "/hajj-ummrah/halalFriendly/Image-3.png",
      description: "Easter Packages",
      startingPrice: "Starting From £1349",
    },
    {
      id: 4,
      image: "/hajj-ummrah/halalFriendly/Image-4.png",
      description: "Umrah with Abu Dhabi Stay",
      startingPrice: "Starting From £1349",
    },
    {
      id: 5,
      image: "/hajj-ummrah/halalFriendly/Image-5.png",
      description: "Umrah With Turkey Stay",
      startingPrice: "Starting From £1349",
    },
    {
      id: 6,
      image: "/hajj-ummrah/halalFriendly/Image-6.png",
      description: "Umrah with Abu Dhabi Stay",
      startingPrice: "Starting From £1349",
    },
  ];

  return (
    <section className="relative ">
      <Image
        src={"/hajj-ummrah/halalfriendly-bg.png"}
        alt="qaba"
        fill
        className="absolute object-cover"
        loading="lazy"
      />
      <ContentLayoutWrapper className="flex flex-col gap-5 py-20 justify-center items-center relative ">
        {" "}
        {/* Header */}
        <div className="flex flex-col items-center">
          <p className="font-semibold">HALAL-FRIENDLY</p>
          <h1 className="text-3xl lg:text-4xl font-bold text-primary text-center tracking-widest">
            HOLIDAY ABUTTING UMRAH PACKAGE
          </h1>
        </div>
        {/* Description */}
        <div>
          {" "}
          <p className="text-gray-600 text-base text-center w-[90%] sm:w-[80%] m-auto">
            Enjoy your Umrah journey with long holidays complying the rules of
            Islamic Shariet. Visit countries with special arrangements of hotels
            serving halal food, alcohol-free properties, cloistered beaches,
            isolated pools, and women only spas. Add a special spark of
            excitement in your Umrah trip by having a holiday stay in any
            halal-friendly destination.
          </p>
        </div>
        {/* Card */}
        <div className="flex flex-col justify-center items-center gap-10  w-full">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-6  w-full">
            {Packages.map((place) => {
              return (
                <Card
                  key={place.id}
                  className="relative overflow-hidden rounded-4xl h-96 group cursor-pointer py-0"
                >
                  <PackageCard data={place} text />
                </Card>
              );
            })}
          </div>
          <Button className="btn-main ">Load More</Button>
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
