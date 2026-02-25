import { MdArrowOutward } from "react-icons/md";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const LuxuryAssuringCard = ({ card }) => {
  return (
    <div className=" rounded-xl overflow-hidden shadow-2xl">
      <div className="w-full h-[24vh] sm:h-[11vh] lg:h-[18vh] xl:h-[21vh] overflow-hidden">
        <Image
          src={card.image}
          alt="card"
          height={150}
          width={250}
          className="w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-4 space-y-2">
        <p>{"⭐".repeat(card.stars)}</p>
        <p className="md:font-medium lg:text-sm text-primary lg:font-semibold">
          {card.description}
        </p>

        <div
          className="flex justify-between md:flex-col-reverse md:items-start gap-2 
                lg:flex lg:flex-row lg:items-center lg:justify-between"
        >
          <Button className="rounded-full text-sm px-5 h-8 ">
            {card.buttonText} <MdArrowOutward className="text-white " />
          </Button>
          <div className="flex flex-col items-start">
            <p className="font-bold text-primary">{card.price}</p>
            <p className="text-[10px] tracking-tight font-semibold">
              {card.perPerson}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuryAssuringCard;
