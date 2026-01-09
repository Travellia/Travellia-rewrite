import React from "react";
import BookThePackage from "./BookThePackage";
import PopularPackage from "./PopularPackage";
import BiggestOffer from "./BiggestOffer";

const SideMenu = () => {
  return (
    <section className="flex flex-col gap-10">
      <BookThePackage />
      <PopularPackage />
      <BiggestOffer />
    </section>
  );
};

export default SideMenu;
