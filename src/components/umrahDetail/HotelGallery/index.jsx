import { da } from "date-fns/locale";
import Image from "next/image";
import React from "react";

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
      alt: "Hotel room with city viewame: ",
      classname: "col-span-1 row-span-1",
    },
  ];
  return (
    <section className="grid grid-cols-3 grid-rows-2 gap-2 md:gap-6 h-80 md:h-125 lg:h-150 xl:h-225 md:p-10  w-[90%] mx-auto">
      {HOTEL_GALLERY.map((data) => (
        <div key={data.id} className={`relative ${data.className}`}>
          <Image
            src={data.image}
            alt={data.alt}
            fill
            className="object-cover rounded-2xl"
            loading="lazy"
          />
        </div>
      ))}
    </section>
  );
};

export default index;
