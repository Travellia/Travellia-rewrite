import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import ArrowButton from "@/components/ui/ArrowButton";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
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
    <section>
      <ContentLayoutWrapper className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        {/* Heading + image */}
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Fast & easy"
            title={
              <>
                Get your favourite
                <br />
                hotels &amp; resorts
                <br />
                <em>booked.</em>
              </>
            }
          />
          <div className="relative aspect-[4/3] overflow-hidden rounded-frame shadow-lift">
            <Image
              src="/home/hotel-booking/resort.jpg"
              alt="Resort terrace with sea view"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Numbered steps, staggered */}
        <div className="flex flex-col justify-center gap-5">
          {BOOKING_STEPS.map((step, index) => (
            <Reveal
              key={step.title}
              delay={index * 120}
              className={index === 1 ? "lg:ml-12" : index === 2 ? "lg:ml-24" : ""}
            >
              <div className="flex items-start gap-5 rounded-card border border-line bg-white p-6 shadow-soft">
                <span className="font-display text-4xl font-bold leading-none text-gold-accent">
                  0{index + 1}
                </span>
                <div className="flex flex-1 flex-col gap-1">
                  <h3 className="font-display text-xl font-bold uppercase tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="text-ink/65">{step.description}</p>
                </div>
                <span className="relative hidden size-12 shrink-0 sm:block">
                  <Image src={step.icon} alt="" fill sizes="48px" className="object-contain" />
                </span>
              </div>
            </Reveal>
          ))}
          <ArrowButton href="/hotels" className="mt-4 lg:ml-24">
            Book Now
          </ArrowButton>
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
