import Image from "next/image";
import React from "react";
import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import SectionHeading from "@/components/ui/SectionHeading";

const index = () => {
  const HOTEL_GALLERY = [
    {
      id: 1,
      image: "/umrahDetail/HotelGallery/grid1.png",
      alt: "Hotel room with city view",
      className: "col-span-1 row-span-1",
    },
    {
      id: 2,
      image: "/umrahDetail/HotelGallery/grid2.png",
      alt: "Hotel room with city view",
      className: "col-span-1 row-span-2",
    },
    {
      id: 3,
      image: "/umrahDetail/HotelGallery/grid3.png",
      alt: "Hotel room with city view",
      className: "col-span-1 row-span-1",
    },
    {
      id: 4,
      image: "/umrahDetail/HotelGallery/grid4.png",
      alt: "Hotel room with city view",
      className: "col-span-1 row-span-1",
    },
    {
      id: 5,
      image: "/umrahDetail/HotelGallery/grid5.png",
      alt: "Hotel room with city view",
      className: "col-span-1 row-span-1",
    },
  ];
  return (
    <section>
      <ContentLayoutWrapper className="flex flex-col gap-10">
        <SectionHeading
          eyebrow="Gallery"
          title={
            <>
              A look <em>inside.</em>
            </>
          }
        />
        <div className="grid h-80 grid-cols-3 grid-rows-2 gap-2 md:h-[520px] md:gap-4 lg:h-[620px]">
          {HOTEL_GALLERY.map((data) => (
            <div key={data.id} className={`relative overflow-hidden rounded-card ${data.className}`}>
              <Image
                src={data.image}
                alt={data.alt}
                fill
                sizes="(max-width: 768px) 33vw, 30vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
