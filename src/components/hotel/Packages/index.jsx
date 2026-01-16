import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import React from "react";
import SideMenu from "./SideMenu/index.";
import PackagesClient from "./PackagesClient";
import Image from "next/image";

const Packages = () => {
  const PACKAGES_DATA = [
    {
      id: "1",
      stars: 5,
      package: "5 STAR HOTEL",
      title: "THE IMPERIAL GRAND PALACE ",
      location: "234 Palm Street, Malibu, CA 90265, USA",
      discountPrice: 499,
      oldPrice: 699,
      description: "*Free cancellation up to 24 hours before check-in",
      image: "/hotel/Packages/Cards/Image1.png",
    },
    {
      id: "2",
      stars: 5,
      package: "5 STAR HOTEL",
      title: "THE IMPERIAL GRAND PALACE ",
      location: "234 Palm Street, Malibu, CA 90265, USA",
      discountPrice: 499,
      oldPrice: 699,
      description: "*Free cancellation up to 24 hours before check-in",
      image: "/hotel/Packages/Cards/Image2.png",
    },
    {
      id: "3",
      stars: 5,
      package: "5 STAR HOTEL",
      title: "THE IMPERIAL GRAND PALACE ",
      location: "234 Palm Street, Malibu, CA 90265, USA",
      discountPrice: 499,
      oldPrice: 699,
      description: "*Free cancellation up to 24 hours before check-in",
      image: "/hotel/Packages/Cards/Image3.png",
    },
    {
      id: "4",
      stars: 5,
      package: "5 STAR HOTEL",
      title: "THE IMPERIAL GRAND PALACE ",
      location: "234 Palm Street, Malibu, CA 90265, USA",
      discountPrice: 499,
      oldPrice: 699,
      description: "*Free cancellation up to 24 hours before check-in",
      image: "/hotel/Packages/Cards/Image4.png",
    },
    {
      id: "5",
      stars: 5,
      package: "5 STAR HOTEL",
      title: "THE IMPERIAL GRAND PALACE ",
      location: "234 Palm Street, Malibu, CA 90265, USA",
      discountPrice: 499,
      oldPrice: 699,
      description: "*Free cancellation up to 24 hours before check-in",
      image: "/hotel/Packages/Cards/Image5.png",
    },
    {
      id: "6",
      stars: 5,
      package: "5 STAR HOTEL",
      title: "THE IMPERIAL GRAND PALACE ",
      location: "234 Palm Street, Malibu, CA 90265, USA",
      discountPrice: 499,
      oldPrice: 699,
      description: "*Free cancellation up to 24 hours before check-in",
      image: "/hotel/Packages/Cards/Image6.png",
    },

    {
      id: "7",
      stars: 5,
      package: "5 STAR HOTEL",
      title: "THE IMPERIAL GRAND PALACE ",
      location: "234 Palm Street, Malibu, CA 90265, USA",
      discountPrice: 499,
      oldPrice: 699,
      description: "*Free cancellation up to 24 hours before check-in",
      image: "/hotel/Packages/Cards/Image5.png",
    },
    {
      id: "8",
      stars: 5,
      package: "5 STAR HOTEL",
      title: "THE IMPERIAL GRAND PALACE ",
      location: "234 Palm Street, Malibu, CA 90265, USA",
      discountPrice: 499,
      oldPrice: 699,
      description: "*Free cancellation up to 24 hours before check-in",
      image: "/hotel/Packages/Cards/Image6.png",
    },
    {
      id: "9",
      stars: 5,
      package: "5 STAR HOTEL",
      title: "THE IMPERIAL GRAND PALACE ",
      location: "234 Palm Street, Malibu, CA 90265, USA",
      discountPrice: 499,
      oldPrice: 699,
      description: "*Free cancellation up to 24 hours before check-in",
      image: "/hotel/Packages/Cards/Image3.png",
    },
    {
      id: "10",
      stars: 5,
      package: "5 STAR HOTEL",
      title: "THE IMPERIAL GRAND PALACE ",
      location: "234 Palm Street, Malibu, CA 90265, USA",
      discountPrice: 499,
      oldPrice: 699,
      description: "*Free cancellation up to 24 hours before check-in",
      image: "/hotel/Packages/Cards/Image4.png",
    },
    {
      id: "11",
      stars: 5,
      package: "5 STAR HOTEL",
      title: "THE IMPERIAL GRAND PALACE ",
      location: "234 Palm Street, Malibu, CA 90265, USA",
      discountPrice: 499,
      oldPrice: 699,
      description: "*Free cancellation up to 24 hours before check-in",
      image: "/hotel/Packages/Cards/Image5.png",
    },
    {
      id: "12",
      stars: 5,
      package: "5 STAR HOTEL",
      title: "THE IMPERIAL GRAND PALACE ",
      location: "234 Palm Street, Malibu, CA 90265, USA",
      discountPrice: 499,
      oldPrice: 699,
      description: "*Free cancellation up to 24 hours before check-in",
      image: "/hotel/Packages/Cards/Image6.png",
    },
  ];
  return (
    <section className="relative">
      <Image
        src="/hotel/Ballon.png"
        alt="background"
        width={300}
        height={300}
        className="absolute top-1/2 left-0 "
        loading="lazy"
      />

      <Image
        src="/hotel/passport.png"
        alt="passport"
        width={300}
        height={300}
        className="absolute right-0 bottom-0 "
        loading="lazy"
      />
      <ContentLayoutWrapper className=" flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:gap-6">
        {/* Cards */}
        <div className="lg:col-span-8">
          <PackagesClient packages={PACKAGES_DATA} />
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-4">
          <SideMenu />
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default Packages;
