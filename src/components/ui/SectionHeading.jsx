import { cn } from "@/lib/utils";

/** "• LABEL" chip that sits above section headings. */
export const Eyebrow = ({ children, tone = "light", className }) => (
  <span
    className={cn(
      "inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em]",
      tone === "dark"
        ? "border border-white/20 bg-white/10 text-gold"
        : "border border-line bg-white/80 text-gold-deep",
      className
    )}
  >
    <span aria-hidden="true" className="size-1.5 rounded-full bg-gold" />
    {children}
  </span>
);

/**
 * Eyebrow + display headline (+ optional intro). Wrap one word of the title
 * in <em> to get the serif accent, e.g. title={<>Travel <em>beautifully</em></>}.
 * `stagger` indents the second line, like "Simple by nature. / Intentional by design."
 */
const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  intro,
  align = "left",
  tone = "light",
  stagger = false,
  as: Tag = "h2",
  className,
}) => {
  const centered = align === "center";
  const right = align === "right";

  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        centered && "items-center text-center",
        right && "items-end text-right",
        className
      )}
    >
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <Tag
        className={cn(
          "font-display font-bold uppercase leading-[1.02] tracking-tight text-3xl sm:text-4xl lg:text-5xl [&_em]:font-serif [&_em]:font-normal [&_em]:normal-case [&_em]:tracking-normal [&_em]:text-gold",
          tone === "dark" ? "text-white" : "text-ink"
        )}
      >
        <span className="block">{title}</span>
        {subtitle && (
          <span className={cn("block", stagger && !centered && "sm:pl-[18%]")}>
            {subtitle}
          </span>
        )}
      </Tag>
      {intro && (
        <p
          className={cn(
            "max-w-xl text-base leading-relaxed",
            tone === "dark" ? "text-white/70" : "text-ink/65"
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
