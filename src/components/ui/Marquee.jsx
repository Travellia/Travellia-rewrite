import { cn } from "@/lib/utils";

const DEFAULT_ITEMS = ["Flights", "Hotels", "Umrah", "Hajj", "Holidays", "Visa"];

/** Endless scrolling band of words separated by ✦. CSS-only. */
const Marquee = ({ items = DEFAULT_ITEMS, className }) => {
  // Two identical halves so the -50% keyframe loops seamlessly.
  const row = [...items, ...items, ...items];

  return (
    <div
      className={cn("overflow-hidden bg-ink py-5 text-white", className)}
      aria-label={items.join(", ")}
    >
      <div className="flex w-max animate-marquee" aria-hidden="true">
        {[0, 1].map((half) => (
          <div key={half} className="flex shrink-0 items-center">
            {row.map((item, i) => (
              <span
                key={`${half}-${i}`}
                className="flex items-center gap-8 pr-8 font-display text-2xl font-semibold uppercase tracking-tight md:text-3xl"
              >
                {item}
                <span className="text-gold">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
