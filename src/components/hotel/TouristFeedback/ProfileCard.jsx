import Image from "next/image";
import React from "react";

const ProfileCard = () => {
  return (
    <section className="bg-secondary rounded-2xl px-10 py-25 -translate-x-20 translate-y-20 ">
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
