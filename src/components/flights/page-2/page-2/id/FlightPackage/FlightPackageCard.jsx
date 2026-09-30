import { MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeading from "@/components/ui/SectionHeading";

const FlightPackageCard = ({ data }) => {
  const gallery = data.gallery?.length ? data.gallery : [data.heroImage];

  return (
    <section className="flex flex-col gap-12">
      {/* Hero Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-frame shadow-soft sm:aspect-[16/9]">
        <Image
          src={data.heroImage}
          alt={`${data.city}, ${data.country}`}
          fill
          sizes="(max-width: 1024px) 100vw, 800px"
          className="object-cover"
          priority
        />
        <span className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-ink backdrop-blur">
          <MapPin className="size-3.5 text-gold-deep" aria-hidden="true" />
          {data.city}, {data.country}
        </span>
      </div>

      {/* Title and Para */}
      <div className="flex flex-col gap-6">
        <SectionHeading
          eyebrow={data.discover}
          title={
            <>
              {data.city}, <em>{data.country}</em>
            </>
          }
        />
        <p className="leading-relaxed text-ink/70">{data.overview1}</p>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-2 gap-4">
        {gallery.slice(0, 2).map((src, index) => (
          <div
            key={src + index}
            className="relative aspect-[4/3] overflow-hidden rounded-card"
          >
            <Image
              src={src}
              alt={`${data.city} photo ${index + 1}`}
              fill
              sizes="(max-width: 1024px) 50vw, 400px"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* 2nd Para */}
      <p className="leading-relaxed text-ink/70">{data.overview2}</p>

      {/* Included & Excluded */}
      <div className="flex flex-col gap-6 rounded-card border border-line bg-white p-6 shadow-soft md:p-8">
        <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-ink">
          Included &amp; excluded
        </h3>
        <ul className="grid gap-x-6 gap-y-3 md:grid-cols-2">
          {data.included_excluded.map((item) => (
            <li key={item} className="flex items-center gap-3 text-ink/80">
              <span
                aria-hidden="true"
                className="size-2 shrink-0 rounded-full bg-gold"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Trip */}
      <div className="flex flex-col gap-6">
        <SectionHeading
          eyebrow="Day by day"
          title={
            <>
              Your <em>itinerary</em>
            </>
          }
        />
        <Accordion
          type="multiple"
          defaultValue={["day-0"]}
          className="flex w-full flex-col gap-3"
        >
          {data.days.map((day, index) => (
            <AccordionItem key={day.title} value={`day-${index}`}>
              <AccordionTrigger>{day.title}</AccordionTrigger>
              <AccordionContent>{day.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FlightPackageCard;
