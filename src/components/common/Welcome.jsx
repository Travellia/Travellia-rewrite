import React from "react";
import Image from "next/image";
import Link from "next/link";
import CarouselWrapper from "@/components/ui/carousel";
import RotatingBadge from "@/components/ui/RotatingBadge";
import { Eyebrow } from "@/components/ui/SectionHeading";

/**
 * Framed page hero. `data`:
 *  - slides: [{ id, image }]
 *  - title: string or node (wrap a word in <em> for the serif accent)
 *  - heading: small label above the title
 *  - subtitle: short intro line
 *  - feature: optional { image, label, title, href } inset card
 *  - heightClassName: height override
 */
const Welcome = ({ data }) => {
  const height =
    data.heightClassName ?? "h-[72vh] min-h-[560px] max-h-[860px]";

  return (
    <section className="px-3 pt-3 md:px-5">
      <div
        className={`relative isolate mx-auto max-w-[1400px] overflow-hidden rounded-frame bg-ink ${height}`}
      >
        <CarouselWrapper slides={data.slides} className="!absolute" />

        {/* Legibility gradients */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/10" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />

        <div className="absolute inset-x-0 bottom-0 z-20 mx-auto flex max-w-[1240px] flex-col gap-5 px-5 pb-36 md:px-8 md:pb-52 lg:pb-56">
          <Eyebrow tone="dark">{data.heading ?? "Travellia"}</Eyebrow>
          <h1 className="max-w-4xl font-display text-[clamp(2.6rem,7vw,6.5rem)] font-extrabold uppercase leading-[0.92] tracking-tight text-white [&_em]:font-serif [&_em]:font-normal [&_em]:normal-case [&_em]:tracking-normal [&_em]:text-gold">
            {data.title}
          </h1>
          {data.subtitle && (
            <p className="max-w-xl text-base text-white/80 md:text-lg">
              {data.subtitle}
            </p>
          )}
        </div>

        <RotatingBadge
          href="#search"
          label="Start your search"
          className="absolute right-5 top-5 z-20 hidden ring-white/10 md:grid md:right-8 md:top-8"
        />

        {data.feature && (
          <Link
            href={data.feature.href}
            className="group absolute bottom-40 right-5 z-20 hidden w-60 items-center gap-3 rounded-3xl border border-white/20 bg-white/15 p-2 pr-4 text-white backdrop-blur-md transition hover:bg-white/25 lg:flex lg:bottom-60 lg:right-8"
          >
            <span className="relative size-16 shrink-0 overflow-hidden rounded-2xl">
              <Image
                src={data.feature.image}
                alt=""
                fill
                sizes="64px"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </span>
            <span className="flex flex-col">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-gold">
                {data.feature.label}
              </span>
              <span className="text-sm font-semibold leading-tight">
                {data.feature.title}
              </span>
            </span>
          </Link>
        )}
      </div>

    </section>
  );
};

export default Welcome;
