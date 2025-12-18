import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const BOOKING_STEPS = [
  {
    title: "Choose Destination",
    icon: "/home/hotel-booking/destination.png",
    description:
      "Find your perfect travel spot from our diverse list of destinations.",
  },
  {
    title: "Check Availability",
    icon: "/home/hotel-booking/wall-clock.png",
    description: "Get real-time updates on flights, hotels and activities.",
  },
  {
    title: "Let's Go",
    icon: "/home/hotel-booking/taxi.png",
    description: "Start your adventure with everything planned and ready.",
  },
];

const index = () => {
  return (
    <section className="lg:min-h-screen relative overflow-hidden">
      <div className="absolute w-80 h-80 -left-10 top-1/4 opacity-40">
        <Image src="/shapes/plane.png" alt="Plane" fill />
      </div>
      <div className="absolute w-80 h-80 -right-10 bottom-0 opacity-30">
        <Image src="/shapes/bag.png" alt="Bag" fill />
      </div>

      <ContentLayoutWrapper
        className={"flex items-center justify-between gap-12 mt-16 pt-40 z-50"}
      >
        <div className="flex-6 w-full py-10">
          <h4 className="uppercase text-gray-800 font-semibold">fast & easy</h4>
          <h1 className="uppercase text-primary text-2xl lg:text-5xl font-bold leading-tight">
            get your favourite hotels/resort bookings
          </h1>
          <div className="mt-5 h-px bg-gray-300/70 w-full" />
          <div className="grid grid-cols-2 grid-rows-2 gap-x-8 gap-y-0 mt-5 items-center">
            {BOOKING_STEPS.map((step, index) => (
              <div key={index} className="flex flex-col gap-3 p-3">
                <div className="flex items-center justify-start gap-4">
                  <Image
                    src={step.icon}
                    width={60}
                    height={60}
                    alt={step.title}
                  />
                  <h3 className="text-2xl font-bold pr-5">{step.title}</h3>
                </div>
                <div className="h-px bg-gray-300/70 w-full" />
                <div className="text-sm text-gray-600">{step.description}</div>
              </div>
            ))}
            <Button className="bg-primary py-7 text-lg font-bold rounded-full">
              Book Now
            </Button>
          </div>
        </div>
        <div className="flex-4 relative w-full self-stretch overflow-hidden rounded-4xl">
          <Image src={"/home/hotel-booking/resort.jpg"} fill alt="Resort" className="object-cover" />
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
