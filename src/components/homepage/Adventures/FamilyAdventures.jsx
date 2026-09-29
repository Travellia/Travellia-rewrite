import Image from "next/image";
import React from "react";
import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import PopularDestination from "@/components/homepage/PopularDestination";
import ArrowButton from "@/components/ui/ArrowButton";
import { Eyebrow } from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";

const THUMBNAILS = [
  "/home/adventure/1.jpg",
  "/home/adventure/3.jpg",
  "/home/adventure/4.jpg",
  "/home/adventure/5.jpg",
];

const FamilyAdventures = () => {
  return (
    <section className="flex flex-col gap-20 md:gap-28">
      <ContentLayoutWrapper>
        <Reveal className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          {/* Text */}
          <div className="flex flex-col gap-6">
            <Eyebrow>Family adventures</Eyebrow>
            <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Book your flights
              <br />
              <em className="font-serif font-normal normal-case tracking-normal text-gold-accent">
                effortlessly.
              </em>
            </h2>

            <div className="flex items-center gap-4">
              <span className="relative h-24 w-36 shrink-0 overflow-hidden rounded-2xl shadow-soft">
                <Image
                  src="/flights/welcome/Image2.png"
                  alt=""
                  fill
                  sizes="144px"
                  className="object-cover"
                />
              </span>
              <p className="text-ink/65">
                Enjoy seamless booking to our top family-friendly destinations.
              </p>
            </div>

            <p className="max-w-lg leading-relaxed text-ink/65">
              Whether it&apos;s theme parks, wildlife safaris, interactive
              museums, or outdoor activities, embark on exciting adventures and
              create lasting memories with your loved ones in safe, fun-filled
              environments.
            </p>

            <ArrowButton href="/flights">View Packages</ArrowButton>
          </div>

          {/* Image with thumbnail strip */}
          <div className="flex gap-3 md:gap-4">
            <div className="relative aspect-[4/5] flex-1 overflow-hidden rounded-frame shadow-lift">
              <Image
                src="/home/adventure/2.jpg"
                alt="Paris street with the Eiffel Tower"
                fill
                sizes="(max-width: 1024px) 80vw, 40vw"
                className="object-cover"
              />
              <span className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-ink/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-md">
                Family-friendly Europe
              </span>
            </div>
            <div className="flex w-16 flex-col gap-3 sm:w-20 md:gap-4">
              {THUMBNAILS.map((src) => (
                <span
                  key={src}
                  className="relative aspect-[3/4] overflow-hidden rounded-2xl shadow-soft"
                >
                  <Image src={src} alt="" fill sizes="80px" className="object-cover" />
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </ContentLayoutWrapper>

      <PopularDestination />
    </section>
  );
};

export default FamilyAdventures;
