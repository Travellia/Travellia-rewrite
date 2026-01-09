import Image from "next/image";
import React from "react";

const PopularPackageCard = ({ data, index, total }) => {
  console.log(total);

  return (
    <>
      <section className="flex gap-5 items-center">
        <Image src={data.image} alt={data.place} height={150} width={150} />

        <div className="flex flex-col">
          <div className="text-sm">{data.days}</div>

          <div className="text-primary  font-bold tracking-wide">
            {data.place}
          </div>

          <div className="flex items-end gap-2">
            <div className="text-primary font-bold tracking-wide text-xl">
              {data.price}
            </div>
            <div>{data.person}</div>
          </div>
        </div>
      </section>

      {/* Divider (only if NOT last item) */}
      {index !== total - 1 && <div className="bg-gray-200 h-px w-full my-4" />}
    </>
  );
};

export default PopularPackageCard;
