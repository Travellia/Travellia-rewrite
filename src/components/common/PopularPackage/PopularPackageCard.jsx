import Image from "next/image";
import React from "react";

const PopularPackageCard = ({ data, index, total }) => {
  console.log(total);

  return (
    <>
      <section className="flex gap-5 items-center [w-50%]">
        {/* <div className="w-full lg:w-auto flex justify-center lg:justify-start">
          </div> */}
        <Image
          src={data.image}
          alt={data.place}
          width={100}
          height={100}
          className="
                  rounded-xl object-cover
                  w-auto       h-30
                  sm:w-auto sm:h-35
                  md:w-auto md:h-50
                  lg:w-auto lg:h-25
                  xl:w-auto xl:h-30
                      "
          loading="lazy"
        />
        <div className="flex flex-col w-[50%]">
          <div className="text-xl sm:text-2xl lg:text-sm">{data.days}</div>

          <div className="text-xl sm:text-3xl lg:text-lg text-primary font-bold tracking-wide">
            {data.place}
          </div>

          <div className="flex items-end gap-2">
            <div className="text-xl sm:text-3xl lg:text-lg text-primary font-bold tracking-wide ">
              {data.price}
            </div>
            <div className="text-sm sm:text-xl lg:text-sm">{data.person}</div>
          </div>
        </div>
      </section>

      {/* Divider (only if NOT last item) */}
      {index !== total - 1 && <div className="bg-gray-200 h-px w-full my-4" />}
    </>
  );
};

export default PopularPackageCard;
