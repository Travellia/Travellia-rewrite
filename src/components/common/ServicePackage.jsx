import Image from "next/image";
import React from "react";

const ServicePackage = ({ data }) => {
  return (
    <div className="flex h-full flex-col gap-3 rounded-2xl border border-line bg-sand/50 p-4">
      <div className="flex items-center gap-3">
        {/* Fixed-size square image container */}
        <div className="relative size-10 shrink-0">
          <Image
            src={data.image}
            alt={data.alt}
            fill
            sizes="40px"
            className="object-contain"
            loading="lazy"
          />
        </div>
        <h3 className="font-semibold text-ink">{data.title}</h3>
      </div>
      <p className="flex-1 text-sm text-ink/70">{data.content}</p>
    </div>
  );
};

export default ServicePackage;
