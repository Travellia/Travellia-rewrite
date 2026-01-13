import React from "react";
import CarouselWrapper from "../ui/carousel";
import ContentLayoutWrapper from "../common/ContentLayoutWrapper";

const Welcome = () => {
  const slides = [
    { id: 1, image: "/hotel/welcome/slide-1.png" },
    { id: 2, image: "/hotel/welcome/slide-2.png" },
    { id: 3, image: "/hotel/welcome/slide-3.png" },
    { id: 4, image: "/hotel/welcome/slide-4.png" },
  ];

  return (
    <section className="h-[65vh] md:h-[72vh] relative xl:h-screen max-w-[100vw] flex items-center justify-center ">
      <CarouselWrapper
        slides={slides}
        className={"!absolute"}
        navigation={true}
      />
      <ContentLayoutWrapper className="flex flex-col items-center justify-center gap-7 z-10">
        <h1 className="font-semibold text-shadow  text-white  text-4xl  lg:text-6xl  xl:text-7xl ">
          Hotel
        </h1>
      </ContentLayoutWrapper>
    </section>
  );
};

export default Welcome;
