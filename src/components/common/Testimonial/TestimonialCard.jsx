import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import InitialsAvatar from "@/components/common/InitialsAvatar";

const TestimonialCard = ({ testimonial, variant = "home" }) => {
  const isHome = variant === "home";

  return (
    <Card className="bg-secondary rounded-2xl px-10 py-12 h-full flex flex-col !gap-0">
      <p className="text-gray-500 font-semibold flex-1">
        "{testimonial.comment}"
      </p>

      <div className="bg-gray-200 h-px w-full my-6" />

      <div className="flex items-center gap-6">
        {testimonial.user.src ? (
          <div className="relative overflow-hidden rounded-full w-12 h-12">
            <Image
              src={testimonial.user.src}
              alt={testimonial.user.alt}
              fill
              sizes="48px"
              className="object-cover"
            />
          </div>
        ) : (
          <InitialsAvatar name={testimonial.user.name} />
        )}

        <div>
          <h2 className="text-primary capitalize text-lg font-semibold">
            {testimonial.user.name}
          </h2>

          <p className="text-gray-700 text-xs font-bold">
            {testimonial.user.location}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
