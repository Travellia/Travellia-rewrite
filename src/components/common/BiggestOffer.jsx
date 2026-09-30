import ArrowButton from "@/components/ui/ArrowButton";
import Image from "next/image";
import React from "react";

const BiggestOffer = () => {
  return (
    <section className="relative flex min-h-[340px] w-full flex-col justify-end overflow-hidden rounded-card p-6 text-white shadow-soft">
      <Image
        src="/common/BiggestOffer/bg.png"
        alt=""
        fill
        sizes="(max-width: 1024px) 100vw, 30vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />

      <div className="relative z-10 flex flex-col gap-4">
        <span className="w-fit rounded-full bg-gold px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink">
          Limited time
        </span>
        <h2 className="font-display text-4xl font-extrabold uppercase leading-[0.9] tracking-tight">
          Biggest
          <br />
          offer
        </h2>
        <ArrowButton href="#plan-your-trip" tone="glass" size="sm">
          Book Now
        </ArrowButton>
      </div>
    </section>
  );
};

export default BiggestOffer;
