import { cn } from "@/lib/utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";

export default function PhotoCollageCarousel({ slides, autoplay = true }) {
  return (
    <div className="w-full p-4">
      <Swiper
        modules={[EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView={"auto"}
        loop
        className="mx-auto max-w-7xl overflow-visible"
        coverflowEffect={{
          rotate: 0,
          stretch: 94, // slight overlap like the design
          depth: 220,
          modifier: 1,
          slideShadows: false,
        }}
        autoplay={
          autoplay
            ? {
                delay: 2800,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }
            : false
        }
      >
        {slides.map((s, i) => (
          <SwiperSlide
            key={i}
            className="!w-auto px-3 rounded-3xl overflow-hidden"
          >
            {({ isActive, isPrev, isNext }) => (
              <figure
                className={cn(
                  "transition-all duration-500 will-change-transform",
                  // sizing is handled via style to match the mock
                  isActive
                    ? "scale-100 z-30 shadow-xl"
                    : isPrev || isNext
                    ? "scale-[0.95] blur-[1px] z-20 shadow-xl"
                    : "scale-[0.9] blur-[3px] z-10 shadow-xl"
                )}
                style={{
                  width: "clamp(260px, 24vw, 360px)",
                  height: "clamp(340px, 32vw, 520px)",
                }}
              >
                <img
                  src={s.src || "/placeholder.svg"}
                  alt={s.alt}
                  className="h-full w-full object-cover rounded-3xl"
                />
              </figure>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
