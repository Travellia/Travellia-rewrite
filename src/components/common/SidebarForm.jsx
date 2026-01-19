import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const SidebarForm = ({ data }) => {
  return (
    <section className="relative w-full">
      <Image
        src="/common/sidebarForm/bg-image.png"
        alt="bg.png"
        fill
        className="absolute h-auto z-1 rounded-3xl"
        loading="lazy"
      />
      <div className="relative flex flex-col justify-center items-center px-5 py-10 z-2 gap-3 text-white bg-primary/90 rounded-3xl">
        <p className="text-3xl">{data.fromText}</p>
        <h1 className="text-4xl font-bold">{data.pricePerPerson}</h1>
        <p className="text-2xl lg:w-full xl:w-[80%] text-center ">
          {data.details}
        </p>
        <h2 className="text-2xl w-full font-bold tracking-wider text-center">
          {data.totalPrice}
        </h2>
        <div className="flex gap-5 items-center ">
          <Image
            src="/common/sidebarForm/phone-logo.png"
            alt="logo"
            width={50}
            height={50}
            className="h-auto w-12 filter invert brightness-0 rounded-full p-2 hover:cursor-pointer"
          />
          <Button className="rounded-full bg-white text-primary hover:text-white">
            BOOK NOW
          </Button>
          <Image
            src="/common/sidebarForm/whatsapp-logo.png"
            alt="logo"
            width={40}
            height={40}
            className="h-auto w-auto rounded-full hover:cursor-pointer"
          />
        </div>
      </div>
    </section>
  );
};

export default SidebarForm;
