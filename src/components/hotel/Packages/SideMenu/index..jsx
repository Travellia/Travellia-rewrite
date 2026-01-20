import React from "react";
import BookThePackage from "./BookThePackage";
import PopularPackage from "./PopularPackage";
import BiggestOffer from "./BiggestOffer";

const SideMenu = () => {
  return (
    <section className="flex flex-col gap-10">
      <BookThePackage />
      <div className="w-full h-auto flex flex-col gap-15 sm:gap-10 md:gap-15 xl:gap-15 md:items-center ">
        <PopularPackage />
        <BiggestOffer />
      </div>
    </section>
  );
};

export default SideMenu;
