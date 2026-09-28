import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import OurPopularCard from "@/components/common/OurPopular/OurPopularCard";

const DESTINAION_CARDS_DATA = [
  {
    id: 1,
    src: "/home/popular-destinations/destination1.png",
    country: "Berlin",
    city: "Germany",
    description:
      "Historic landmarks, world-class museums and a vibrant food scene.",
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
      "Picturesque canals, charming streets and world-class museums.",
    rating: 0,
    isSaleCard: true,
    price: 480,
    duration: "5 days 4 nights",
    tags: ["canals", "culture", "museums"],
    css: "col-start-1 col-end-11 row-start-2 row-end-3  md:col-start-7 md:col-end-11 md:row-start-1 md:row-end-2 xl:col-start-5 xl:col-end-8 xl:row-start-1 xl:row-end-2",
  },
  {
    id: 3,
    src: "/home/popular-destinations/destination3.png",
    country: "Moscow",
    city: "Russia",
    description:
      "Iconic Red Square, grand architecture and rich cultural heritage.",
    rating: 0,
    isSaleCard: false,
    css: "col-start-1 col-end-11 row-start-3 row-end-4 md:col-start-1 md:col-end-5 md:row-start-2 md:row-end-3 xl:col-start-8 xl:col-end-11 xl:row-start-1 xl:row-end-2",
  },
  {
    id: 4,
    src: "/home/popular-destinations/destination4.png",
    country: "Amsterdam",
    city: "Netherlands",
    description:
      "Picturesque canals, charming streets and world-class museums.",
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
      "Iconic Red Square, grand architecture and rich cultural heritage.",
    rating: 0,
    isSaleCard: false,
    css: "col-start-1 col-end-11 row-start-5 row-end-6 md:col-start-1 md:col-end-7 md:row-start-3 md:row-end-4  xl:col-start-4 xl:col-end-7 xl:row-start-2 xl:row-end-3",
  },
  {
    id: 6,
    src: "/home/popular-destinations/destination6.png",
    country: "Berlin",
    city: "Germany",
    description:
      "Historic landmarks, world-class museums and a vibrant food scene.",
    rating: 3,
    isSaleCard: false,
    css: "col-start-1 col-end-11 row-start-6 row-end-7 md:col-start-7 md:col-end-11 md:row-start-3 md:row-end-4 xl:col-start-7 xl:col-end-11 xl:row-start-2 xl:row-end-3",
  },
];

const index = () => {
  return (
    <section className="w-full">
      <ContentLayoutWrapper className="flex flex-col gap-10">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            eyebrow="Our popular destinations"
            title={
              <>
                Handpicked places,
                <br />
                <em>planned around you.</em>
              </>
            }
          />
          <p className="max-w-sm text-ink/65">
            From European city breaks to safari and sunshine, these are the
            trips our travellers keep coming back for.
          </p>
        </div>
        <div className="grid grid-cols-10 gap-4 md:gap-6">
          {DESTINAION_CARDS_DATA.map((card) => (
            <div key={card.id} className={`${card.css} min-h-[380px]`}>
              <OurPopularCard data={card} href="#plan-your-trip" />
            </div>
          ))}
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
