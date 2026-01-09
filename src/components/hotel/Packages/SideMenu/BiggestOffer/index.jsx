import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const BiggestOffer = () => {
  return (
    <section className="relative w-72 h-100  rounded-3xl">
      {/* Background Image */}
      <Image
        src="/hotel/Packages/BiggestOffer/bg.png"
        alt="bg-image"
        fill
        className="object-cover  rounded-3xl"
      />

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-start pt-10 h-full text-white gap-4">
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
