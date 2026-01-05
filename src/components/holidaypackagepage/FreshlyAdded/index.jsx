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
      image: "/holidayPackage/FreshlyAdded/Image-1.png",
      description: "Holiday Packages",
      startingPrice: "Starting From £1349",
    },
    {
      id: 2,
      image: "/holidayPackage/FreshlyAdded/Image-2.png",
      description: "Christmas Packages",
      startingPrice: "Starting From £1349",
    },
    {
      id: 3,
      image: "/holidayPackage/FreshlyAdded/Image-3.png",
      description: "Easter Packages",
      startingPrice: "Starting From £1349",
    },
    {
      id: 4,
      image: "/holidayPackage/FreshlyAdded/Image-4.png",
      description: "Abu Dhabi Stay",
      startingPrice: "Starting From £1349",
    },
    {
      id: 5,
      image: "/holidayPackage/FreshlyAdded/Image-5.png",
      description: "Dubai With Turkey Stay",
      startingPrice: "Starting From £1349",
    },
    {
      id: 6,
      image: "/holidayPackage/FreshlyAdded/Image-6.png",
      description: "Holiday Packages",
      startingPrice: "Starting From £1349",
    },
  ];

  return (
    <section className="relative z-1 bg-[url('/holidayPackage/FreshlyAdded/bg.png')] bg-center bg-cover">
      <Image
        fill
        src={"/holidayPackage/FreshlyAdded/bg.png"}
        className="absolute object-cover"
        loading="lazy"
      />
      <ContentLayoutWrapper className="flex flex-col gap-5 py-20 justify-center items-center relative z-2">
        {/* Header */}
        <div className="flex flex-col items-center">
          <p className="font-semibold">LUXURY ASSURING 5 STAR</p>
          <h1 className="text-4xl font-bold text-primary tracking-widest">
            HOLIDAY PACKAGE
          </h1>
        </div>

        {/* Description */}
        <div>
          {" "}
          <p className="text-gray-600 text-base text-center w-[90%] sm:w-[80%] m-auto">
            , sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit
            vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
            tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
            Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
            Duis leo. Sed fringilla
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
