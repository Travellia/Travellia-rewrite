import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * ↗ that flies out to the top-right when its `group` is hovered, while a
 * second one arrives from the bottom-left. Put it inside the round icon of a
 * button or card; size it with `className` (defaults to size-4).
 */
const ArrowIcon = ({ className }) => (
  <span
    aria-hidden="true"
    className={cn("relative block size-4 overflow-hidden", className)}
  >
    <ArrowUpRight className="absolute inset-0 size-full transition-transform duration-300 ease-arrive group-hover:-translate-y-full group-hover:translate-x-full" />
    <ArrowUpRight className="absolute inset-0 size-full -translate-x-full translate-y-full transition-transform duration-300 ease-arrive group-hover:translate-x-0 group-hover:translate-y-0" />
  </span>
);

export default ArrowIcon;
