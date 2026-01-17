import React from "react";
import CarouselWrapper from "../ui/carousel";
import ContentLayoutWrapper from "../common/ContentLayoutWrapper";

const Welcome = () => {
  const slides = [
    { id: 1, image: "/flight/welcome/slide-1.png" },
    { id: 2, image: "/flight/welcome/slide-2.png" },
    { id: 3, image: "/flight/welcome/slide-3.png" },
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
          FLIGHT DETAIL
        </h1>
      </ContentLayoutWrapper>
    </section>
  );
};

export default Welcome;
