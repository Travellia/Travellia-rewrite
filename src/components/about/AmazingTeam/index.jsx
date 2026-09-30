"use client";
import SectionHeading from "@/components/ui/SectionHeading";
import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import PhotoCollageCarousel from "@/components/common/photo-collage-carousel";
import React from "react";

const photos = [
  { id: 1, src: "/about/AmazingTeam/pic1.webp", alt: "Photo 1" },
  { id: 2, src: "/about/AmazingTeam/pic2.webp", alt: "Photo 2" },
  { id: 3, src: "/about/AmazingTeam/pic3.webp", alt: "Photo 3" },
  { id: 4, src: "/about/AmazingTeam/pic4.webp", alt: "Photo 4" },
  { id: 5, src: "/about/AmazingTeam/pic5.webp", alt: "Photo 5" },
  { id: 6, src: "/about/AmazingTeam/pic1.webp", alt: "Photo 1" },
  { id: 7, src: "/about/AmazingTeam/pic2.webp", alt: "Photo 2" },
  { id: 8, src: "/about/AmazingTeam/pic3.webp", alt: "Photo 3" },
  { id: 9, src: "/about/AmazingTeam/pic4.webp", alt: "Photo 4" },
  { id: 10, src: "/about/AmazingTeam/pic5.webp", alt: "Photo 5" },
];

const index = () => {
  return (
    <section>
      <ContentLayoutWrapper className={"flex flex-col"}>
        <SectionHeading
          align="center"
          eyebrow="Team"
          title={
            <>
              Our amazing <em>team.</em>
            </>
          }
          intro="Our friendly, experienced travel consultants are here to plan every detail of your trip, from the first quote to your safe return home."
          className="mb-10"
        />
        <PhotoCollageCarousel slides={photos} />
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
