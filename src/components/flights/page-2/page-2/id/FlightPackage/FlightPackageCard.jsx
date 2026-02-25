import { MousePointer2 } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FlightPackageCard = ({ data }) => {
  return (
    <section className="relative flex flex-col gap-10">
      {/* Hero Image */}
      <div className="relative w-full h-[40vh] md:h-[60vh] overflow-hidden rounded-3xl">
        <Image
          src={data.heroImage}
          alt={data.city}
          fill
          className="object-cover object-bottom"
          loading="lazy"
        />
      </div>

      {/* Title and Para */}
      <div className="flex flex-col gap-5">
        <div className="">
          <h1 className="text-2xl md:text-3xl text-black">{data.discover}</h1>
          <h1 className="text-3xl md:text-4xl xl:text-5xl font-bold text-primary">
            {data.city}, {data.country}
          </h1>
        </div>
        <p>{data.overview1}</p>
      </div>

      {/* Sub Image */}
      <div className="flex gap-5">
        <div className="relative w-full h-[20vh] md:h-[30vh] overflow-hidden rounded-3xl">
          <Image
            src={data.heroImage}
            alt={data.city}
            fill
            className="object-cover object-bottom"
            loading="lazy"
          />
        </div>
        <div className="relative w-full h-[20vh] md:h-[30vh] overflow-hidden rounded-3xl">
          <Image
            src={data.heroImage}
            alt={data.city}
            fill
            className="object-cover object-bottom"
            loading="lazy"
          />
        </div>
      </div>

      {/* 2nd Para */}
      <p>{data.overview2}</p>

      {/* Included & Excluded */}
      <div className="flex flex-col ">
        <h1 className="text-3xl font-bold text-primary">Included & Excluded</h1>

        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 p-5 ">
          {data.included_excluded.map((item, index) => (
            <div key={index} className="flex items-center gap-2 rounded-md">
              <MousePointer2 className="rotate-90 text-primary fill-primary" />
              <p className="text-xl">{item}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Trip */}
      <div className="w-full">
        <Accordion
          type="multiple"
          collapsible
          defaultValue="[day-0]"
          className="w-full space-y-3"
        >
          {data.days.map((day, index) => (
            <AccordionItem
              key={index}
              value={`day-${index}`}
              className="rounded-lg overflow-hidden shadow"
            >
              <AccordionTrigger className="bg-primary text-white text-xl px-4 py-2 rounded-lg w-full hover:no-underline">
                {day.title}
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2">
                {day.description}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FlightPackageCard;
