import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <section className="w-full">
      <ContentLayoutWrapper className="flex flex-col gap-10">
        <div className="flex items-center gap-5">
          <div className="grid grid-cols-8 grid-rows-7 gap-6 h-[600px] w-full md:w-1/2 ">
            {/* LEFT LARGE IMAGE */}
            <div className="relative col-start-1 col-end-9 row-start-1 row-end-8  rounded-3xl p-5  bg-background">
              <Image
                src="/about/AboutTravellia/Image4.png"
                alt="Left Image"
                height={200}
                width={200}
                className="w-full h-full object-cover rounded-3xl"
                loading="lazy"
              />
            </div>

            {/* RIGHT TOP IMAGE */}
            <div className="relative col-start-3 col-end-9 row-start-1 row-end-4  p-5 rounded-3xl   bg-background">
              <Image
                src="/about/AboutTravellia/Image2.png"
                alt="Right Image"
                height={200}
                width={200}
                className="w-full h-full object-cover rounded-3xl"
                loading="lazy"
              />
            </div>
          </div>
          <div className="flex flex-col md:gap-5 lg:gap-10 md:w-1/2">
            <h1 className="text-4xl font-bold text-primary">
              ABOUT <br />
              TRAVELLIA
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. <br />
              <br />
              Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac,
              enim. Aliquam lorem ante, dapibus in, viverra quis.
            </p>
            <Button className="btn-main">Explore Now</Button>
          </div>
        </div>
        {/* below */}
        <div className="flex gap-5 items-center p-5">
          <div className="text-4xl font-medium tracking-wider w-full lg:w-1/2 ">
            <h1 className=" text-black">EASY TO</h1>
            <h1 className="text-primary">BOOK A TRIP</h1>
          </div>
          <div className="flex flex-col gap-10 w-full lg:w-1/2 ">
            <p>
              Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
              fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed
              consequat, leo eget bibendum sodales, augue velit cursus nunc,
              quis gravida magna mi a libero. Fusce vulputate eleifend sapien.
              Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id,
              metus. Nullam accumsan lorem in dui.
            </p>
            <Button className="btn-main">Book Now</Button>
          </div>
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
