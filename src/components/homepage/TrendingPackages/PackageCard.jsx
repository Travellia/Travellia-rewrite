import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import React from "react";
import { FaRegUser } from "react-icons/fa";

const PackageCard = ({ data, index }) => {
  const isOdd = index % 2 !== 0;
  return (
    <Card
      className={
        "relative h-[clamp(380px,32vw,700px)] w-[clamp(280px,32vw,350px)] !shadow-none !border-none  bg-transparent !p-0 overflow-hidden rounded-3xl"
      }
    >
      {/* <div className={`absolute ${isOdd ? "h-full" : "h-6/10"}`}> */}
      <img
        src={data.image}
        alt={data.city}
        fill
        className={`object-cover absolute top-0 left-0 w-full rounded-3xl ${
          isOdd ? "h-full" : "h-6/10"
        }`}
      />
      {/* </div> */}
      <div
        className={`p-4 w-9/10 flex items-center justify-center absolute left-1/2 -translate-x-1/2 rounded-3xl ${
          isOdd ? "bg-white/85 top-1/2 -translate-y-1/2 h-7/10" : "bg-secondary bottom-0"
        }`}
      >
        <div className="w-full h-full flex flex-col items-center justify-center gap-5">
          <div className="flex items-center justify-between gap-3 text-gray-500">
            <div className="flex items-center justify-between gap-1">
              <CalendarDays className="w-3 h-3 block" />
              <p>{data.days}</p>
              <p>Days</p>
            </div>
            <div className="flex items-center justify-between gap-1 text-gray-500">
              <FaRegUser className="w-3 h-3 block" />
              <p>{data.people}</p>
              <p>People</p>
              <p>Going</p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-1">
            <h2 className="text-2xl font-semibold text-primary uppercase">
              {data.city}
            </h2>

            <div className="mx-auto flex items-center justify-center">
              <MapPin className="w-4 h-4 text-gray-500 mr-1" />
              <span>{data.country}</span>
            </div>
          </div>

          <div className="h-px w-full bg-gray-300" />

          <div className="flex items-baseline justify-between gap-5">
            <div className="text-3xl text-primary font-bold">
              &pound;{data.discountPrice}
            </div>
            <div className="text-xl text-gray-500 font-semibold line-through">
              &pound;{data.oldPrice}
            </div>
          </div>

          <div className="text-sm text-gray-500 px-10 text-center">{data.description}</div>

          <Button className="rounded-full px-10 py-2 self-stretch mx-10">Book Now</Button>
        </div>
      </div>
    </Card>
  );
};

export default PackageCard;
