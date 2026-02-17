import React from "react";
import CarouselWrapper from "@/components/ui/carousel";
import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import { Button } from "@/components/ui/button";
import { FaArrowRightLong } from "react-icons/fa6";

const Welcome = ({ data }) => {
  return (
    <section
      className={`${data.heightClassName} relative max-w-[100vw] flex items-center justify-center`}
    >
      <CarouselWrapper
        slides={data.slides}
        className="!absolute"
        navigation={true}
      />

      <ContentLayoutWrapper className="flex flex-col items-center justify-center gap-7 z-10 text-center">
        <h1 className="font-bold text-white text-[clamp(2rem,6vw,6rem)]">
          {data.title}
        </h1>

        {data.subtitle && <p className="text-white/90 text-lg">{subtitle}</p>}

        {data.buttons && (
          <div className="flex flex-col md:flex-row gap-6">
            {data.buttons.map((btn, index) => (
              <Button
                key={index}
                size="lg"
                variant={btn.variant || "default"}
                onClick={btn.onClick}
                className="rounded-full px-6 py-3 flex items-center gap-2"
              >
                <span className="font-semibold">{btn.label}</span>
                <FaArrowRightLong />
              </Button>
            ))}
          </div>
        )}
      </ContentLayoutWrapper>
    </section>
  );
};

export default Welcome;
