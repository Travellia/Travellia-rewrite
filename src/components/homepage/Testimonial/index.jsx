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
      image: "/home/testimonial/user-1.jpg",
    },
  },
  {
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi amet deleniti est voluptatum quia magnam. Adipisci, temporibus nemo, maxime voluptatum illum culpa corrupti animi vero deleniti sint iusto quisquam magni!",
    user: {
      name: "Shannon J. Williams",
      location: "New York, USA",
      image: "/home/testimonial/user-2.jpg",
    },
  },
  {
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi amet deleniti est voluptatum quia magnam. Adipisci, temporibus nemo, maxime voluptatum illum culpa corrupti animi vero deleniti sint iusto quisquam magni!",
    user: {
      name: "Shannon J. Williams",
      location: "New York, USA",
      image: "/home/testimonial/user-3.jpg",
    },
  },
  {
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi amet deleniti est voluptatum quia magnam. Adipisci, temporibus nemo, maxime voluptatum illum culpa corrupti animi vero deleniti sint iusto quisquam magni!",
    user: {
      name: "Shannon J. Williams",
      location: "New York, USA",
      image: "/home/testimonial/user-4.jpg",
    },
  },
];

const index = () => {
  return (
    <section className="lg:min-h-screen xl:min-h-[130vh] relative py-24 p-10 sm:px-12 lg:px-18">
      <div className="w-[100vw] lg:w-[60vw] h-[100vh] absolute left-0 bottom-0">
        <Image
          src="/home/testimonial/friends-trip.png"
          alt="friends trip"
          fill
          className="z-0"
        />
      </div>
      <div className="lg:flex item-center lg:flex-col xl:flex-row justify-between gap-7">
        <div className="flex-[45%] flex flex-col gap-2 sm:gap-3 md:gap-5 items-center   py-8 z-50">
          <h1 className="text-primary text-3xl md:text-6xl font-bold uppercase  ">
            Testimonial
          </h1>
          <p className="text-gray-800 text-lg md:text-2xl lg:text-4xl font-normal text-center md:text-left uppercase lg:text-left sm:mb-8 lg:mb-10 ">
            What our travellers are saying
          </p>
        </div>
        <div className="flex-[55%] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 grid-rows-2 gap-5">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard testimonial={testimonial} key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default index;
