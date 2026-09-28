"use client";

import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import PhotoCollageCarousel from "../../common/photo-collage-carousel";
import TravelDestinations from "./TravelDestinations";

const photos = [
  { id: 1, src: "/home/adventure/1.jpg", alt: "Photo 1" },
  { id: 2, src: "/home/adventure/2.jpg", alt: "Photo 2" },
  { id: 3, src: "/home/adventure/3.jpg", alt: "Photo 3" },
  { id: 4, src: "/home/adventure/4.jpg", alt: "Photo 4" },
  { id: 5, src: "/home/adventure/5.jpg", alt: "Photo 5" },
  { id: 6, src: "/home/adventure/1.jpg", alt: "Photo 1" },
  { id: 7, src: "/home/adventure/2.jpg", alt: "Photo 2" },
];

const Adventures = () => {
  return (
    <section className="min-h-screen py-20 bg-background">
      <ContentLayoutWrapper className={"flex flex-col"}>
        <div className="text-center mb-8">
          <h2 className="text-lg font-normal text-center uppercase">
            Family Adventures
          </h2>
          <h2 className="text-xl md:text-3xl lg:text-4xl lg:pb-5 xl:text-5xl  font-bold text-center uppercase text-primary md:px-20 lg:px-5">
            Exciting family-friendly destinations
          </h2>
          <p className="mt-3 text-gray-600 lg:px-10 xl:px-20 tracking-widest">
            Embark on thrilling family adventures at our handpicked
            destinations. From theme parks and wildlife safaris to interactive
            museums and outdoor activities. Create unforgettable memories with
            your loved ones in exciting and safe environment.{" "}
          </p>
        </div>
        <PhotoCollageCarousel slides={photos} />
      </ContentLayoutWrapper>
      <TravelDestinations />
    </section>
  );
};

export default Adventures;
