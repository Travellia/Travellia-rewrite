import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaRegUser } from "react-icons/fa";

const PackageCard = ({ data }) => {
  return (
    <Card
      className={
        "relative h-[clamp(380px,32vw,700px)] w-[clamp(280px,32vw,350px)] !shadow-none !border-none  bg-transparent !p-0 overflow-hidden rounded-3xl "
      }
    >
      <Image
        src={data.image}
        alt="data.city"
        width={200}
        height={200}
        className="object-cover absolute top-0 left-0 w-full rounded-3xl h-6/10"
      />
      <div className="p-4 w-9/10 flex items-center justify-center absolute left-1/2 -translate-x-1/2 rounded-3xl  top-1/2 -translate-y-12 h-5/10 bg-secondary">
        <div className="w-full h-full flex flex-col items-center justify-center gap-1">
          <p className="text-[8px]">{"⭐".repeat(data.stars)}</p>

          <div className="flex flex-col items-center gap-1">
            <h2 className="text-md font-semibold text-primary uppercase">
              {data.package}
            </h2>
            <div className="w-full border-1 bg-gray-300" />
            <h2 className="text-2xl font-semibold text-primary uppercase text-center">
              {data.title}
            </h2>

            <div className="mx-auto flex items-center justify-center">
              <MapPin className="w-4 h-4 text-gray-500 mr-1" />
              <span className="text-sm font-semibold">{data.location}</span>
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
