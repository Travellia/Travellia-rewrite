import React from "react";
import { ArrowUpRight, Star } from "lucide-react";
import TestimonialCard from "./TestimonialCard";
import ContentLayoutWrapper from "../ContentLayoutWrapper";
import InitialsAvatar from "@/components/common/InitialsAvatar";
import SectionHeading from "@/components/ui/SectionHeading";
import { TRUSTPILOT_URL } from "@/lib/data/Testimonial";

// From the Trustpilot profile at TRUSTPILOT_URL.
const TRUSTPILOT_SCORE = "4.2";

const index = ({ data }) => {
  return (
    <section className="overflow-hidden">
      <ContentLayoutWrapper className="flex flex-col gap-12">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Testimonial"
            title="What our travellers"
            subtitle={<em>are saying.</em>}
            stagger
          />

          {/* Trustpilot score */}
          <a
            href={TRUSTPILOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-5 rounded-card border border-line bg-white p-4 pr-5 shadow-soft transition hover:shadow-lift"
          >
            <span className="flex -space-x-3">
              {data.map((t) => (
                <InitialsAvatar
                  key={t.user.name}
                  name={t.user.name}
                  className="size-11 ring-2 ring-white text-sm"
                />
              ))}
            </span>
            <span className="flex flex-col">
              <span className="flex items-center gap-2">
                <span className="font-display text-2xl font-bold text-ink">
                  {TRUSTPILOT_SCORE}
                </span>
                <span className="flex gap-0.5">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="size-3.5 fill-gold text-gold" />
                  ))}
                  <Star className="size-3.5 text-gold" />
                </span>
              </span>
              <span className="flex items-center gap-1 text-xs font-semibold text-ink/60">
                Read all our reviews on Trustpilot
                <ArrowUpRight className="size-3.5 transition-transform group-hover:rotate-45" />
              </span>
            </span>
          </a>
        </div>
      </ContentLayoutWrapper>

      {/* Snap-scrolling row of reviews */}
      <div className="mx-auto mt-10 max-w-[1400px]">
        <ul className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 md:px-8 [scrollbar-width:thin]">
          {data.map((testimonial) => (
            <li
              key={testimonial.user.name}
              className="w-[85%] shrink-0 snap-start sm:w-[420px]"
            >
              <TestimonialCard testimonial={testimonial} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default index;
