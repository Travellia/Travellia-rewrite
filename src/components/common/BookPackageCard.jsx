import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegUser } from "react-icons/fa";

const BookPackageCard = ({ data, isOdd, href }) => {
  return (
    <Card
      className={`group relative h-[clamp(380px,32vw,700px)] w-full min-w-[260px] max-w-[350px] !shadow-none !border-none  bg-transparent !p-0 overflow-hidden rounded-3xl`}
    >
      <Image
        src={data.image}
        alt={data.city || data.package || "package"}
        width={200}
        height={200}
        className="object-cover h-6/10 absolute top-0 left-0 w-full rounded-3xl ${
          group-hover:h-full transition-all duration-500 "
      />
      <div className="p-4 w-9/10 flex items-center justify-center absolute left-1/2 -translate-x-1/2 rounded-3xl bg-secondary bottom-0 group-hover:bg-white/85 group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:h-7/10 transition-all duration-500">
        <div className="w-full h-full flex flex-col items-center justify-center gap-5">
          <div className="flex items-center justify-between gap-3 text-gray-500">
            {data.days ? (
              <>
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
              </>
            ) : data.stars ? (
              <div className="flex items-center justify-between gap-3 text-gray-500">
                <p>{"⭐".repeat(data.stars)}</p>
              </div>
            ) : null}
          </div>

          <div className="flex flex-col items-center gap-1">
            <h2 className="text-2xl font-semibold text-primary uppercase">
              {data.city ? data.city : data.package}
            </h2>

            <div className="mx-auto flex items-center justify-center">
              {data.country ? (
                <>
                  <MapPin className="w-4 h-4 text-gray-500 mr-1" />
                  <span>{data.country}</span>
                </>
              ) : (
                <span>{data.country ? data.country : data.title}</span>
              )}
            </div>
          </div>

          <div className="h-px w-full bg-gray-300" />

          <div className="flex items-baseline justify-between gap-5">
            {data.priceLabel && (
              <div className="text-sm text-gray-500 font-semibold">
                {data.priceLabel}
              </div>
            )}
            <div className="text-3xl text-primary font-bold">
              &pound;{data.discountPrice}
            </div>
            {data.oldPrice && (
              <div className="text-xl text-gray-500 font-semibold line-through">
                &pound;{data.oldPrice}
              </div>
            )}
          </div>

          <div className="text-sm text-gray-500 px-10 text-center">
            {data.description}
          </div>

          {href ? (
            <Button
              asChild
              className="rounded-full px-10 py-2 self-stretch mx-10"
            >
              <Link href={href}>Book Now</Link>
            </Button>
          ) : (
            <Button className="rounded-full px-10 py-2 self-stretch mx-10">
              Book Now
            </Button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default BookPackageCard;
