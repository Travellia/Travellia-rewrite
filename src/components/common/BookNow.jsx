"use client";

import { Button } from "@/components/ui/button";
import { MousePointer2 } from "lucide-react";
import Image from "next/image";
import React from "react";

const BookNow = ({ data, reverse, data2, data3 = [] }) => {
  return (
    <section className="flex flex-col-reverse lg:grid lg:grid-cols-20 lg:min-h-[50vh] lg:max-h-[60vh] xl:min-h-[80vh] xl:gap-10">
      {/* ================= CONTENT SECTION ================= */}
      <div
        className={`
    ${
      reverse ? "lg:col-start-10 lg:col-end-21" : "lg:col-start-1 lg:col-end-12"
    }
    row-start-1
    ${data2 ? "bg-[url('/umrahDetail/BookNow/bookNow.png')] bg-cover bg-center" : "bg-primary"}
    rounded-t-[50px]
    lg:rounded-t-none
    ${
      reverse
        ? "lg:rounded-bl-[100px] lg:rounded-tl-[100px]"
        : "lg:rounded-br-[100px] lg:rounded-tr-[100px]"
    }
    z-50
    flex
    items-center
    -mt-10
    lg:mt-0
    py-12
    lg:py-10
    xl:py-0
    relative
  `}
      >
        <div
          className={`flex items-center  h-full w-full px-6 md:px-12 ${data2 ? "justify-start" : "justify-center"}`}
        >
          {/* ===== CONDITION START ===== */}
          {data2 ? (
            // ✅ SHOW LIST SECTION
            <div className="flex flex-col gap-6 xl:gap-10lg:items-start">
              <h1 className="text-3xl lg:text-4xl xl:text-6xl font-bold capitalize text-primary pb-3">
                WHY BOOK
                <br />
                WITH US:
              </h1>

              <div className="flex flex-col gap-3">
                {data3.map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <MousePointer2 className="rotate-90 text-primary fill-primary" />
                    <p className="text-black text-sm xl:text-lg font-semibold">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            // ❌ SHOW DEFAULT SECTION
            <div className="flex flex-col gap-4 xl:gap-10 text-center lg:text-left items-center lg:items-start">
              <h1 className="text-3xl lg:text-5xl xl:text-7xl font-bold capitalize text-gray-200 pb-3">
                Book now,
                <br />
                pay later
              </h1>

              <p className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-200 max-w-[600px]">
                Book Flights Now, Pay Later. Lock-in today's price
                <br className="hidden md:block" />& pay in up to 26 weekly
                payments.
              </p>

              <p className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-200">
                No interest, no credit checks & no hidden fees.
              </p>

              <p className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-200">
                Book your next trip
              </p>

              <Button className="btn-main-reverse">Book Now</Button>
            </div>
          )}
          {/* ===== CONDITION END ===== */}
        </div>
      </div>

      {/* ================= IMAGE SECTION ================= */}
      <div
        className={`
          ${
            reverse
              ? "lg:col-start-1 lg:col-end-12"
              : "lg:col-start-10 lg:col-end-21"
          }
          row-start-1
          h-[40vh]
          sm:h-[50vh]
          lg:h-full
          w-full
          relative
        `}
      >
        <Image
          src={data?.image}
          alt={data?.alt}
          fill
          className="object-cover"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default BookNow;
