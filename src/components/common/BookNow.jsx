import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const BookNow = ({ data }) => {
  return (
    <section className="flex flex-col-reverse lg:grid lg:grid-cols-20 lg:min-h-[50vh] lg:max-h-[60vh] xl:min-h-[80vh]  xl:gap-10">
      <div className="col-start-1 col-end-12 row-start-1 bg-primary rounded-t-[50px] lg:rounded-t-none lg:rounded-br-[100px] lg:rounded-tr-[100px]  z-50 flex items-center -mt-10 lg:mt-0 py-12 lg:py-10 xl:py-0 relative">
        <div className="flex items-center justify-center  h-full w-full lg:mr-10 px-6 md:px-12 lg:px-0 ">
          <div className="flex flex-col gap-4 xl:gap-10 text-center lg:text-left items-center lg:items-start">
            <h1 className="text-3xl lg:text-5xl xl:text-7xl font-bold capitalize text-gray-200 pb-3">
              Book now,
              <br />
              pay later
            </h1>
            <p className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-200 max-w-[600px]">
              Book Flights Now, Pay Later. Lock-in today's price
              <br className="hidden md:block" />& pay in up to 26 weekly
              payments.
            </p>
            <p className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-200">
              No interest, no credit checks & no hidden fees.
            </p>
            <p className="text-lg lg:text-xl xl:text-2xl font-bold text-gray-200">
              Book your next trip
            </p>
            <Button className="btn-main-reverse">Book Now</Button>
          </div>
        </div>
      </div>
      <div className="h-[40vh] sm:h-[50vh] lg:h-full w-full col-start-10 col-end-21 row-start-1 relative">
        <Image src={data.image} alt={data.alt} fill className="object-cover" />
      </div>
    </section>
  );
};

export default BookNow;
