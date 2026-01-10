import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const BiggestOffer = () => {
  return (
    <section className="relative w-full min-h-[50vh] rounded-3xl overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hotel/Packages/BiggestOffer/bg.png"
        alt="bg-image"
        fill
        className="object-cover"
        loading="lazy"
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full pt-20 text-white gap-4">
        <h2 className="text-4xl font-bold text-center leading-tight">
          BIGGEST <br /> OFFER
        </h2>

        <Button className="rounded-full px-6 text-primary bg-white">
          BOOK NOW
        </Button>
      </div>
    </section>
  );
};

export default BiggestOffer;
