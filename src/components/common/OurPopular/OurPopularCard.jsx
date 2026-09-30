import Image from "next/image";
import ArrowIcon from "@/components/ui/ArrowIcon";
import Link from "next/link";
import { MapPin, Star } from "lucide-react";

// Pass `href` only when the card is not already wrapped in a link.
const OurPopularCard = ({ data, href }) => {
  return (
    <article className="group relative h-full min-h-[380px] w-full overflow-hidden rounded-card bg-ink shadow-soft transition-shadow duration-300 hover:shadow-lift">
      <Image
        src={data.src}
        alt={`${data.country}, ${data.city}`}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-[scale] duration-[900ms] ease-arrive group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/15 to-ink/10" />

      {/* Top row */}
      <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
          <MapPin className="size-3.5 text-gold-deep" />
          {data.country}
          {data.city ? `, ${data.city}` : ""}
        </span>
        {data.rating > 0 && (
          <span className="flex items-center gap-0.5 rounded-full bg-ink/40 px-2.5 py-1 backdrop-blur">
            {[...Array(data.rating)].map((_, i) => (
              <Star key={i} className="size-3 fill-gold text-gold" />
            ))}
          </span>
        )}
      </div>

      {/* Caption */}
      <div className="absolute inset-x-3 bottom-3 flex flex-col gap-2 rounded-2xl border border-white/20 bg-ink/40 p-4 text-white backdrop-blur-md">
        <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight">
          Discover {data.country}
        </h3>
        <p className="line-clamp-2 text-sm text-white/75">{data.description}</p>

        {(data.price || data.duration) && (
          <div className="flex items-center justify-between gap-3 border-t border-white/15 pt-2 text-sm">
            {data.price && (
              <span>
                <span className="font-display text-lg font-bold text-gold">
                  &pound;{data.price}
                </span>
                <span className="text-white/60"> / person</span>
              </span>
            )}
            {data.duration && (
              <span className="text-xs uppercase tracking-wide text-white/70">
                {data.duration}
              </span>
            )}
          </div>
        )}

        {data.tags && (
          <div className="flex items-center justify-between gap-2">
            <div className="flex flex-wrap gap-1.5">
              {data.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
            {href ? (
              <Link
                href={href}
                aria-label={`Book ${data.country}`}
                className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-ink transition hover:bg-gold"
              >
                <ArrowIcon className="size-4" />
              </Link>
            ) : (
              <span
                aria-hidden="true"
                className="grid size-9 shrink-0 place-items-center rounded-full bg-white text-ink"
              >
                <ArrowIcon className="size-4" />
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
};

export default OurPopularCard;
