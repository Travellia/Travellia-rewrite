import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";

import { FaLocationArrow } from "react-icons/fa";

import React from "react";
import Image from "next/image";
import BookPackageCard from "@/components/common/BookPackageCard";

const index = ({ data1, data2 }) => {
  return (
    <section className="w-full">
      <ContentLayoutWrapper className="flex flex-col gap-20 items-center w-full py-10">
        {/* -------------------- TravelItineraries --------------------  */}
        <div className="flex flex-col gap-8">
          <h1 className="heading-with-space">{data1.heading}</h1>
          {/* <div className="flex flex-col gap-8 "> */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3 xl:grid-rows-1 place-items-center gap-8">
            {data1.packageDataCar.map((data, index) => {
              // 3rd card (index 2)
              if (index === 2) {
                return (
                  <div
                    key={index}
                    className="md:col-span-2 xl:col-span-1 md:flex md:justify-center"
                  >
                    <BookPackageCard data={data} isOdd={index % 2 !== 0} />
                  </div>
                );
              }

              return (
                <BookPackageCard
                  data={data}
                  isOdd={index % 2 !== 0}
                  key={index}
                />
              );
            })}
          </div>

          {/* </div> */}
        </div>
        {/* -------------------- Travellia referral program -------------------- */}
        <div className="flex flex-col gap-5">
          {/* heading */}
          <h1 className="heading">{data2.heading}</h1>

          {/* Description */}
          <p className="para font-bold">{data2.description}</p>

          {/* Discount */}
          <div className="flex flex-col items-center lg:flex-row  gap-10">
            {/* Image */}
            <div className="h-full w-full">
              <Image
                src={"/holidayPackage/TravelItinearies/discount-card.png"}
                alt="discount card"
                width={500}
                height={400}
                className="bg-secondary p-5 rounded-3xl h-full w-full "
              />
            </div>

            {/* Bulltes */}
            <div className="flex flex-col gap-2 justify-center">
              {data2.bullets.map((item) => (
                <div key={item.id} className="flex items-start gap-3">
                  <FaLocationArrow className="text-primary shrink-0 h-full " />

                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
