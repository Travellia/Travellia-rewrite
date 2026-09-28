import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
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
              Travellia Limited is a UK travel agency based in Pudsey, Leeds,
              dedicated to making every journey easy and stress-free. We
              specialise in airline tickets, Umrah and Hajj packages, holiday
              packages and family bookings, with fares from trusted airlines and
              hotels handpicked for comfort and location. <br />
              <br />
              We understand the needs of every kind of traveller, from families
              and groups to pilgrims and first-time flyers, and we offer
              services such as unaccompanied minor bookings to keep your loved
              ones safe.
            </p>
            <Button asChild className="btn-main">
              <Link href="/holidayPackages">Explore Now</Link>
            </Button>
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
              Tell us where and when you want to travel, and our team will find
              the best flights, hotels and packages for your budget. You get
              clear prices with no hidden fees, flexible payment options and
              friendly support before, during and after your trip.
            </p>
            <Button asChild className="btn-main">
              <Link href="#plan-your-trip">Book Now</Link>
            </Button>
          </div>
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
