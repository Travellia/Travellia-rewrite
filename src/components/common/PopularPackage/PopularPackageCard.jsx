import Image from "next/image";
import React from "react";

const PopularPackageCard = ({ data }) => {
  return (
    <a
      href="#plan-your-trip"
      className="group flex items-center gap-4 rounded-2xl p-1.5 transition-colors hover:bg-sand"
    >
      <span className="relative size-20 shrink-0 overflow-hidden rounded-xl">
        <Image
          src={data.image}
          alt={data.place}
          fill
          sizes="80px"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </span>
      <span className="flex flex-col gap-0.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-ink/60">
          {data.days}
        </span>
        <span className="font-display font-bold uppercase tracking-tight text-ink">
          {data.place}
        </span>
        <span className="text-sm text-ink/60">
          <span className="font-bold text-gold-deep">{data.price}</span> {data.person}
        </span>
      </span>
    </a>
  );
};

export default PopularPackageCard;
