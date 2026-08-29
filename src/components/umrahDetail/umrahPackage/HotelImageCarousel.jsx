"use client";

import React, { useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight, MdClose } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const HotelImageCarousel = ({ images, alt }) => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const slides = images.map((image) =>
    typeof image === "string" ? { src: image, fit: "cover" } : image
  );

  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="relative w-full aspect-[4/6] rounded-3xl overflow-hidden shadow-lg">
        <Swiper
          loop={slides.length > 1}
          onSwiper={setSwiper}
          onSlideChange={(instance) => setActiveIndex(instance.realIndex)}
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.src}>
              <div
                className="relative w-full h-full bg-neutral-900 cursor-zoom-in"
                onClick={() => setIsPreviewOpen(true)}
              >
                {slide.fit === "contain" && (
                  <Image
                    src={slide.src}
                    alt=""
                    aria-hidden
                    fill
                    sizes="(min-width: 1280px) 48rem, (min-width: 1024px) 56rem, 40rem"
                    className="object-cover scale-110 blur-xl opacity-60"
                  />
                )}
                <Image
                  src={slide.src}
                  alt={`${alt} ${index + 1}`}
                  fill
                  sizes="(min-width: 1280px) 48rem, (min-width: 1024px) 56rem, 40rem"
                  quality={90}
                  priority={index === 0}
                  loading={index === 0 ? undefined : "eager"}
                  className={slide.fit === "contain" ? "object-contain" : "object-cover"}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {slides.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => swiper?.slidePrev()}
              className="absolute top-1/2 left-2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground shadow-md transition-colors hover:bg-primary/90 cursor-pointer"
            >
              <MdChevronLeft className="text-2xl" />
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => swiper?.slideNext()}
              className="absolute top-1/2 right-2 -translate-y-1/2 z-10 flex items-center justify-center w-9 h-9 rounded-full bg-primary text-primary-foreground shadow-md transition-colors hover:bg-primary/90 cursor-pointer"
            >
              <MdChevronRight className="text-2xl" />
            </button>
          </>
        )}
      </div>

      {slides.length > 1 && (
        <div className="flex justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide.src}
              type="button"
              aria-label={`Go to image ${index + 1}`}
              onClick={() => swiper?.slideToLoop(index)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                index === activeIndex
                  ? "w-6 bg-primary"
                  : "w-2.5 bg-primary/30"
              }`}
            />
          ))}
        </div>
      )}

      {isPreviewOpen &&
        typeof document !== "undefined" &&
        createPortal(
          <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 p-10 animate-in fade-in duration-200 cursor-zoom-out"
            onClick={() => setIsPreviewOpen(false)}
          >
            <button
              type="button"
              aria-label="Close preview"
              onClick={() => setIsPreviewOpen(false)}
              className="absolute top-5 right-5 flex items-center justify-center w-10 h-10 rounded-full bg-black/40 text-white hover:bg-black/60 cursor-pointer"
            >
              <MdClose className="text-2xl" />
            </button>
            <div className="relative w-[90vw] h-[85vh] max-w-4xl animate-in zoom-in-95 duration-200">
              <Image
                src={slides[activeIndex].src}
                alt={`${alt} ${activeIndex + 1}`}
                fill
                sizes="90vw"
                quality={90}
                className="object-contain"
              />
            </div>
          </div>,
          document.body
        )}
    </div>
  );
};

export default HotelImageCarousel;
