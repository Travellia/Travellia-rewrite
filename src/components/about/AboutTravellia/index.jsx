import Image from "next/image";
import React from "react";
import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import ArrowButton from "@/components/ui/ArrowButton";
import Unveil from "@/components/ui/Unveil";
import SectionHeading from "@/components/ui/SectionHeading";

const STATS = [
  { number: "10K+", label: "Happy travellers" },
  { number: "50+", label: "Global destinations" },
  { number: "24/7", label: "Customer support" },
];

const index = () => {
  return (
    <section className="flex flex-col gap-20 md:gap-28">
      <ContentLayoutWrapper className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Photos */}
        <div className="grid h-[520px] grid-cols-5 grid-rows-6 gap-3 md:h-[600px]">
          <Unveil radius="36px" className="relative col-span-3 row-span-6 overflow-hidden rounded-frame shadow-lift">
            <Image
              src="/about/AboutTravellia/Image4.webp"
              alt="Travellers exploring a city"
              fill
              sizes="(max-width: 1024px) 60vw, 30vw"
              className="object-cover"
            />
          </Unveil>
          <div className="relative col-span-2 row-span-3 overflow-hidden rounded-card shadow-soft">
            <Image src="/about/AboutTravellia/Image2.webp" alt="" fill sizes="20vw" className="object-cover" />
          </div>
          <div className="relative col-span-2 row-span-3 overflow-hidden rounded-card shadow-soft">
            <Image src="/about/AboutTravellia/Image3.webp" alt="" fill sizes="20vw" className="object-cover" />
          </div>
        </div>

        {/* Story */}
        <div className="flex flex-col gap-6">
          <SectionHeading
            eyebrow="About Travellia"
            title={
              <>
                Not just a trip.
                <br />
                <em>A journey.</em>
              </>
            }
          />
          <p className="leading-relaxed text-ink/70">
            Travellia Limited is a UK travel agency based in Pudsey, Leeds,
            dedicated to making every journey easy and stress-free. We
            specialise in airline tickets, Umrah and Hajj packages, holiday
            packages and family bookings, with fares from trusted airlines and
            hotels handpicked for comfort and location.
          </p>
          <p className="leading-relaxed text-ink/70">
            We understand the needs of every kind of traveller, from families
            and groups to pilgrims and first-time flyers, and we offer services
            such as unaccompanied minor bookings to keep your loved ones safe.
          </p>
          <ArrowButton href="/holidayPackages">Explore Now</ArrowButton>
        </div>
      </ContentLayoutWrapper>

      {/* Stats + easy to book */}
      <ContentLayoutWrapper>
        <div className="grid gap-8 rounded-frame bg-ink p-8 text-white md:p-12 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div className="flex flex-col gap-5">
            <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight md:text-4xl">
              Easy to
              <br />
              <em className="font-serif font-normal normal-case tracking-normal text-gold">
                book a trip.
              </em>
            </h2>
            <p className="max-w-lg text-white/70">
              Tell us where and when you want to travel, and our team will find
              the best flights, hotels and packages for your budget. You get
              clear prices with no hidden fees, flexible payment options and
              friendly support before, during and after your trip.
            </p>
            <ArrowButton href="#plan-your-trip" tone="gold">
              Book Now
            </ArrowButton>
          </div>
          <dl className="grid grid-cols-3 gap-3">
            {STATS.map((stat) => (
              <div key={stat.label} className="rounded-card border border-white/10 bg-white/5 p-5">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-display text-2xl font-bold text-gold md:text-3xl">
                  {stat.number}
                </dd>
                <dd className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-white/60">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
