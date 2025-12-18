import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <Card
      className={"relative justify-center gap-10 !px-10 !py-14 bg-secondary rounded-4xl"}
    >
      <p className="font-bold text-xl text-gray-500">"{testimonial.comment}"</p>
      <div className="min-h-px h-px w-full bg-gray-200" />
      <div className="flex items-center justify-center gap-7">
        <div className="flex-2 relative max-w-20 w-20 h-20 rounded-full overflow-hidden">
          <Image src={testimonial.user.image} alt={testimonial.user.name} fill className="object-cover" />
        </div>
        <div className="flex-4">
          <h2 className="text-primary capitalize text-2xl font-semibold">{testimonial.user.name}</h2>
          <p className="text-gray-700 capitalize text-lg font-semibold">{testimonial.user.location}</p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
