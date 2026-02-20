import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import { MousePointer2 } from "lucide-react";
import Image from "next/image";
import React from "react";

const index = () => {
  const PACKAGE_INCLUDE = [
    "Visa Included",
    "Accomodation Included",
    "All Ground Transport Included",
    "All Packages Are Based On 3-4 People Sharing",
    "Direct Flight Can Be Arranged ON Special Request",
    "Transit Flights",
    "Ziarat Can Be Arranged On",
    "Special Request",
  ];
  return (
    <section className="relative h-auto pb-10 overflow-hidden w-full">
      <Image
        src="/umrahDetail/PackageInclude/bg.png"
        alt="masjid "
        width={1000}
        height={1000}
        className="absolute right-0 top-0  object-contain overflow-hidden opacity-30"
        loading="lazy"
      />
      <ContentLayoutWrapper className="relative flex flex-col gap-10">
        <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl text-primary font-bold text-center">
          THE PACKAGE INCLUDES <br />
          THE FOLLOWING FACILITIES:
        </h1>
        <div className="flex flex-col gap-5 w-full">
          {PACKAGE_INCLUDE.map((item, index) => (
            <div key={index} className="flex items-center gap-5">
              <MousePointer2 className="rotate-90 text-primary fill-primary" />
              <p className="text-lg  md:text-xl lg:text-2xl xl:text-3xl font-bold w-[80%] md:w-[40%]">
                {item}
              </p>
            </div>
          ))}
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
