import Image from "next/image";
import ArrowIcon from "@/components/ui/ArrowIcon";
import Link from "next/link";
import { Star } from "lucide-react";
import React from "react";

const LuxuryAssuringCard = ({ card, link }) => {
  const action = (
    <>
      {card.buttonText}
      <span className="grid size-8 place-items-center rounded-full bg-gold text-ink">
        <ArrowIcon className="size-4" />
      </span>
    </>
  );
  const actionClass =
    "inline-flex items-center gap-3 rounded-full bg-ink py-1.5 pl-4 pr-1.5 text-sm font-semibold text-white transition hover:bg-ink-soft";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-card border border-line bg-white p-2 shadow-soft transition-all duration-300 hover:shadow-lift">
      {/* The source images have a blank band in their bottom third, so crop to the top. */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-[22px]">
        <Image
          src={card.image}
          alt={card.description}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover object-top transition-[scale] duration-[900ms] ease-arrive group-hover:scale-[1.03]"
        />
        {card.stars > 0 && (
          <span className="absolute left-3 top-3 flex items-center gap-0.5 rounded-full bg-white/90 px-2.5 py-1 backdrop-blur">
            {[...Array(card.stars)].map((_, i) => (
              <Star key={i} className="size-3 fill-gold text-gold" />
            ))}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <h3 className="text-base font-semibold leading-snug text-ink">
          {card.description}
        </h3>

        <div className="mt-auto flex items-end justify-between gap-3 border-t border-line pt-4">
          <div className="flex flex-col">
            {card.start && (
              <span className="text-[11px] font-semibold uppercase tracking-wider text-ink/60">
                {card.start}
              </span>
            )}
            <span className="font-display text-xl font-bold text-gold-deep">
              {card.price}
            </span>
            {card.perPerson && (
              <span className="text-xs text-ink/60">{card.perPerson}</span>
            )}
          </div>

          {link ? (
            <Link href={link} className={actionClass}>
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

export default LuxuryAssuringCard;
