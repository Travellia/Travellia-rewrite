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
    <section className="relative overflow-hidden pt-30   xl:min-h-screen">
      {/* Decorative shapes (hidden on small screens) */}
      <div className="hidden lg:block absolute w-80 h-80 -left-10 top-1/4 opacity-40">
        <Image src="/shapes/plane.png" alt="Plane" fill />
      </div>
      <div className="hidden lg:block absolute w-80 h-80 -right-10 bottom-0 opacity-30">
        <Image src="/shapes/bag.png" alt="Bag" fill />
      </div>

      <ContentLayoutWrapper
        className="
          flex flex-col-reverse 
          lg:flex-row 
          items-center 
          gap-12 
          pt-10 
          lg:pt-40
        "
      >
        {/* LEFT CONTENT */}
        <div className="w-full lg:w-1/2 py-6">
          <h4 className="uppercase text-gray-800 font-semibold text-sm md:text-base">
            fast & easy
          </h4>

          <h1
            className="uppercase text-primary font-bold leading-tight
            text-2xl 
            sm:text-3xl 
            md:text-4xl 
            xl:text-5xl
          "
          >
            get your favourite hotels / resort bookings
          </h1>

          <div className="mt-5 h-px bg-gray-300/70 w-full" />

          {/* STEPS */}
          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              gap-6 
              mt-6
            "
          >
            {BOOKING_STEPS.map((step, index) => (
              <div key={index} className="flex flex-col  gap-3 p-2">
                <div className="flex items-center  gap-4">
                  <Image
                    src={step.icon}
                    alt={step.title}
                    width={50}
                    height={50}
                  />
                  <h3 className="text-lg md:text-xl font-bold">{step.title}</h3>
                </div>

                <div className="h-px bg-gray-300/70 w-full" />

                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}

            {/* BUTTON */}
            <div className="sm:col-span-2 flex justify-center sm:justify-start">
              <Button className="btn-main">Book Now</Button>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div
          className="
    relative 
    w-full 
    lg:w-1/2 
    h-64 
    sm:h-80 
    md:h-[420px] 
    lg:h-[520px] 
    xl:h-[600px]
    overflow-hidden 
    rounded-3xl
  "
        >
          <Image
            src="/home/hotel-booking/resort.jpg"
            alt="Resort"
            fill
            priority
            className="object-cover"
          />
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
