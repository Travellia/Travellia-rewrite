"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const ARROW_CLASS =
  "grid size-11 place-items-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-md transition hover:bg-white hover:text-ink disabled:opacity-40";

const Carousel = ({
  effect = "fade",
  effectOptions = { crossFade: true },
  speed = 1200,
  delay = 5000,
  navigation = true,
  slides,
  className,
}) => {
  const hasMany = slides.length > 1;

  return (
    <>
      <Swiper
        modules={[Navigation, EffectFade, Autoplay]}
        effect={effect}
        fadeEffect={effectOptions}
        speed={speed}
        autoplay={hasMany ? { delay, disableOnInteraction: false } : false}
        navigation={
          navigation && hasMany
            ? { prevEl: ".hero-prev", nextEl: ".hero-next" }
            : false
        }
        loop={hasMany}
        className={`w-full h-full absolute top-0 left-0 ${className}`}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt=""
                fill
                sizes="100vw"
                priority={slide.id === 1}
                className="object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {navigation && hasMany && (
        <div className="absolute left-5 top-5 z-20 hidden gap-2 md:flex md:left-8 md:top-8">
          <button
            type="button"
            className={`hero-prev ${ARROW_CLASS}`}
            aria-label="Previous slide"
          >
            <ArrowLeft className="size-4" />
          </button>
          <button
            type="button"
            className={`hero-next ${ARROW_CLASS}`}
            aria-label="Next slide"
          >
            <ArrowRight className="size-4" />
          </button>
        </div>
      )}
    </>
  );
};

export default function CarouselWrapper(props) {
  return <Carousel {...props} />;
}
