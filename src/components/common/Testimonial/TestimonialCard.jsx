import Image from "next/image";
import React from "react";
import { Quote, Star } from "lucide-react";
import InitialsAvatar from "@/components/common/InitialsAvatar";
import { cn } from "@/lib/utils";

const TestimonialCard = ({ testimonial, className }) => {
  return (
    <figure
      className={cn(
        "flex h-full flex-col gap-6 rounded-card border border-line bg-white p-7 shadow-soft md:p-8",
        className
      )}
    >
      <div className="flex items-center justify-between">
        <span className="flex gap-0.5" aria-label="Rated 5 out of 5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="size-4 fill-gold text-gold" />
          ))}
        </span>
        <Quote className="size-8 text-gold/30" aria-hidden="true" />
      </div>

      <blockquote className="flex-1 leading-relaxed text-ink/75">
        &ldquo;{testimonial.comment}&rdquo;
      </blockquote>

      <figcaption className="flex items-center gap-4 border-t border-line pt-5">
        {testimonial.user.src ? (
          <span className="relative size-12 overflow-hidden rounded-full">
            <Image
              src={testimonial.user.src}
              alt={testimonial.user.alt}
              fill
              sizes="48px"
              className="object-cover"
            />
          </span>
        ) : (
          <InitialsAvatar name={testimonial.user.name} />
        )}
        <span className="flex flex-col">
          <span className="font-semibold text-ink">{testimonial.user.name}</span>
          <span className="text-xs text-ink/55">{testimonial.user.location}</span>
        </span>
      </figcaption>
    </figure>
  );
};

export default TestimonialCard;
