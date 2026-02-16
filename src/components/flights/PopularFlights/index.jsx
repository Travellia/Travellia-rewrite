import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import React from "react";
import { Button } from "@/components/ui/button";
import OurPopularCard from "@/components/common/OurPopular/OurPopularCard";
import Image from "next/image";

const FLIGHTS_CARDS_DATA = [
  {
    id: 1,
    src: "/flights/PopularFlights/Barlin.png",
    country: "Barlin",
    city: "France",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscin elit  tellus, ",
    rating: 3,
    isSaleCard: false,
    css: "col-start-1 col-end-11 row-start-1 row-end-2 md:col-start-1 md:col-end-7 md:row-start-1 md:row-end-2 xl:col-start-1 xl:col-end-5 xl:row-start-1 xl:row-end-2 ",
  },
  {
    id: 2,
    src: "/flights/PopularFlights/Amsterdam.png",
    country: "Amsterdam",
    city: "Netherlands",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscin elit  tellus, luctus nec ullamcorper mattis.",
    rating: 0,
    isSaleCard: true,
    price: 480,
    duration: "5 days 4 nights",
    tags: ["largest city", "canals", "world-class museums"],
    css: "col-start-1 col-end-11 row-start-2 row-end-3  md:col-start-7 md:col-end-11 md:row-start-1 md:row-end-2 xl:col-start-5 xl:col-end-8 xl:row-start-1 xl:row-end-2",
  },
  {
    id: 3,
    src: "/flights/PopularFlights/Moscow.png",
    country: "Moscow",
    city: "Russia",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscin elit  tellus, luctus nec ullamcorper mattis.",
    rating: 0,
    isSaleCard: false,
    css: "col-start-1 col-end-11 row-start-3 row-end-4  md:col-start-1 md:col-end-5 md:row-start-2 md:row-end-3 xl:col-start-8 xl:col-end-11 xl:row-start-1 xl:row-end-2",
  },
  {
    id: 4,
    src: "/flights/PopularFlights/South-Africa.png",
    country: "South-Africa",
    city: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscin elit  tellus, luctus nec ullamcorper mattis.",
    rating: 0,
    isSaleCard: false,
    css: "col-start-1 col-end-11 row-start-4 row-end-5 md:col-start-5 md:col-end-11 md:row-start-2 md:row-end-3 xl:col-start-1 xl:col-end-4 xl:row-start-2 xl:row-end-3",
  },
  {
    id: 5,
    src: "/flights/PopularFlights/Eygypt.png",
    country: "Eygypt",
    city: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscin elit  tellus, luctus nec ullamcorper mattis.",
    rating: 0,
    isSaleCard: false,
    css: "col-start-1 col-end-11 row-start-5 row-end-6 md:col-start-1 md:col-end-7 md:row-start-3 md:row-end-4  xl:col-start-4 xl:col-end-7 xl:row-start-2 xl:row-end-3",
  },
  {
    id: 6,
    src: "/flights/PopularFlights/Asia.png",
    country: "Asia",
    city: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipiscin elit  tellus, luctus nec ullamcorper mattis.",
    rating: 3,
    isSaleCard: false,
    css: "col-start-1 col-end-11 row-start-6 row-end-7 md:col-start-7 md:col-end-11 md:row-start-3 md:row-end-4 xl:col-start-7 xl:col-end-11 xl:row-start-2 xl:row-end-3",
  },
];

const index = () => {
  return (
    <section className="w-full min-h-screen relative ">
      <Image
        src="/flights/PopularFlights/plane.png"
        alt="plane"
        height={500}
        width={500}
        className="hidden md:block absolute md:-translate-y-5 xl:-translate-y-10 top-0 -z-1"
      />{" "}
      <Image
        src="/flights/PopularFlights/passport.png"
        alt="plane"
        height={250}
        width={250}
        className="hidden md:block absolute md:-translate-y-5 xl:-translate-y-10 bottom-0 -z-1"
      />{" "}
      <Image
        src="/flights/PopularFlights/ballon.png"
        alt="plane"
        height={250}
        width={250}
        className="hidden md:block absolute md:-translate-y-5 xl:-translate-y-10 top-1/2 right-0 -z-1"
      />
      <ContentLayoutWrapper
        className={"flex flex-col items-center justify-center gap-10 z-3"}
      >
        <div className="text-center ">
          <h4 className="heading-para">Our popular</h4>
          <h2 className="heading">FLIGHTS</h2>
        </div>
        <div className="grid grid-cols-10 grid-rows-2 gap-6 w-full">
          {FLIGHTS_CARDS_DATA.map((card, i) => (
            <div
              key={card.id}
              className={`${card.css} rounded-4xl overflow-hidden`}
            >
              <OurPopularCard
                data={card}
                largeText={i === 0 || i === FLIGHTS_CARDS_DATA.length - 1}
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
