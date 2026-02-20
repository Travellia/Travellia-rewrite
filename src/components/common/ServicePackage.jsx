import Image from "next/image";
import React from "react";

const ServicePackage = ({ data }) => {
  return (
    <div className="flex flex-col gap-3 h-full">
      <div className="flex items-center gap-3">
        {/* Fixed-size square image container */}
        <div className="w-12 h-12 relative ">
          <Image
            src={data.image}
            alt={data.alt}
            fill
            className="object-contain"
            loading="lazy"
          />
        </div>
        <h1 className="text-lg font-bold">{data.title}</h1>
      </div>
      <hr />
      <p className="text-sm flex-1">{data.content}</p>
    </div>
  );
};

export default ServicePackage;
