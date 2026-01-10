import Image from "next/image";
import React from "react";

const ProfileCard = () => {
  return (
    <section className="bg-secondary rounded-2xl px-10 py-12 lg:py-20 xl:py-25 -translate-y-10 xl:w-[80%] mx-auto sm:-translate-x-20 sm:translate-y-20 flex flex-col gap-5">
      <p className="font-semibold text-gray-500">
        “Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
        commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque.”
      </p>
      <div className="bg-gray-200 h-px w-full my-4" />
      <div className="flex gap-10">
        <Image
          src={"/hotel/TouristFeedback/CardPic.png"}
          alt="CardImage "
          width={50}
          height={50}
          loading="lazy"
        />
        <div className="flex flex-col">
          <p className="text-primary font-semibold">Shannon J. Williams</p>
          <p className="text-xs font-bold  ">New York, USA</p>
        </div>
      </div>
    </section>
  );
};

export default ProfileCard;
