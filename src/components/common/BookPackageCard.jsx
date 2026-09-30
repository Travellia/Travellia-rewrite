import Image from "next/image";
import ArrowIcon from "@/components/ui/ArrowIcon";
import Link from "next/link";
import { CalendarDays, MapPin, Users } from "lucide-react";
import React from "react";

/**
 * Photo card with a frosted caption ("The Edit" style). Used for trending
 * tours, trending flights and travel itineraries.
 */
const BookPackageCard = ({ data, href }) => {
  const title = data.city || data.package;
  const subtitle = data.city ? data.country : data.title;

  return (
    <article className="group relative h-[440px] w-full overflow-hidden rounded-card bg-ink shadow-soft transition-shadow duration-300 hover:shadow-lift">
      <Image
        src={data.image}
        alt={title || "Package"}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 400px"
        className="object-cover transition-[scale] duration-[900ms] ease-arrive group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />

      {/* Top chips */}
      <div className="absolute left-4 right-4 top-4 flex flex-wrap items-center gap-2">
        {data.days ? (
          <>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
              <CalendarDays className="size-3.5" /> {data.days} days
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
              <Users className="size-3.5" /> {data.people} going
            </span>
          </>
        ) : data.stars ? (
          <span className="rounded-full bg-white/90 px-3 py-1 text-xs text-ink backdrop-blur">
            {"★".repeat(data.stars)}
          </span>
        ) : null}
      </div>

      {/* Caption */}
      <div className="absolute inset-x-3 bottom-3 flex flex-col gap-3 rounded-2xl border border-white/20 bg-ink/40 p-4 text-white backdrop-blur-md">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight">
              {title}
            </h3>
            {subtitle && (
              <p className="mt-0.5 flex items-center gap-1 text-sm text-white/75">
                {data.city && <MapPin className="size-3.5 shrink-0 text-gold" />}
                <span className="truncate">{subtitle}</span>
              </p>
            )}
          </div>
          <div className="shrink-0 text-right">
            {data.priceLabel && (
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/60">
                {data.priceLabel}
              </p>
            )}
            <p className="font-display text-2xl font-bold text-gold">
              &pound;{data.discountPrice}
            </p>
            {data.oldPrice && (
              <p className="text-xs text-white/55 line-through">
                &pound;{data.oldPrice}
              </p>
            )}
          </div>
        </div>

        {data.description && (
          <p className="line-clamp-2 text-sm text-white/75">{data.description}</p>
        )}

        {href && (
          <Link
            href={href}
            className="flex items-center justify-between rounded-full bg-white py-1.5 pl-5 pr-1.5 text-sm font-semibold text-ink transition hover:bg-gold"
          >
            Book now
            <span className="grid size-8 place-items-center rounded-full bg-ink text-white">
              <ArrowIcon className="size-4" />
            </span>
          </Link>
        )}
      </div>
    </article>
  );
};

export default BookPackageCard;
