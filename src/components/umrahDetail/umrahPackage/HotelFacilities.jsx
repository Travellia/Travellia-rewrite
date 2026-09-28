import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MdCheck } from "react-icons/md";
import React from "react";

// Full facilities listing for one hotel, grouped by the categories used in the
// reference documents. Collapsed by default: the larger hotels list 50+ items.
const HotelFacilities = ({ facilities = [], hotel }) => {
  if (!facilities.length) return null;

  const itemCount = facilities.reduce(
    (total, group) => total + group.items.length,
    0
  );

  return (
    <ContentLayoutWrapper>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem
          value="facilities"
          className="rounded-card border-line bg-white px-2 shadow-soft data-[state=open]:border-line data-[state=open]:bg-white data-[state=open]:text-ink"
        >
          <AccordionTrigger className="cursor-pointer hover:no-underline">
            <span className="flex flex-wrap items-baseline gap-2">
              <span className="font-display text-lg font-bold uppercase tracking-tight text-ink">
                Hotel facilities
              </span>
              <span className="text-xs font-semibold text-ink/50">
                {hotel} · {itemCount} amenities
              </span>
            </span>
          </AccordionTrigger>

          <AccordionContent className="text-ink/70">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 pb-2">
              {facilities.map((group) => (
                <div key={group.category} className="flex flex-col gap-2">
                  <h3 className="border-b border-line pb-1 text-xs font-bold uppercase tracking-wider text-ink">
                    {group.category}
                  </h3>
                  <ul className="flex flex-col gap-1.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2 text-sm text-ink/70"
                      >
                        <MdCheck className="text-gold-deep text-base shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </ContentLayoutWrapper>
  );
};

export default HotelFacilities;
