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
 *  - portrait: optional { image, caption, transitionName } photo card on the
 *    right; with transitionName, a card on the previous page grows into it
 *    (see PhotoLink)
 */
const Welcome = ({ data }) => {
  const height =
    data.heightClassName ?? "h-[72vh] min-h-[560px] max-h-[860px]";

  return (
    <section className="px-3 pt-3 md:px-5">
      {/* The frame keeps its view-transition name on every page, so moving
          between pages resizes it in place instead of redrawing it. */}
      <div
        className={`relative isolate mx-auto max-w-[1400px] overflow-hidden rounded-frame bg-ink [view-transition-name:hero-frame] ${height}`}
      >
        <CarouselWrapper slides={data.slides} variant="hero" className="!absolute" />

        {/* Legibility gradients */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-ink/80 via-ink/20 to-ink/10" />
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-ink/60 via-transparent to-transparent" />

        {/* Eyebrow, headline and intro rise from behind their own masks. */}
        <div className="absolute inset-x-0 bottom-0 z-20 mx-auto flex max-w-[1240px] flex-col gap-5 px-5 pb-36 md:px-8 md:pb-52 lg:pb-56">
          <div className="rise-mask">
            <div className="rise" style={{ "--rise-index": 0 }}>
              <Eyebrow tone="dark">{data.heading ?? "Travellia"}</Eyebrow>
            </div>
          </div>
          <div className="rise-mask">
            <h1
              className="rise max-w-4xl font-display text-[clamp(2.6rem,7vw,6.5rem)] font-extrabold uppercase leading-[0.92] tracking-tight text-white [&_em]:font-serif [&_em]:font-normal [&_em]:normal-case [&_em]:tracking-normal [&_em]:text-gold"
              style={{ "--rise-index": 1 }}
            >
              {data.title}
            </h1>
          </div>
          {data.subtitle && (
            <div className="rise-mask">
              <p
                className="rise max-w-xl text-base text-white/80 md:text-lg"
                style={{ "--rise-index": 2 }}
              >
                {data.subtitle}
              </p>
            </div>
          )}
        </div>

        {data.portrait ? (
          <figure
            data-vt-photo=""
            style={{ viewTransitionName: data.portrait.transitionName }}
            className="absolute bottom-40 right-5 z-20 hidden w-52 overflow-hidden rounded-card border border-white/20 bg-ink shadow-lift md:block md:right-8 lg:bottom-56 lg:w-60"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src={data.portrait.image}
                alt={data.portrait.caption}
                fill
                sizes="240px"
                className="object-cover"
              />
            </div>
            <figcaption className="absolute inset-x-2 bottom-2 rounded-2xl border border-white/20 bg-ink/40 px-3 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-md">
              {data.portrait.caption}
            </figcaption>
          </figure>
        ) : (
          <RotatingBadge
            href="#search"
            label="Start your search"
            className="absolute right-5 top-5 z-20 hidden ring-white/10 md:grid md:right-8 md:top-8"
          />
        )}

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
                className="object-cover transition-[scale] duration-[900ms] ease-arrive group-hover:scale-[1.03]"
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
