"use client";

import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import React, { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/components/ui/SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QUESTION_DATA = [
  {
    id: 1,
    question: "Can I book extra nights before or after my Umrah package?",
    answer:
      "Yes. Travellia can arrange pre- and post-package accommodation on an individual basis, subject to availability. Browse our handpicked hotels in Makkah and Madinah and our team will add the extra nights to your package.",
  },
  {
    id: 2,
    question: "Can I choose my hotel and room type?",
    answer:
      "Of course. Tell us your preferred hotel and our booking team will check availability, including single, double, triple and quad rooms, and happily include it in your customised Umrah package.",
  },
];

const index = () => {
  const [open, setOpen] = useState(`q-${QUESTION_DATA[0].id}`);
  const activeIndex = Math.max(
    0,
    QUESTION_DATA.findIndex((q) => `q-${q.id}` === open)
  );

  return (
    <section>
      <ContentLayoutWrapper className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="FAQ"
            title={
              <>
                Your questions,
                <br />
                <em>our answers.</em>
              </>
            }
            intro="Find answers to common questions about our services and your holy journey below."
          />
          <div className="flex items-center gap-5">
            <span className="font-display text-6xl font-bold text-ink/15">
              /0{activeIndex + 1}
            </span>
            <span className="relative h-28 w-44 overflow-hidden rounded-2xl shadow-soft">
              <Image
                src="/hajj-ummrah/welcome/slide1.png"
                alt=""
                fill
                sizes="176px"
                className="object-cover"
              />
            </span>
          </div>
        </div>

        <Accordion
          type="single"
          value={open}
          onValueChange={(value) => value && setOpen(value)}
          className="flex flex-col gap-3 self-center"
        >
          {QUESTION_DATA.map((item, index) => (
            <AccordionItem key={item.id} value={`q-${item.id}`}>
              <AccordionTrigger>
                <span className="flex items-center gap-3">
                  <span className="text-xs font-semibold text-gold">/0{index + 1}</span>
                  {item.question}
                </span>
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
