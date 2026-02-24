import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const TestimonialCard = ({ testimonial, variant = "home" }) => {
  const isHome = variant === "home";

  return (
    <Card className="bg-secondary rounded-2xl px-10 py-12">
      <p className="text-gray-500 font-semibold">"{testimonial.comment}"</p>

      <div className="bg-gray-200 h-px w-full my-6" />

      <div className="flex items-center gap-6">
        <div className="relative overflow-hidden rounded-full w-12 h-12">
          <Image
            src={testimonial.user.src}
            alt={testimonial.user.alt}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-primary capitalize text-lg font-semibold">
            {testimonial.user.name}
          </h2>

          <p className="text-gray-700 capitalize text-xs font-bold">
            {testimonial.user.location}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
