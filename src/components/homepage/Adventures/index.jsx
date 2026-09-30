"use client";

import { useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";
import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import ArrowButton from "@/components/ui/ArrowButton";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DESTINATIONS = [
  {
    id: "western-europe",
    title: "Western Europe",
    rating: 5,
    description:
      "Paris, Rome, Barcelona and Amsterdam: iconic sights, great food and short flights from UK airports, perfect for a family city break.",
    image: "/home/adventure/western-europe.webp",
  },
  {
    id: "south-africa",
    title: "South Africa",
    rating: 4,
    description:
      "Cape Town, the Garden Route and Big Five safaris: mountains, beaches and wildlife the whole family will remember.",
    image: "/home/adventure/south-africa.webp",
  },
  {
    id: "scandinavia",
    title: "Scandinavia",
    rating: 3,
    description:
      "Fjords, the northern lights and friendly design-led cities like Copenhagen, Stockholm and Oslo.",
    image: "/home/adventure/scandinavia.webp",
  },
];

const Adventures = () => {
  const [open, setOpen] = useState(DESTINATIONS[0].id);
  const active = DESTINATIONS.find((d) => d.id === open) ?? DESTINATIONS[0];

  return (
    <section>
      <ContentLayoutWrapper className="flex flex-col gap-12">
        <SectionHeading
          eyebrow="Family adventures"
          title={
            <>
              Exciting family-friendly
              <br />
              <em>destinations.</em>
            </>
          }
          intro="Embark on thrilling family adventures at our handpicked destinations. From theme parks and wildlife safaris to interactive museums and outdoor activities, create unforgettable memories with your loved ones in exciting and safe environments."
        />

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
          {/* Photo follows the open item */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-frame shadow-lift lg:aspect-auto lg:min-h-[460px]">
            {DESTINATIONS.map((d) => (
              <Image
                key={d.id}
                src={d.image}
                alt={d.id === active.id ? d.title : ""}
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className={`object-cover transition-opacity duration-700 ${d.id === active.id ? "opacity-100" : "opacity-0"}`}
              />
            ))}
            <span className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-ink/40 px-4 py-2 font-display text-sm font-bold uppercase text-white backdrop-blur-md">
              {active.title}
            </span>
          </div>

          {/* Numbered accordion */}
          <div className="flex flex-col justify-center gap-6">
            <Accordion
              type="single"
              value={open}
              onValueChange={(value) => value && setOpen(value)}
              className="flex flex-col gap-3"
            >
              {DESTINATIONS.map((d, index) => (
                <AccordionItem key={d.id} value={d.id}>
                  <AccordionTrigger>
                    <span className="flex items-center gap-4">
                      <span className="text-xs font-semibold text-gold-deep in-data-[state=open]:text-gold">
                        0{index + 1}
                      </span>
                      <span className="font-display text-lg uppercase tracking-tight">
                        {d.title}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <span className="mb-3 flex gap-0.5" aria-label={`${d.rating} star rating`}>
                      {[...Array(d.rating)].map((_, i) => (
                        <Star key={i} className="size-3.5 fill-gold text-gold" />
                      ))}
                    </span>
                    {d.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <ArrowButton href="/holidayPackages">View Packages</ArrowButton>
          </div>
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default Adventures;
