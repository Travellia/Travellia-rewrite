import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const UmrahPackageCard = ({ data, featured = false }) => {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-card p-2 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
        featured ? "bg-ink text-white" : "border border-line bg-white text-ink"
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-[22px]">
        <Image
          src={data.image}
          alt={data.alt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {featured && (
          <span className="absolute left-3 top-3 rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">
            Most premium
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5">
        <div className="flex flex-col gap-2">
          <span className="flex gap-0.5" aria-label={`${data.rating} star`}>
            {[...Array(data.rating)].map((_, i) => (
              <Star key={i} className="size-4 fill-gold text-gold" />
            ))}
          </span>
          <h3 className="font-display text-xl font-bold uppercase leading-tight tracking-tight">
            {data.title}
          </h3>
        </div>

        <ul className={cn("flex flex-col gap-2.5 text-sm", featured ? "text-white/75" : "text-ink/70")}>
          {data.features.map((feature) => (
            <li className="flex items-start gap-2.5" key={feature}>
              <span
                className={cn(
                  "mt-0.5 grid size-4 shrink-0 place-items-center rounded-full",
                  featured ? "bg-gold text-ink" : "bg-ink text-gold"
                )}
              >
                <Check className="size-2.5" />
              </span>
              {feature}
            </li>
          ))}
        </ul>

        <div
          className={cn(
            "mt-auto flex flex-col gap-4 border-t pt-5",
            featured ? "border-white/10" : "border-line"
          )}
        >
          <Link
            href={data.href}
            className={cn(
              "flex items-center justify-between rounded-full py-1.5 pl-5 pr-1.5 text-sm font-semibold transition",
              featured ? "bg-gold text-ink hover:brightness-105" : "bg-ink text-white hover:bg-ink-soft"
            )}
          >
            Book Now
            <span
              className={cn(
                "grid size-9 place-items-center rounded-full transition-transform duration-300 group-hover:rotate-45",
                featured ? "bg-ink text-gold" : "bg-gold text-ink"
              )}
            >
              <ArrowUpRight className="size-4" />
            </span>
          </Link>
          <p className={cn("text-center text-sm", featured ? "text-white/60" : "text-ink/60")}>
            Starting from{" "}
            <span className={cn("font-display text-2xl font-bold", featured ? "text-gold" : "text-gold-deep")}>
              £{data.price}
            </span>{" "}
            per person
          </p>
        </div>
      </div>
    </article>
  );
};

export default UmrahPackageCard;
