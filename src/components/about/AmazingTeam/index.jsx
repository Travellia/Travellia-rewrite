"use client";
import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import PhotoCollageCarousel from "@/components/common/photo-collage-carousel";
import React from "react";

const photos = [
  { id: 1, src: "/about/AmazingTeam/pic1.png", alt: "Photo 1" },
  { id: 2, src: "/about/AmazingTeam/pic2.png", alt: "Photo 2" },
  { id: 3, src: "/about/AmazingTeam/pic3.png", alt: "Photo 3" },
  { id: 4, src: "/about/AmazingTeam/pic4.png", alt: "Photo 4" },
  { id: 5, src: "/about/AmazingTeam/pic5.png", alt: "Photo 5" },
  { id: 6, src: "/about/AmazingTeam/pic1.png", alt: "Photo 1" },
  { id: 7, src: "/about/AmazingTeam/pic2.png", alt: "Photo 2" },
  { id: 8, src: "/about/AmazingTeam/pic3.png", alt: "Photo 3" },
  { id: 9, src: "/about/AmazingTeam/pic4.png", alt: "Photo 4" },
  { id: 10, src: "/about/AmazingTeam/pic5.png", alt: "Photo 5" },
];

const index = () => {
  return (
    <section className="h-auto md:py-10 lg:py-15 bg-background">
      <ContentLayoutWrapper className={"flex flex-col"}>
        <div className="text-center mb-8">
          <h2 className="text-lg font-normal text-center uppercase">TEAM</h2>
          <h2 className="text-xl md:text-3xl lg:text-4xl lg:pb-5 xl:text-5xl  font-bold text-center uppercase text-primary md:px-20 lg:px-5">
            OUR AMAZING TEAM
          </h2>
          <p className="mt-3 text-gray-600 lg:px-10 xl:px-20 tracking-widest">
            Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iaculis,
            ipsum. Sed aliquam ultrices mauris. Integer ante arcu, accumsan a,
            consectetuer eget, posuere ut, mauris. Praesent adipiscing
          </p>
        </div>
        <PhotoCollageCarousel slides={photos} />
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
