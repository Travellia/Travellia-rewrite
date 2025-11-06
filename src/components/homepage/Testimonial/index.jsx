import Image from "next/image";
import React from "react";
import TestimonialCard from "./TestimonialCard";

const TESTIMONIALS = [
  {
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi amet deleniti est voluptatum quia magnam. Adipisci, temporibus nemo, maxime voluptatum illum culpa corrupti animi vero deleniti sint iusto quisquam magni!",
    user: {
      name: "Shannon J. Williams",
      location: "New York, USA",
      image: "/home/testimonial/user-1.jpg"
    },
  },
  {
    comment:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi amet deleniti est voluptatum quia magnam. Adipisci, temporibus nemo, maxime voluptatum illum culpa corrupti animi vero deleniti sint iusto quisquam magni!",
    user: {
      name: "Shannon J. Williams",
      location: "New York, USA",
      image: "/home/testimonial/user-2.jpg"
    },
  },
  {
    comment:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi amet deleniti est voluptatum quia magnam. Adipisci, temporibus nemo, maxime voluptatum illum culpa corrupti animi vero deleniti sint iusto quisquam magni!",
    user: {
      name: "Shannon J. Williams",
      location: "New York, USA",
      image: "/home/testimonial/user-3.jpg"
    },
  },
  {
    comment:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi amet deleniti est voluptatum quia magnam. Adipisci, temporibus nemo, maxime voluptatum illum culpa corrupti animi vero deleniti sint iusto quisquam magni!",
    user: {
      name: "Shannon J. Williams",
      location: "New York, USA",
      image: "/home/testimonial/user-4.jpg"
    },
  },
];

const index = () => {
  return (
    <section className="min-h-[130vh] relative py-24 px-18">
      <div className="w-[60vw] h-[110vh] absolute left-0 bottom-0">
        <Image
          src="/home/testimonial/friends-trip.png"
          alt="friends trip"
          fill
          className=""
        />
      </div>
      <div className="flex item-center justify-between gap-7">
        <div className="flex-[45%] flex flex-col items-end py-8">
          <h1 className="text-primary text-6xl font-bold uppercase px-32">Testimonial</h1>
          <p className="text-gray-800 text-5xl font-normal uppercase ml-64 text-left">What our travellers are saying</p>
        </div>
        <div className="flex-[55%] grid grid-cols-2 grid-rows-2 gap-5">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard testimonial={testimonial} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default index;
