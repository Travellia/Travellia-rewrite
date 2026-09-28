import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import ArrowButton from "@/components/ui/ArrowButton";
import { Eyebrow } from "@/components/ui/SectionHeading";
import Image from "next/image";
import React from "react";

const index = () => {
  const STATS = [
    {
      icon: "/icons/users-like.png",
      number: "10K+",
      label: "HAPPY TRAVELLERS",
    },
    {
      icon: "/icons/hands.png",
      number: "50+",
      label: "GLOBAL DESTINATIONS",
    },
    {
      icon: "/icons/signpost.png",
      number: "24/7",
      label: "CUSTOMER SUPPORT",
    },
  ];

  return (
    <section>
      <ContentLayoutWrapper className="flex flex-col gap-6">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          {/* Photo with big campaign text */}
          <div className="relative min-h-[340px] overflow-hidden rounded-frame bg-ink md:min-h-[460px]">
            <Image
              src="/home/summer-deals/plane.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover opacity-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
            <p className="absolute bottom-6 left-6 right-6 font-display text-[clamp(3rem,8vw,6.5rem)] font-extrabold uppercase leading-[0.85] tracking-tighter text-white">
              Big summer
              <br />
              <span className="text-gold">deals</span>
            </p>
          </div>

          {/* Offer card */}
          <div className="flex flex-col justify-between gap-8 rounded-frame border border-line bg-white p-8 shadow-soft md:p-10">
            <div className="flex flex-col gap-5">
              <Eyebrow>Are on now</Eyebrow>
              <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-ink md:text-4xl">
                Make your big summer{" "}
                <em className="font-serif font-normal normal-case tracking-normal text-gold">
                  getaway
                </em>{" "}
                happen.
              </h2>
              <p className="text-ink/65">
                Members save 25% or more on thousands of hotels worldwide.
              </p>
            </div>
            <ArrowButton href="/flights">Load More</ArrowButton>
          </div>
        </div>

        {/* Stats */}
        <div className="grid gap-4 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-5 rounded-card border border-line bg-white p-6 shadow-soft"
            >
              <span className="grid size-14 shrink-0 place-items-center rounded-full bg-sand">
                <Image src={stat.icon} alt="" width={28} height={28} className="object-contain" />
              </span>
              <div>
                <p className="font-display text-3xl font-bold text-ink">{stat.number}</p>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-ink/55">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
