import React from "react";
import BiggestOffer from "@/components/common/BiggestOffer";
import BookThePackage from "@/components/common/BookThePackage";
import PopularPackage from "@/components/common/PopularPackage";

const SideMenu = () => {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-1">
      <div className="rounded-card border border-line bg-white p-6 shadow-soft">
        <BookThePackage />
      </div>
      <div className="rounded-card border border-line bg-white p-6 shadow-soft">
        <PopularPackage />
      </div>
      <BiggestOffer />
    </section>
  );
};

export default SideMenu;
