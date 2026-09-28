import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import React from "react";

/**
 * Image tile with its label and price over the photo. The parent supplies the
 * size and rounded frame (it is usually a <Card> with a fixed height).
 */
const PackageCard = ({ data }) => {
  return (
    <div className="group absolute inset-0">
      <Image
        src={data.image}
        alt={data.description || "package"}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />

      <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3 text-white">
        <div className="flex flex-col gap-2">
          <h3 className="font-display text-lg font-bold uppercase leading-tight tracking-tight lg:text-xl">
            {data.description}
          </h3>
          {data.startingPrice && (
            <span className="w-fit rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-semibold backdrop-blur-md">
              {data.startingPrice}
            </span>
          )}
        </div>
        <span
          aria-hidden="true"
          className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-ink transition-transform duration-300 group-hover:rotate-45 group-hover:bg-gold"
        >
          <ArrowUpRight className="size-5" />
        </span>
      </div>
    </div>
  );
};

export default PackageCard;
