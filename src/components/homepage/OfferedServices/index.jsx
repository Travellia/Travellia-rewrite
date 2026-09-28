import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import Image from "next/image";
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";

const SERVICES = [
  {
    title: "Flights & Hotels",
    description: "Convenient flights and comfortable stays near the Haram.",
  },
  {
    title: "Umrah Packages",
    description:
      "Flexible Umrah packages designed around your travel needs, including seasonal options.",
  },
  {
    title: "Hajj Packages",
    description:
      "Complete Hajj arrangements with guidance throughout your pilgrimage.",
  },
  {
    title: "Ziyarat & Holidays",
    description:
      "Guided Ziyarat tours and family-friendly halal holiday experiences.",
  },
  {
    title: "Visa Assistance",
    description: "Reliable support for a smooth and hassle-free visa process.",
  },
  {
    title: "Family & Group Travel",
    description:
      "Special arrangements for families, groups, and organizations, with 24/7 support throughout your journey.",
  },
];

const Index = () => {
  return (
    <section className="px-3 md:px-5">
      <div className="mx-auto max-w-[1400px] rounded-frame bg-ink py-16 text-white md:py-24">
        <ContentLayoutWrapper className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Photo collage */}
          <div className="grid grid-cols-2 gap-3">
            <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-card">
              <Image src="/home/services/22.png" alt="Resort pool at dusk" fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-card">
              <Image src="/home/services/222.png" alt="" fill sizes="(max-width: 1024px) 50vw, 22vw" className="object-cover" />
            </div>
            <div className="relative aspect-square overflow-hidden rounded-card">
              <Image src="/home/services/33.png" alt="" fill sizes="(max-width: 1024px) 50vw, 22vw" className="object-cover" />
            </div>
          </div>

          {/* Numbered list */}
          <div className="flex flex-col gap-8">
            <SectionHeading
              tone="dark"
              eyebrow="What we do"
              title={
                <>
                  Services <em>we offer.</em>
                </>
              }
            />
            <ol className="flex flex-col">
              {SERVICES.map((service, index) => (
                <li
                  key={service.title}
                  className="flex gap-5 border-t border-white/10 py-5 last:border-b"
                >
                  <span className="pt-0.5 text-xs font-semibold text-gold">
                    0{index + 1}
                  </span>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-display text-lg font-bold uppercase tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-white/65">{service.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </ContentLayoutWrapper>
      </div>
    </section>
  );
};

export default Index;
