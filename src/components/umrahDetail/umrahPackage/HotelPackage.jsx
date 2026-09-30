import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import ServicePackage from "@/components/common/ServicePackage";
import HotelImageCarousel from "./HotelImageCarousel";
import HotelFacilities from "./HotelFacilities";
import HotelInfo from "./HotelInfo";
import React from "react";

const HotelPackage = ({ data, reverse = false }) => {
  const images = data.images?.length ? data.images : [data.image];

  return (
    <section className="flex flex-col gap-4">
      <ContentLayoutWrapper>
      <div
        className={`flex flex-col items-center gap-8 rounded-frame border border-line bg-white p-5 shadow-soft md:p-8 lg:flex-row ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        {/* shrink-0 with an explicit row width: this column's content is an
            aspect box of absolutely-positioned images, so its min-content is
            ~0 and flex shrink would otherwise collapse it against the text. */}
        <div className="w-full max-w-xs mx-auto lg:max-w-none lg:w-[28rem] lg:shrink-0 xl:w-[24rem]">
          <HotelImageCarousel images={images} alt={data.alt} />
        </div>
        <div className="flex flex-col gap-8 xl:gap-10 p-1">
          <div className="flex flex-col gap-2">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
              {data.heading}
            </p>
            <h2 className="font-display text-3xl font-bold uppercase leading-tight tracking-tight text-ink xl:text-4xl">
              {data.desc}
            </h2>
            {data.stars && (
              <p className="text-gold-accent" aria-label={`${data.stars} star hotel`}>
                {"★".repeat(data.stars)}
              </p>
            )}
          </div>
          <HotelInfo info={data.info} />
          <div className="grid gap-4 md:grid-cols-2">
            {data.packages.map((item) => (
              <ServicePackage key={item.id} data={item} />
            ))}
          </div>
        </div>
      </div>
      </ContentLayoutWrapper>

      <HotelFacilities facilities={data.info?.facilities} hotel={data.desc} />
    </section>
  );
};

export default HotelPackage;
