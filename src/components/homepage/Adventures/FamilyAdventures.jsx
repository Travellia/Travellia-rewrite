import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import PopularDestination from "@/components/homepage/PopularDestination";

const FamilyAdventures = () => {
  return (
    <section className="relative overflow-hidden pt-12 sm:pt-20 md:pt-30 pb-12 sm:pb-20 md:pb-30">
      <Image
        src={"/home/adventure/okl.png"}
        alt="okl.png"
        fill
        sizes="100vw"
        className="absolute top-0 left-0 z-1 "
        loading="lazy"
      />
      <div className="w-32/30 h-1/4 absolute left-0 top-30 z-1">
        <Image
          src={"/shapes/paper-plane.png"}
          alt="paper-plan.png"
          fill
          sizes="100vw"
          loading="lazy"
        />
      </div>
      <ContentLayoutWrapper className={"flex flex-col gap-5 relative z-2"}>
        {/* Header div */}
        <div className="grid grid-cols-1 md:grid-cols-10 grid-rows-1 items-center justify-between h-full gap-6 px-4 md:px-0">
          {/* Image Section */}
          <div className="col-span-1 md:col-start-1 md:col-end-6 w-full h-full flex justify-center md:justify-start">
            <Image
              src={"/home/adventure/mobile-and-plane.png"}
              alt="Family adventure - mobile and plane"
              width={800}
              height={600}
              className="w-full h-auto max-h-[75%] object-contain"
              loading="lazy"
            />
          </div>

          {/* Text & Button Section */}
          <div className="col-span-1 md:col-start-6 md:col-end-11 flex flex-col gap-4 text-center md:text-left">
            <div>
              <h3 className="uppercase text-gray-600 text-lg font-semibold">
                Family adventures
              </h3>
              <h1 className="text-primary uppercase font-bold text-4xl md:text-5xl">
                Book your flights
              </h1>
              <h2 className="text-gray-800 uppercase font-thin text-4xl md:text-5xl">
                Effortlessly
              </h2>
            </div>
            <p className="text-base text-gray-500 max-w-lg mx-auto md:mx-0">
              Enjoy seamless booking to our top family-friendly destinations.
              Whether it's theme parks, wildlife safaris, interactive museums,
              or outdoor activities, embark on exciting adventures and create
              lasting memories with your loved ones in safe, fun-filled
              environments.
            </p>
            <div className="flex justify-center md:justify-start mt-10">
              <Button className="px-12 py-6 rounded-full text-xl" size={"lg"}>
                View Packages
              </Button>
            </div>
          </div>
        </div>
      </ContentLayoutWrapper>
      <div className="relative z-2">
        <PopularDestination />
      </div>
    </section>
  );
};

export default FamilyAdventures;
