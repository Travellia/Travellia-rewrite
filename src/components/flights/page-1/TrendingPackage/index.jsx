import BookPackageCard from "@/components/common/BookPackageCard";
import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import React from "react";

const PACKAGES_DATA = [
  {
    days: 8,
    people: 25,
    city: "BALI, INDONESIA",
    country: "United States",
    discountPrice: 499,
    oldPrice: 699,
    description: "Experience the Vibrant city  of Los Angeles.",
    image: "/flights/TrendingPackage/package1.png",
  },
  {
    days: 8,
    people: 25,
    city: "Las Vegas",
    country: "United States",
    discountPrice: 499,
    oldPrice: 699,
    description: "Experience the Vibrant city  of Los Angeles.",
    image: "/flights/TrendingPackage/package2.png",
  },
  {
    days: 8,
    people: 25,
    city: "Maldives",
    country: "Maldives",
    discountPrice: 499,
    oldPrice: 599,
    description: "Experience the stunning islands of Maldives",
    image: "/flights/TrendingPackage/package3.png",
  },
  {
    days: 8,
    people: 25,
    city: "Maldives",
    country: "Maldives",
    discountPrice: 499,
    oldPrice: 599,
    description: "Experience the Vibrant city  of Los Angeles.",
    image: "/flights/TrendingPackage/package4.png",
  },
  {
    days: 8,
    people: 25,
    city: "Maldives",
    country: "Maldives",
    discountPrice: 499,
    oldPrice: 599,
    description: "Experience the stunning islands of Maldives",
    image: "/flights/TrendingPackage/package5.png",
  },
  {
    days: 8,
    people: 25,
    city: "Maldives",
    country: "Maldives",
    discountPrice: 499,
    oldPrice: 599,
    description: "Experience the Vibrant city  of Los Angeles.",
    image: "/flights/TrendingPackage/package6.png",
  },
];

const index = () => {
  return (
    <section>
      <ContentLayoutWrapper className="flex flex-col gap-10">
        <div className="flex flex-col ">
          <p className="heading-para">TRENDY</p>
          <h1 className="heading">OUR TRENDING</h1>
          <h1 className="heading">FLIGHTS PACKAGES</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-2 lg:grid-rows-3 xl:grid-cols-3  xl:grid-rows-2 place-items-center justify-start gap-8 ">
          {PACKAGES_DATA.map((data, index) => (
            <BookPackageCard data={data} key={index} />
          ))}
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
