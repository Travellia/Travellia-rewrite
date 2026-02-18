import Image from "next/image";
import { data } from "@/lib/data/homepage-data";
import React from "react";

const CallUs = () => {
  return (
    <section className="relative w-full h-75">
      <Image
        src="/flight/MainContent/LeftMenu/CallUs/callcenterbg.png"
        alt="call center"
        fill
        className="object-cover rounded-4xl"
        loading="lazy"
      />
      <div className="absolute bg-black/70 rounded-4xl flex flex-col gap-5 justify-center items-center w-full h-full">
        <div className=" flex flex-col gap-2 justify-center items-center w-full">
          <p className="text-2xl md:text-4xl font-bold text-white">
            THE BEST & QUICK WAY
          </p>
          <p className="text-xl md:text-2xl font-normal md:tracking-widest text-white">
            TO LOCK THIS DEAL IS TO
          </p>
          <p className="text-xl md:text-2xl font-normal md:tracking-widest text-white">
            CALL US NOW
          </p>
        </div>
        <button className="bg-primary px-8 rounded-full font-bold text-4xl py-1 text-white ">
          {data.PhoneNumber}
        </button>
      </div>
    </section>
  );
};

export default CallUs;
