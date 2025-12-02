import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import React from "react";
import DestinatonCard from "./DestinatonCard";
import { Button } from "@/components/ui/button";

const DESTINAION_CARDS_DATA = [
  {
    id: 1,
    src: "/home/popular-destinations/destination1.jpg",
    country: "Barlin",
    city: "France",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis accusantium quod sed non culpa",
    rating: 3,
    isSaleCard: false,
    css: "col-start-1 col-end-5 row-start-1 row-end-2",
  },
  {
    id: 2,
    src: "/home/popular-destinations/destination2.jpg",
    country: "Amsterdam",
    city: "Netherlands",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis accusantium quod sed non culpa",
    rating: 0,
    isSaleCard: true,
    price: 480,
    duration: "5 days 4 nights",
    tags: ["largest city", "canals", "world-class museums"],
    css: "col-start-5 col-end-8 row-start-1 row-end-2",
  },
  {
    id: 3,
    src: "/home/popular-destinations/destination3.jpg",
    country: "Moscow",
    city: "Russia",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis accusantium quod sed non culpa",
    rating: 0,
    isSaleCard: false,
    css: "col-start-8 col-end-11 row-start-1 row-end-2",
  },
  {
    id: 4,
    src: "/home/popular-destinations/destination4.jpg",
    country: "Amsterdam",
    city: "Netherlands",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis accusantium quod sed non culpa",
    rating: 0,
    isSaleCard: false,
    css: "col-start-1 col-end-4 row-start-2 row-end-3",
  },
  {
    id: 5,
    src: "/home/popular-destinations/destination5.jpg",
    country: "Moscow",
    city: "Russia",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis accusantium quod sed non culpa",
    rating: 0,
    isSaleCard: false,
    css: "col-start-4 col-end-7 row-start-2 row-end-3",
  },
  {
    id: 6,
    src: "/home/popular-destinations/destination6.jpg",
    country: "Barlin",
    city: "France",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis accusantium quod sed non culpa",
    rating: 3,
    isSaleCard: false,
    css: "col-start-7 col-end-11 row-start-2 row-end-3",
  },
];

const index = () => {
  return (
    <section className="w-full min-h-screen pt-28">
      <ContentLayoutWrapper
        className={"flex flex-col items-center justify-center gap-3 pt-20"}
      >
        <div className="text-center mb-8">
          <h4 className="text-base text-gray-600 font-semibold uppercase">
            Our popular
          </h4>
          <h2 className="text-5xl font-bold uppercase text-primary">
            Destinations
          </h2>
        </div>
        <div className="grid grid-cols-10 grid-rows-2 gap-6 w-full">
          {DESTINAION_CARDS_DATA.map((card, i) => (
            <div
              key={card.id}
              className={`${card.css} rounded-4xl overflow-hidden`}
            >
              <DestinatonCard
                data={card}
                largeText={i === 0 || i === DESTINAION_CARDS_DATA.length - 1}
              />
            </div>
          ))}
        </div>
        <Button className={"mt-10 px-20 py-6 text-xl text-white rounded-full"}>
          Load More
        </Button>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
