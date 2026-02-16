import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <section className="relative h-auto my-10">
      <Image
        src={"/flights/FamilyAdventure/bg.png"}
        alt="Family adventure - mobile and plane"
        fill
        className="w-full h-auto  absolute object-cover"
        loading="lazy"
      />
      <ContentLayoutWrapper
        className={"flex flex-col gap-5 relative z-2 h-auto md:py-20"}
      >
        {/* Header div */}
        <div className="grid grid-cols-1 md:grid-cols-10 grid-rows-1 items-center justify-between h-full gap-6 px-4 md:px-0">
          {/* Image Section */}
          <div className="col-span-1 md:col-start-1 md:col-end-6 w-full h-auto flex justify-center md:justify-start">
            <Image
              src={"/home/adventure/mobile-and-plane.png"}
              alt="Family adventure - mobile and plane"
              width={800}
              height={800}
              className="w-full h-auto max-h-[95vh] object-contain"
              loading="lazy"
            />
          </div>

          {/* Text & Button Section */}
          <div className="col-span-1 md:col-start-6 md:col-end-11 flex flex-col gap-4 text-center md:text-left">
            <div>
              <h3 className="uppercase text-gray-600 text-lg font-semibold">
                Family adventures
              </h3>
              <h1 className="text-primary uppercase font-bold text-4xl ">
                Book your flights
              </h1>
              <h2 className="text-gray-800 uppercase font-thin text-4xl ">
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
            <p className="text-xl font-bold text-gray-500 max-w-lg mx-auto md:mx-0">
              Agent will be in touch with you.
            </p>

            <div className="flex justify-center md:justify-start mt-10">
              <Button className="px-12 py-6 rounded-full text-xl" size={"lg"}>
                View Packages
              </Button>
            </div>
          </div>
        </div>

        {/* card div */}
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
