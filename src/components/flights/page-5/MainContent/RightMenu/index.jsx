import BiggestOffer from "@/components/common/BiggestOffer";
import BookThePackage from "@/components/common/BookThePackage";
import PopularPackage from "@/components/common/PopularPackage";
import SidebarForm from "@/components/common/SidebarForm";
import React from "react";

const RightMenu = () => {
  const sidebarData = [
    {
      id: "1",
      fromText: "From",
      pricePerPerson: "£ 502PP",
      details: "Return, Inc. Taxes \n1 Adult",
      totalPrice: "Total Price £ 502",
    },
    {
      id: "2",
      fromText: "From",
      pricePerPerson: "£ 502PP",
      details: "Return, Inc. Taxes \n1 Adult",
      totalPrice: "Total Price £ 502",
    },
  ];

  return (
    <section className="w-full flex flex-col items-center justify-center gap-20 lg:gap-10">
      <div className="w-full flex flex-col md:flex md:flex-row lg:flex-col gap-10">
        {sidebarData.map((form) => (
          <div key={form.id} className="w-full">
            <SidebarForm data={form} />
          </div>
        ))}
      </div>
      <PopularPackage />
      <BiggestOffer />
      <BookThePackage />
    </section>
  );
};

export default RightMenu;
