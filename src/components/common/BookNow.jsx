import Image from "next/image";
import ArrowIcon from "@/components/ui/ArrowIcon";
import Link from "next/link";
import { Check } from "lucide-react";
import React from "react";
import { Eyebrow } from "@/components/ui/SectionHeading";
import Unveil from "@/components/ui/Unveil";
import { cn } from "@/lib/utils";

const PAY_LATER_POINTS = [
  "Lock in today's price",
  "Pay in up to 26 weekly payments",
  "No interest, no credit checks & no hidden fees",
];

/**
 * Dark feature panel. Default: "Book now, pay later" with a CTA tucked into
 * the photo corner. With `data2`, shows the "Why book with us" list (`data3`).
 */
const BookNow = ({ data, reverse, data2, data3 = [], href = "#plan-your-trip" }) => {
  return (
    <section className="px-3 md:px-5">
      <div
        className={cn(
          "mx-auto grid max-w-[1400px] gap-3 overflow-hidden rounded-frame bg-ink p-3 text-white lg:grid-cols-2",
          reverse && "lg:[&>*:first-child]:order-2"
        )}
      >
        {/* Content */}
        <div className="flex flex-col justify-center gap-6 p-5 sm:p-8 lg:p-12">
          {data2 ? (
            <>
              <Eyebrow tone="dark">Travellia</Eyebrow>
              <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-5xl">
                Why book
                <br />
                <em className="font-serif font-normal normal-case tracking-normal text-gold">
                  with us
                </em>
              </h2>
              <ul className="flex flex-col gap-3">
                {data3.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-white/85">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-gold text-ink">
                      <Check className="size-3.5" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <>
              <Eyebrow tone="dark">Flexible payments</Eyebrow>
              <h2 className="font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl">
                Book now,
                <br />
                <em className="font-serif font-normal normal-case tracking-normal text-gold">
                  pay later.
                </em>
              </h2>
              <p className="max-w-md text-white/70">
                Book flights now, pay later. Book your next trip today and
                spread the cost.
              </p>
              <ul className="flex flex-col gap-3">
                {PAY_LATER_POINTS.map((point) => (
                  <li key={point} className="flex items-center gap-3 text-white/85">
                    <span className="grid size-6 shrink-0 place-items-center rounded-full bg-gold text-ink">
                      <Check className="size-3.5" />
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>

        {/* Photo with the CTA tucked into its corner */}
        <Unveil radius="28px" className="relative min-h-[320px] overflow-hidden rounded-[28px] lg:min-h-[520px]">
          <Image
            src={data?.image}
            alt={data?.alt || ""}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          {!data2 && (
            <Link
              href={href}
              className="group absolute bottom-0 right-0 flex items-center gap-3 rounded-tl-[28px] bg-ink py-3 pl-6 pr-3"
            >
              <span className="rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-ink transition group-hover:bg-gold">
                Book Now
              </span>
              <span className="grid size-11 place-items-center rounded-full bg-gold text-ink">
                <ArrowIcon className="size-5" />
              </span>
            </Link>
          )}
        </Unveil>
      </div>
    </section>
  );
};

export default BookNow;
