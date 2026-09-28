import React from "react";
import Link from "next/link";
import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import OurPopularCard from "@/components/common/OurPopular/OurPopularCard";
import SectionHeading from "@/components/ui/SectionHeading";

// `show` and `enableImages` are kept for existing callers; the Load More
// button and the decorative clip-art were removed in the redesign.
const index = ({ cards, heading = true }) => {
  return (
    <section className="w-full py-10 md:py-16">
      <ContentLayoutWrapper className="flex flex-col gap-10">
        {heading && (
          <SectionHeading
            eyebrow="Our popular flights"
            title={
              <>
                Where to <em>next?</em>
              </>
            }
            intro="Handpicked destinations with great fares from UK airports. Tap a card to see the itinerary."
          />
        )}
        <div className="grid grid-cols-10 gap-4 md:gap-6">
          {cards.map((card) => (
            <div key={card.id} className={`${card.css} min-h-[380px]`}>
              <Link href={`/flights/page-2/${card.id}`} className="block h-full rounded-card">
                <OurPopularCard data={card} />
              </Link>
            </div>
          ))}
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
