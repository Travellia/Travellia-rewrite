import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import React from "react";
import LeftMenu from "./LeftMenu";
import Image from "next/image";
import RightMenu from "@/components/common/RightMenu";

const index = () => {
  return (
    <section className="relative">
      <Image
        src="/flights/page-5/MainContent/bg.png"
        alt="Plan Image"
        width={2000}
        height={2000}
        className="hidden lg:block absolute w-[55%] h-auto bottom-1  "
      />
      <ContentLayoutWrapper className="relative flex flex-col gap-10 lg:grid lg:grid-cols-12 lg:gap-6">
        {/* Main Content */}

        <div className="lg:col-span-8 ">
          <LeftMenu />
        </div>
        {/* SideBar */}
        <div className="lg:col-span-4">
          <RightMenu />
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
