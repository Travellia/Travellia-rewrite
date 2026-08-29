import { MdArrowOutward } from "react-icons/md";
import { FaKaaba, FaMosque } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
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

const HotelRow = ({ icon: Icon, hotel, nights }) => (
  <div className="flex items-center gap-3 bg-secondary/60 border border-primary/10 rounded-xl px-3 py-2">
    <div className="flex items-center justify-center w-9 h-9 rounded-full bg-primary/10 shrink-0">
      <Icon className="text-base text-primary" />
    </div>
    <div className="min-w-0 flex-1 flex items-center justify-between gap-2">
      <p className="text-sm font-semibold text-gray-800 truncate">{hotel}</p>
      {nights && (
        <span className="shrink-0 text-[10px] font-bold text-primary bg-primary/10 rounded-full px-2 py-0.5">
          {nights} Nights
        </span>
      )}
    </div>
  </div>
);

const StarPackageCard = ({ card, description, stars, tier }) => {
  const { makkahNights, madinahNights } = parseNightsBreakdown(card.nights);
  const detailLink = tier ? `/hajj-umrah/${tier}/umrahDetail` : null;

  const slides = [card.makkahImages?.[0], card.madinahImages?.[0]]
    .filter(Boolean)
    .map((image, index) => ({ id: index + 1, image }));

  return (
    <div className="rounded-xl overflow-hidden shadow-2xl">
      {slides.length > 0 && (
        <div className="relative w-full h-[24vh] sm:h-[11vh] lg:h-[18vh] xl:h-[21vh] overflow-hidden">
          <CarouselWrapper slides={slides} navigation={false} speed={5000} />
        </div>
      )}

      <div className="p-4 space-y-2">
        {stars && <p>{"⭐".repeat(stars)}</p>}
        <p className="md:font-medium lg:text-sm text-primary lg:font-semibold">
          {description || card.nights}
        </p>

        <div className="space-y-2">
          <HotelRow icon={FaKaaba} hotel={card.makkah} nights={makkahNights} />
          <HotelRow icon={FaMosque} hotel={card.madinah} nights={madinahNights} />
        </div>

        <div
          className="flex justify-between md:flex-col-reverse md:items-start gap-2
                lg:flex lg:flex-row lg:items-center lg:justify-between pt-1"
        >
          {detailLink ? (
            <Button asChild className="rounded-full text-sm px-5 h-8 ">
              <Link href={detailLink}>
                {card.buttonText} <MdArrowOutward className="text-white " />
              </Link>
            </Button>
          ) : (
            <Button className="rounded-full text-sm px-5 h-8 ">
              {card.buttonText} <MdArrowOutward className="text-white " />
            </Button>
          )}
          <div className="flex flex-col items-center">
            <p className="text-[10px] tracking-tight font-semibold">{card.start}</p>
            <p className="font-bold text-primary">{card.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StarPackageCard;
