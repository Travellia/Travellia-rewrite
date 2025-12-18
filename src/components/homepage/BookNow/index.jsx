import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <section className="flex flex-col-reverse lg:grid lg:grid-cols-20 lg:h-[70vh]">
      <div className="col-start-1 col-end-12 row-start-1 bg-primary rounded-t-[50px] lg:rounded-t-none lg:rounded-br-[100px] lg:rounded-tr-[100px] z-50 flex items-center -mt-10 lg:mt-0 py-12 lg:py-0 relative">
        <div className="flex items-center justify-center lg:justify-end h-full w-full lg:mr-20 px-6 md:px-12 lg:px-0">
          <div className="flex flex-col gap-4 text-center lg:text-left items-center lg:items-start">
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold capitalize text-gray-200 pb-3">
              Book now,
              <br />
              pay later
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-200 max-w-[600px]">
              Book Flights Now, Pay Later. Lock-in today's price
              <br className="hidden md:block" />& pay in up to 26 weekly payments.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-200">
              No interest, no credit checks & no hidden fees.
            </p>
            <p className="text-lg md:text-xl lg:text-2xl font-bold text-gray-200">
              Book your next trip
            </p>
            <button className="bg-gray-100 text-primary px-12 md:px-24 py-4 rounded-3xl text-xl font-semibold w-fit mt-7 hover:bg-gray-50 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="h-[50vh] lg:h-full w-full col-start-10 col-end-21 row-start-1 relative">
        <Image
          src="/home/book-now/girl-on-island.png"
          alt="girl on island"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
};

export default index;
