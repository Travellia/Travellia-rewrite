import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import React from "react";
import DestinatonCard from "./DestinatonCard";
import { Button } from "@/components/ui/button";

const DESTINAION_CARDS_DATA = [
  {
    id: 1,
    src: "/home/popular-destinations/destination1.png",
    country: "Barlin",
    city: "France",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis accusantium quod sed non culpa",
    rating: 3,
    isSaleCard: false,
    css: "col-start-1 col-end-11 row-start-1 row-end-2 md:col-start-1 md:col-end-7 md:row-start-1 md:row-end-2 xl:col-start-1 xl:col-end-5 xl:row-start-1 xl:row-end-2 ",
  },
  {
    id: 2,
    src: "/home/popular-destinations/destination2.png",
    country: "Amsterdam",
    city: "Netherlands",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis accusantium quod sed non culpa",
    rating: 0,
    isSaleCard: true,
    price: 480,
    duration: "5 days 4 nights",
    tags: ["largest city", "canals", "world-class museums"],
    css: "col-start-1 col-end-11 row-start-2 row-end-3  md:col-start-7 md:col-end-11 md:row-start-1 md:row-end-2 xl:col-start-5 xl:col-end-8 xl:row-start-1 xl:row-end-2",
  },
  {
    id: 3,
    src: "/home/popular-destinations/destination3.png",
    country: "Moscow",
    city: "Russia",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis accusantium quod sed non culpa",
    rating: 0,
    isSaleCard: false,
    css: "col-start-1 col-end-11 row-start-3 row-end-4  md:col-start-1 md:col-end-5 row-start-2 row-end-3 xl:col-start-8 xl:col-end-11 xl:row-start-1 xl:row-end-2",
  },
  {
    id: 4,
    src: "/home/popular-destinations/destination4.png",
    country: "Amsterdam",
    city: "Netherlands",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis accusantium quod sed non culpa",
    rating: 0,
    isSaleCard: false,
    css: "col-start-1 col-end-11 row-start-4 row-end-5 md:col-start-5 md:col-end-11 md:row-start-2 md:row-end-3 xl:col-start-1 xl:col-end-4 xl:row-start-2 xl:row-end-3",
  },
  {
    id: 5,
    src: "/home/popular-destinations/destination5.png",
    country: "Moscow",
    city: "Russia",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis accusantium quod sed non culpa",
    rating: 0,
    isSaleCard: false,
    css: "col-start-1 col-end-11 row-start-5 row-end-6 md:col-start-1 md:col-end-7 md:row-start-3 md:row-end-4  xl:col-start-4 xl:col-end-7 xl:row-start-2 xl:row-end-3",
  },
  {
    id: 6,
    src: "/home/popular-destinations/destination6.png",
    country: "Barlin",
    city: "France",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis accusantium quod sed non culpa",
    rating: 3,
    isSaleCard: false,
    css: "col-start-1 col-end-11 row-start-6 row-end-7 md:col-start-7 md:col-end-11 md:row-start-3 md:row-end-4 xl:col-start-7 xl:col-end-11 xl:row-start-2 xl:row-end-3",
  },
];

const index = () => {
  return (
    <section className="w-full min-h-screen pt-5 ">
      <ContentLayoutWrapper
        className={"flex flex-col items-center justify-center gap-10 py-20"}
      >
        <div className="text-center ">
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
        <Button className={"btn-main"}>Load More</Button>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
