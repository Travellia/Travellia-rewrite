import React from "react";
import Image from "next/image";
import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import { Button } from "@/components/ui/button";
import OurPopularCard from "@/components/common/OurPopular/OurPopularCard";
import Link from "next/link";

const index = ({ cards, show = true, enableImages = true, heading = true }) => {
  return (
    <section className="w-full min-h-auto relative ">
      {enableImages && (
        <>
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
        </>
      )}
      <ContentLayoutWrapper
        className={"flex flex-col items-center justify-center gap-10 z-3 px-0"}
      >
        {heading && (
          <div className="text-center ">
            <h4 className="heading-para">Our popular</h4>
            <h2 className="heading">FLIGHTS</h2>
          </div>
        )}
        <div className="grid grid-cols-10  gap-6 w-full">
          {cards.map((card, i) => (
            <div
              key={card.id}
              className={`${card.css} rounded-4xl overflow-hidden`}
            >
              <Link href={`/flights/page-2/${card.id}`}>
                <OurPopularCard data={card} />
              </Link>
            </div>
          ))}
        </div>
        {show && <Button className={"btn-main"}>Load More</Button>}
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
