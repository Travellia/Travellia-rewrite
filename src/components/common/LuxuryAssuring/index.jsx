"use client";

import React, { useState } from "react";
import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import SectionHeading from "@/components/ui/SectionHeading";
import { cn } from "@/lib/utils";
import LuxuryAssuringCard from "./LuxuryAssuringCard";

/**
 * Package grid with filter chips, one chip per section in
 * data.LuxuryAssuringCardData (e.g. Most Popular / Explore Tours by
 * Destination / Find Next Place to Visit, or 3/4/5 Star Umrah).
 */
const LuxuryAssuring = ({ data }) => {
  const sections = data.LuxuryAssuringCardData;
  const [activeId, setActiveId] = useState(sections[0].id);
  const active = sections.find((s) => s.id === activeId) ?? sections[0];

  return (
    <section>
      <ContentLayoutWrapper className="flex flex-col gap-10">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow={data.highlights.join(" · ")}
            title={data.title}
            intro={data.description}
          />

          {/* Filter chips */}
          <div
            role="tablist"
            aria-label={`${data.title} categories`}
            className="flex w-fit flex-wrap gap-1 rounded-full border border-line bg-white p-1 shadow-soft"
          >
            {sections.map((section) => {
              const selected = section.id === active.id;
              return (
                <button
                  key={section.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveId(section.id)}
                  className={cn(
                    "rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-colors",
                    selected ? "bg-ink text-white" : "text-ink/60 hover:bg-sand hover:text-ink"
                  )}
                >
                  {section.heading}
                </button>
              );
            })}
          </div>
        </div>

        <div role="tabpanel" className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {active.cards.map((card) => (
            <LuxuryAssuringCard key={`${active.id}-${card.id}`} card={card} link={card.link} />
          ))}
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default LuxuryAssuring;
