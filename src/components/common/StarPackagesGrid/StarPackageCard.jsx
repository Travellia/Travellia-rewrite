import { MdArrowOutward } from "react-icons/md";
import { FaKaaba, FaMosque } from "react-icons/fa6";
import CarouselWrapper from "@/components/ui/carousel";
import Link from "next/link";
import React from "react";

const parseNightsBreakdown = (nights) => {
  const match = nights?.match(/\((\d+)\s*Makkah\s*\+\s*(\d+)\s*Madinah\)/i);
  return {
    makkahNights: match?.[1] ?? null,
    madinahNights: match?.[2] ?? null,
  };
};

const HotelRow = ({ icon: Icon, city, hotel, nights }) => (
  <div className="flex items-center gap-3 rounded-2xl border border-line bg-sand/60 px-3 py-2.5">
    <div className="grid size-9 shrink-0 place-items-center rounded-full bg-ink text-gold">
      <Icon className="text-sm" />
    </div>
    <div className="min-w-0 flex-1">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-ink/50">
        {city}
        {nights && ` · ${nights} nights`}
      </p>
      <p className="truncate text-sm font-semibold text-ink">{hotel}</p>
    </div>
  </div>
);

const StarPackageCard = ({ card, description, stars, tier }) => {
  const { makkahNights, madinahNights } = parseNightsBreakdown(card.nights);
  const detailLink = tier
    ? `/hajj-umrah/${tier}/umrahDetail?package=${card.id}`
    : null;

  const slides = [card.makkahImages?.[0], card.madinahImages?.[0]]
    .filter(Boolean)
    .map((image, index) => ({ id: index + 1, image }));

  const action = (
    <>
      {card.buttonText}
      <span className="grid size-8 place-items-center rounded-full bg-gold text-ink transition-transform duration-300 group-hover:rotate-45">
        <MdArrowOutward />
      </span>
    </>
  );
  const actionClass =
    "inline-flex items-center gap-3 rounded-full bg-ink py-1.5 pl-4 pr-1.5 text-sm font-semibold text-white transition hover:bg-ink-soft";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white p-2 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      {slides.length > 0 && (
        <div className="relative aspect-[4/3] overflow-hidden rounded-[22px]">
          <CarouselWrapper slides={slides} navigation={false} speed={1200} delay={4000} />
          {stars && (
            <span className="absolute left-3 top-3 z-10 rounded-full bg-white/90 px-2.5 py-1 text-xs text-gold backdrop-blur">
              {"★".repeat(stars)}
            </span>
          )}
        </div>
      )}

      <div className="flex flex-1 flex-col gap-4 p-4">
        <h3 className="text-base font-semibold leading-snug text-ink">
          {description || card.nights}
        </h3>

        <div className="flex flex-col gap-2">
          <HotelRow icon={FaKaaba} city="Makkah" hotel={card.makkah} nights={makkahNights} />
          <HotelRow icon={FaMosque} city="Madinah" hotel={card.madinah} nights={madinahNights} />
        </div>

        <div className="mt-auto flex items-end justify-between gap-3 border-t border-line pt-4">
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-ink/50">
              {card.start}
            </span>
            <span className="font-display text-xl font-bold text-gold-deep">
              {card.price}
            </span>
          </div>
          {detailLink ? (
            <Link href={detailLink} className={actionClass}>
              {action}
            </Link>
          ) : (
            <button type="button" className={actionClass}>
              {action}
            </button>
          )}
        </div>
      </div>
    </article>
  );
};

export default StarPackageCard;
