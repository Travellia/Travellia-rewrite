import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import Image from "next/image";
import React from "react";
import PackageCard from "./PackageCard";

const PACKAGES_DATA = [
  {
    days: 8,
    people: 25,
    city: "Los angeles",
    country: "United States",
    discountPrice: 499,
    oldPrice: 599,
    description: "Experience the Vibrant City of Los Angeles",
    image: "/home/trending-packages/los-angeles.jpg",
  },
  {
    days: 8,
    people: 25,
    city: "Las Vegas",
    country: "United States",
    discountPrice: 499,
    oldPrice: 699,
    description: "Experience the Vibrant City of Las Vegas",
    image: "/home/trending-packages/las-vegas.png",
  },
  {
    days: 8,
    people: 25,
    city: "Maldives",
    country: "Maldives",
    discountPrice: 499,
    oldPrice: 599,
    description: "Experience the stunning islands of Maldives",
    image: "/home/trending-packages/maldives.png",
  },
];

const index = () => {
  return (
    <section>
      <div className="min-h-screen relative flex items-center justify-center">
        <Image
          src="/home/trending-packages/plane-wing.jpg"
          alt="Plane wing image"
          fill
        />
        <ContentLayoutWrapper className="text-center relative z-1">
          <Image
            src="/home/trending-packages/airplane.png"
            alt="airplane"
            width={200}
            height={200}
            className="object-cover mx-auto"
          />
          <h1 className="text-7xl text-gray-800 uppercase text-center font-bold">
            lets make your
          </h1>
          <h1 className="text-7xl text-primary uppercase text-center font-bold">
            next holiday amazing
          </h1>
        </ContentLayoutWrapper>
      </div>
      <div className="min-h-[30vh] lg:min-h-[60vh] md:px-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 items-center justify-start gap-8 relative z-50 p-12 lg:absolute lg:-top-25 lg:left-14">
          {PACKAGES_DATA.map((data, index) => (
            <PackageCard data={data} index={index} key={index} />
          ))}
          <div className="w-1/10 mt-6">
            <h4 className="uppercase text-gray-800 text-2xl">trendy</h4>
            <h1 className="uppercase text-primary text-5xl leading-14 font-bold">our trending tour packagees</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default index;
