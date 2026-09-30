import { cn } from "@/lib/utils";

export default function ContentLayoutWrapper({ children, className }) {
  return (
    <div
      className={cn(
        "w-full max-w-[1240px] mx-auto px-5 md:px-8",
        className
      )}
    >
      {children}
    </div>
  );
}
