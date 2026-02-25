import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import ServicePackage from "@/components/common/ServicePackage";
import Image from "next/image";
import React from "react";

const HotelPackage = ({ data, reverse = false }) => {
  return (
    <section className="">
      <ContentLayoutWrapper
        className={`flex flex-col gap-8 items-center  lg:flex-row ${
          reverse ? "lg:flex-row-reverse" : ""
        }`}
      >
        <div className="w-full max-w-xs lg:max-w-md xl:max-w-sm mx-auto h-auto items-start">
          <Image
            src={data.image}
            alt={data.alt}
            width={600}
            height={700}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col gap-8 xl:gap-10 p-1">
          <div>
            <h1 className="text-3xl x:text-4xl font-bold text-primary">
              {data.heading}
            </h1>
            <h1 className="text-3xl xl:text-4xl font-light">{data.desc}</h1>
          </div>
          <div className="grid  md:grid-cols-2 md:space-x-5 space-y-5">
            {data.packages.map((item) => (
              <ServicePackage key={item.id} data={item} />
            ))}
          </div>
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default HotelPackage;
