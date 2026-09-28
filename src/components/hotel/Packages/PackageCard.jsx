import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin, Star } from "lucide-react";
import React from "react";

const PackageCard = ({ data }) => {
  return (
    <article className="group relative h-[460px] w-full overflow-hidden rounded-card bg-ink shadow-soft transition-shadow duration-300 hover:shadow-lift">
      <Image
        src={data.image}
        alt={data.title}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 420px"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />

      <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-2">
        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink backdrop-blur">
          {data.package}
        </span>
        <span className="flex items-center gap-0.5 rounded-full bg-ink/40 px-2.5 py-1 backdrop-blur">
          {[...Array(data.stars)].map((_, i) => (
            <Star key={i} className="size-3 fill-gold text-gold" />
          ))}
        </span>
      </div>

      <div className="absolute inset-x-3 bottom-3 flex flex-col gap-3 rounded-2xl border border-white/20 bg-ink/40 p-4 text-white backdrop-blur-md">
        <div>
          <h3 className="font-display text-lg font-bold uppercase leading-tight tracking-tight">
            {data.title}
          </h3>
          <p className="mt-1 flex items-center gap-1 text-sm text-white/75">
            <MapPin className="size-3.5 text-gold" />
            {data.location}
          </p>
        </div>

        {data.description && (
          <p className="text-xs text-white/70">{data.description}</p>
        )}

        <div className="flex items-center justify-between gap-3 border-t border-white/15 pt-3">
          {data.discountPrice ? (
            <p>
              <span className="font-display text-xl font-bold text-gold">
                &pound;{data.discountPrice}
              </span>
              {data.oldPrice && (
                <span className="ml-2 text-xs text-white/55 line-through">
                  &pound;{data.oldPrice}
                </span>
              )}
            </p>
          ) : (
            <p className="text-sm font-semibold text-gold">Best rates on request</p>
          )}
          <Link
            href="#plan-your-trip"
            className="inline-flex items-center gap-2 rounded-full bg-white py-1.5 pl-4 pr-1.5 text-sm font-semibold text-ink transition hover:bg-gold"
          >
            Book now
            <span className="grid size-7 place-items-center rounded-full bg-ink text-white transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="size-3.5" />
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PackageCard;
