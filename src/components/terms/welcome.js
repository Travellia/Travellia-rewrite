import React from "react";
import CarouselWrapper from "../ui/carousel";
import ContentLayoutWrapper from "../common/ContentLayoutWrapper";

const Welcome = () => {
  const mainImage = [{ id: 1, image: "/terms/Image.png" }];

  return (
    <section className="h-[65vh] md:h-[72vh] relative xl:h-screen max-w-[100vw] flex items-center justify-center ">
      <CarouselWrapper
        slides={mainImage}
        className={"!absolute"}
        navigation={true}
      />
      <ContentLayoutWrapper className="flex flex-col items-center justify-center gap-7 z-10"></ContentLayoutWrapper>
    </section>
  );
};

export default Welcome;
