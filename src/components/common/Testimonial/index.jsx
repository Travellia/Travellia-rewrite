import Image from "next/image";
import React from "react";
import TestimonialCard from "./TestimonialCard";
import ContentLayoutWrapper from "../ContentLayoutWrapper";

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

const index = ({ data, variant = "home" }) => {
  const isHome = variant === "home";

  return (
    <section
      className={`
        relative py-24 p-10 sm:px-12 lg:px-18
        ${
          isHome
            ? "lg:min-h-screen xl:min-h-[130vh]"
            : "min-h-[135vh] xl:min-h-[115vh] lg:py-0"
        }
      `}
    >
      {/* Background */}
      <div
        className={`
          absolute left-0 bottom-0
          ${
            isHome
              ? "w-[100vw] lg:w-[60vw] h-[100vh]"
              : "hidden xl:block w-[80vw] lg:w-[60vw] h-[80vh]"
          }
        `}
      >
        <Image
          src="/common/Testimonial/friends-trip.png"
          alt="friends trip"
          fill
          className="z-0"
        />
      </div>

      {/* Main Layout */}
      <div
        className={`
          relative z-10
          ${
            isHome
              ? "lg:flex lg:flex-col xl:flex-row justify-between gap-7"
              : ""
          }
        `}
      >
        {/* Heading Wrapper (Only flight uses ContentLayoutWrapper spacing) */}
        {isHome ? (
          <div className="flex-[45%] flex flex-col gap-2 sm:gap-3 md:gap-5 items-center py-8">
            <h1 className="text-primary text-3xl md:text-6xl font-bold uppercase">
              Testimonial
            </h1>

            <p className="text-gray-800 text-lg md:text-2xl lg:text-4xl font-normal text-center md:text-left uppercase sm:mb-8 lg:mb-10">
              What our travellers are saying
            </p>
          </div>
        ) : (
          <ContentLayoutWrapper>
            <div className="flex-[45%] flex flex-col gap-2 sm:gap-3 md:gap-5 items-center xl:items-start py-8">
              <h1 className="text-primary text-3xl md:text-5xl font-bold uppercase">
                Testimonial
              </h1>

              <p className="text-gray-800 text-lg md:text-2xl lg:text-3xl font-normal text-center md:text-left uppercase xl:w-[35%]">
                What our travellers are saying
              </p>
            </div>
          </ContentLayoutWrapper>
        )}

        {/* Cards */}
        <div
          className={`
            ${
              isHome
                ? "flex-[55%] grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-1 grid-rows-2 gap-5"
                : "p-2 xl:p-10 grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 gap-5 relative xl:absolute xl:right-0 xl:top-0 xl:w-[60%] flex flex-col items-center justify-center"
            }
          `}
        >
          {data.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              variant={variant}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default index;
