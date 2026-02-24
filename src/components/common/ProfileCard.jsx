import Image from "next/image";
import React from "react";

const ProfileCard = ({ data }) => {
  return (
    <section className="bg-secondary rounded-2xl px-10 py-12 lg:py-20 xl:py-25 w-full mx-auto  flex flex-col gap-5">
      <p className="font-semibold text-gray-500">{data.comment}</p>
      <div className="bg-gray-200 h-px w-full my-4" />
      <div className="flex gap-10">
        <Image
          src={data.src}
          alt={data.name}
          width={50}
          height={50}
          loading="lazy"
        />
        <div className="flex flex-col">
          <p className="text-primary font-semibold">{data.name}</p>
          <p className="text-xs font-bold  ">{data.location}</p>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
