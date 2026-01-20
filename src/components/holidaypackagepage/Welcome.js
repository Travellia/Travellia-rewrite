import Image from "next/image";
import React from "react";
import CarouselWrapper from "../ui/carousel";
import ContentLayoutWrapper from "../common/ContentLayoutWrapper";

const Welcome = () => {
  const slides = [
    { id: 1, image: "/holidayPackage/welcome/welcome1.jpg" },
    { id: 2, image: "/holidayPackage/welcome/welcome2.jpg" },
  ];

  return (
    <section className="h-[65vh] md:h-[72vh] relative lg:h-screen max-w-[100vw] flex items-center justify-center ">
      <CarouselWrapper
        slides={slides}
        className={"!absolute"}
        navigation={true}
      />
      <ContentLayoutWrapper className="flex flex-col items-center justify-center gap-7 z-10">
        <h1 className="font-semibold text-shadow  text-white  text-4xl sm:-translate-y-10 sm:text-5xl lg:-translate-y-20 lg:text-6xl xl:-translate-y-25 xl:text-7xl ">
          HOLIDAY PACKAGES
        </h1>
      </ContentLayoutWrapper>
    </section>
  );
};

export default Welcome;
