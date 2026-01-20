import Image from "next/image";
import React from "react";

const PackageCard = ({ data }) => {
  return (
    <div>
      <div className="w-full h-full">
        <Image
          src={data.image}
          alt="Image.png"
          fill
          loading="lazy"
          className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      </div>

      {/* Text Overlay */}
      <h3 className="text-xl font-semibold absolute bottom-0 left-0 right-0 p-6 text-white text-center">
        {data.description} <br /> {data.startingPrice}
      </h3>
    </div>
  );
};

export default PackageCard;
