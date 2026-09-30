import Link from "next/link";
import ArrowIcon from "@/components/ui/ArrowIcon";
import { cn } from "@/lib/utils";

/** Round badge with text spinning around a ↗ arrow. */
const RotatingBadge = ({
  text = "EXPLORE THE WORLD • TRAVELLIA • ",
  href,
  label = "Explore",
  className,
}) => {
  const Wrapper = href ? Link : "div";

  return (
    <Wrapper
      {...(href ? { href, "aria-label": label } : { "aria-hidden": true })}
      className={cn(
        "group relative grid size-28 place-items-center rounded-full bg-ink text-white shadow-lift ring-8 ring-sand md:size-32",
        className
      )}
    >
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 size-full animate-spin-slow"
        aria-hidden="true"
      >
        <defs>
          <path
            id="rotating-badge-circle"
            d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0"
          />
        </defs>
        <text className="fill-white text-[8.5px] font-semibold uppercase">
          <textPath
            href="#rotating-badge-circle"
            textLength="230"
            lengthAdjust="spacing"
          >
            {text}
          </textPath>
        </text>
      </svg>
      <span className="grid size-10 place-items-center rounded-full bg-gold text-ink">
        <ArrowIcon className="size-5" />
      </span>
    </Wrapper>
  );
};

export default RotatingBadge;
