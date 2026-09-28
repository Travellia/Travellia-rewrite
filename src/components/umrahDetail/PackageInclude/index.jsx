import { Check } from "lucide-react";
import React from "react";
import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

const PACKAGE_INCLUDE = [
  "Visa included",
  "Accommodation included",
  "All ground transport included",
  "All packages are based on 3–4 people sharing",
  "Direct flights can be arranged on special request",
  "Transit flights",
  "Ziyarat can be arranged on special request",
];

const index = () => {
  return (
    <section className="px-3 md:px-5">
      <div className="mx-auto max-w-[1400px] rounded-frame bg-ink py-14 text-white md:py-20">
        <ContentLayoutWrapper className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <SectionHeading
            tone="dark"
            eyebrow="What's included"
            title={
              <>
                The package includes
                <br />
                <em>the following facilities.</em>
              </>
            }
          />
          <ul className="grid gap-3 sm:grid-cols-2">
            {PACKAGE_INCLUDE.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <span className="grid size-6 shrink-0 place-items-center rounded-full bg-gold text-ink">
                  <Check className="size-3.5" />
                </span>
                <span className="text-white/85">{item}</span>
              </li>
            ))}
          </ul>
        </ContentLayoutWrapper>
      </div>
    </section>
  );
};

export default index;
