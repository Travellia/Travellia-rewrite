import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import ServicePackage from "@/components/common/ServicePackage";
import HotelImageCarousel from "./HotelImageCarousel";
import HotelFacilities from "./HotelFacilities";
import HotelInfo from "./HotelInfo";
import React from "react";

const HotelPackage = ({ data, reverse = false }) => {
  const images = data.images?.length ? data.images : [data.image];

  return (
    <section className="">
      <ContentLayoutWrapper
        className={`flex flex-col gap-8 items-center  lg:flex-row ${
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
          <div>
            <h1 className="text-3xl x:text-4xl font-bold text-primary">
              {data.heading}
            </h1>
            <h1 className="text-3xl xl:text-4xl font-light">{data.desc}</h1>
            {data.stars && (
              <p className="text-sm mt-1">{"⭐".repeat(data.stars)}</p>
            )}
          </div>
          <HotelInfo info={data.info} />
          <div className="grid  md:grid-cols-2 md:space-x-5 space-y-5">
            {data.packages.map((item) => (
              <ServicePackage key={item.id} data={item} />
            ))}
          </div>
        </div>
      </ContentLayoutWrapper>

      <HotelFacilities facilities={data.info?.facilities} hotel={data.desc} />
    </section>
  );
};

export default HotelPackage;
