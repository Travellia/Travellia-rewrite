import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const TONES = {
  ink: {
    label: "bg-ink text-white group-hover:bg-ink-soft",
    icon: "bg-gold text-ink",
  },
  gold: {
    label: "bg-gold text-ink group-hover:brightness-105",
    icon: "bg-ink text-gold",
  },
  light: {
    label: "bg-white text-ink border border-line group-hover:bg-sand",
    icon: "bg-ink text-white",
  },
  glass: {
    label:
      "bg-white/15 text-white border border-white/30 backdrop-blur-md group-hover:bg-white/25",
    icon: "bg-white text-ink",
  },
};

/**
 * Pill label with a round ↗ icon beside it. Renders a link when `href` is
 * set, otherwise a button (pass `type="submit"` for forms).
 */
const ArrowButton = ({
  href,
  children,
  tone = "ink",
  size = "md",
  className,
  ...props
}) => {
  const t = TONES[tone] ?? TONES.ink;
  const pad = size === "sm" ? "h-10 px-5 text-xs" : "h-12 px-6 text-sm";
  const icon = size === "sm" ? "size-10" : "size-12";

  const content = (
    <>
      <span
        className={cn(
          "inline-flex items-center rounded-full font-semibold uppercase tracking-[0.12em] shadow-soft transition-all duration-300",
          pad,
          t.label
        )}
      >
        {children}
      </span>
      <span
        aria-hidden="true"
        className={cn(
          "inline-flex items-center justify-center rounded-full shadow-soft transition-transform duration-300 group-hover:rotate-45",
          icon,
          t.icon
        )}
      >
        <ArrowUpRight className="size-4" />
      </span>
    </>
  );

  const classes = cn(
    "group inline-flex w-fit items-center gap-1.5 rounded-full outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none",
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes} {...props}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  );
};

export default ArrowButton;
