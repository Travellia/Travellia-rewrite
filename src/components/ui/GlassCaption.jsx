import { cn } from "@/lib/utils";

/** Frosted caption bar that sits over the bottom of an image card. */
const GlassCaption = ({ children, className }) => (
  <div
    className={cn(
      "absolute inset-x-3 bottom-3 flex items-center justify-between gap-3 rounded-2xl border border-white/25 bg-ink/35 px-4 py-3 text-white backdrop-blur-md",
      className
    )}
  >
    {children}
  </div>
);

export default GlassCaption;
