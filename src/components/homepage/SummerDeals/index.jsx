import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const index = () => {
  const STATS = [
    {
      icon: "/icons/users-like.png",
      number: "10K+",
      label: "HAPPY TRAVELLERS",
    },
    {
      icon: "/icons/hands.png",
      number: "50+",
      label: "GLOBAL DESTINATIONS",
    },
    {
      icon: "/icons/signpost.png",
      number: "50+",
      label: "GLOBAL DESTINATIONS",
    },
  ];

  return (
    <section className="relative lg:min-h-[115vh] flex items-end justify-end">
      <Image
        src={"/home/summer-deals/plane.png"}
        alt="plane"
        fill
        className="absolute left-0 top-0 z-0"
      />
      <ContentLayoutWrapper
        className={
          "flex flex-col items-center justify-between gap-8 relative z-1 h-full py-72 text-center px-16"
        }
      >
        <div className="flex flex-col items-center justify-between gap-3">
          <h1 className="text-primary text-3xl md:text-5xl lg:text-7xl font-bold uppercase">
            Big Summer Deals
          </h1>
          <h3 className="text-gray-700 font-normal text-2xl md:text-3xl lg:text-5xl uppercase">
            are on now
          </h3>
          <p className="text-lg md:text-2xl lg:text-3xl text-gray-500 uppercase">
            Make your big summer gateaway happen: Members save 25% or more on
            thousands of hotels worldwide.
          </p>
        </div>
        <Button className={"px-20 py-8 text-2xl rounded-3xl"}>Load More</Button>

        <div className="py-8 px-16 rounded-3xl shadow-2xl flex items-center justify-between gap-6 bg-gray-200 w-full absolute -bottom-40">
          <div className="flex flex-col md:flex-row items-center gap-8 justify-between md:w-full">
            {STATS.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-6">
                    <Image
                      src={stat.icon}
                      alt={stat.label}
                      width={80}
                      height={80}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-3">
                    {stat.number}
                  </h2>
                  <p className="text-gray-700 font-bold text-xl tracking-wider uppercase">
                    {stat.label}
                  </p>
                </div>
                {index !== STATS.length - 1 && (
                  <div className="bg-gray-400/50 h-px w-3/10 rotate-180 md:rotate-90" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
