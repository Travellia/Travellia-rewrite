"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const Carousel = ({
  effect = "fade",
  effectOptions = { crossFade: true },
  speed = 3000,
  navigation = true,
  slides,
  className,
}) => {
  return (
    <Swiper
      modules={[Navigation, EffectFade, Autoplay]}
      effect={effect}
      fadeEffect={effectOptions}
      speed={speed}
      autoplay={{
        delay: speed,
        disableOnInteraction: false,
      }}
      navigation={navigation}
      loop={true}
      className={`w-full h-full absolute top-0 left-0 ${className}`}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={`Tour ${slide.id}`}
              fill
              className="object-cover"
              priority={slide.id === 1}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default function CarouselWrapper(props) {
  return <Carousel {...props} />;
}
