import React from "react";
import Image from "next/image";
import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { data } from "@/lib/contactInfo";
import { phoneHref } from "@/components/common/PhoneNumberViewer";

import BookingForm from "./BookingForm";

/**
 * Enquiry form card on a photo background. Every "Book Now → form" button on
 * the site scrolls here via #plan-your-trip.
 */
const PlanYourTrip = ({
  titleLines1 = "Plan your trip",
  titleLines2 = "with us",
}) => {
  return (
    <section id="plan-your-trip" className="scroll-mt-28 px-3 md:px-5">
      <div className="relative isolate mx-auto max-w-[1400px] overflow-hidden rounded-frame py-14 md:py-20">
        <Image
          src="/holidayPackage/welcome/welcome1.jpg"
          alt=""
          fill
          sizes="100vw"
          className="-z-10 object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-ink/55" />

        <ContentLayoutWrapper>
          <div className="grid overflow-hidden rounded-frame bg-white shadow-lift lg:grid-cols-[0.9fr_1.1fr]">
            {/* Image side */}
            <div className="relative min-h-64 lg:min-h-full">
              <Image
                src="/home/book-now/girl-on-island.png"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
              <div className="absolute inset-x-6 bottom-6 flex flex-col gap-1 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  Talk to a travel expert
                </p>
                <a href={phoneHref} className="font-display text-2xl font-bold">
                  {data.PhoneNumber}
                </a>
                <p className="text-sm text-white/75">
                  We reply to every enquiry within 24 hours.
                </p>
              </div>
            </div>

            {/* Form side */}
            <div className="flex flex-col gap-6 p-6 sm:p-8 md:p-12">
              <div className="flex flex-col gap-3">
                <Eyebrow>Enquiry</Eyebrow>
                <h2 className="font-display text-3xl font-bold uppercase leading-none tracking-tight text-ink md:text-4xl">
                  {titleLines1}
                  <br />
                  <em className="font-serif font-normal normal-case tracking-normal text-gold">
                    {titleLines2}
                  </em>
                </h2>
                <p className="text-ink/65">
                  Tell us where, when and who&apos;s travelling. We&apos;ll
                  come back with the best options for your budget.
                </p>
              </div>
              <BookingForm />
            </div>
          </div>
        </ContentLayoutWrapper>
      </div>
    </section>
  );
};

export default PlanYourTrip;
