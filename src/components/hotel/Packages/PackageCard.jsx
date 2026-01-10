import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaRegUser } from "react-icons/fa";

const PackageCard = ({ data }) => {
  return (
    <Card
      className="
        relative
        h-170 sm:h-140 md:h-140 xl:h-162.5
        w-full
        max-w-90
        shadow-none! border-none! bg-transparent p-0! overflow-hidden rounded-3xl
      "
    >
      <Image
        src={data.image}
        alt="data.city"
        width={200}
        height={200}
        className="object-cover absolute top-0 left-0 w-full rounded-3xl sm:h7/10 xl:h-6/10"
        loading="lazy"
      />
      <div className="p-4 w-9/10 flex items-center justify-center absolute left-1/2 -translate-x-1/2 rounded-3xl  top-1/2 md:-translate-y-18 xl:-translate-y-12  sm:h7/10 xl:h-5/10 bg-secondary">
        <div className="w-full h-full flex flex-col items-center justify-center gap-4 sm:gap-3 xl:gap-1">
          <p className="text-[8px]">{"⭐".repeat(data.stars)}</p>

          <div className="flex flex-col items-center gap-1">
            <h2 className="text-md font-semibold text-primary uppercase">
              {data.package}
            </h2>
            <div className="w-full border bg-gray-300" />
            <h2 className="md:text-2xl lg:text-xl xl:text-2xl font-semibold text-primary uppercase text-center">
              {data.title}
            </h2>

            <div className="mx-auto flex items-center justify-center">
              <MapPin className="w-4 h-4 text-gray-500 mr-1" />
              <span className="text-sm md:text-[12px] lg:text-[10px]  xl:text-sm text-center xl:text-start font-semibold ">
                {data.location}
              </span>
            </div>
          </div>

          <div className="w-full border-1 bg-gray-300" />

          <div className="flex items-baseline justify-between gap-5">
            <div className="text-3xl text-primary font-bold">
              &pound;{data.discountPrice}
            </div>
            <div className="text-xl text-gray-500 font-semibold line-through">
              &pound;{data.oldPrice}
            </div>
          </div>

          <Button className="rounded-full px-10 py-2 self-stretch mx-10">
            Book Now
          </Button>
          <div className="text-sm text-gray-500 px-5 text-center">
            {data.description}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default PackageCard;
