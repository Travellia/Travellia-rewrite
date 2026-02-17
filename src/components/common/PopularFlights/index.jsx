import React from "react";
import Image from "next/image";
import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import { Button } from "@/components/ui/button";
import OurPopularCard from "@/components/common/OurPopular/OurPopularCard";

const index = ({ cards, show = true }) => {
  return (
    <section className="w-full min-h-screen relative ">
      <Image
        src="/common/plane.png"
        alt="plane"
        height={500}
        width={500}
        loading="lazy"
        className="hidden md:block absolute md:-translate-y-5 xl:-translate-y-10 top-0 -z-1"
      />{" "}
      <Image
        src="/common/passport.png"
        alt="passport"
        height={250}
        width={250}
        loading="lazy"
        className="hidden md:block absolute md:-translate-y-5 xl:-translate-y-10 bottom-0 -z-1"
      />{" "}
      <Image
        src="/common/ballon.png"
        alt="ballon"
        height={250}
        width={250}
        loading="lazy"
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
          {cards.map((card, i) => (
            <div
              key={card.id}
              className={`${card.css} rounded-4xl overflow-hidden`}
            >
              <OurPopularCard data={card} />
            </div>
          ))}
        </div>
        {show && <Button className={"btn-main"}>Load More</Button>}
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
