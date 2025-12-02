import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <section className="h-[70vh] grid grid-cols-20">
      <div className="col-start-1 col-end-12 row-start-1 bg-primary rounded-br-[100px] rounded-tr-[100px] z-50 flex items-center">
        <div className="flex items-center justify-end h-full w-full mr-20">
          <div className="flex flex-col gap-2">
            <h1 className="text-7xl font-bold capitalize text-gray-200 pb-3">
              Book now,
              <br />
              pay later
            </h1>
            <p className="text-2xl font-bold text-gray-200 max-w-[600px]">
              Book Flights Now, Pay Later. Lock-in today's price
              <br />& pay in up to 26 weekly payments.
            </p>
            <p className="text-2xl font-bold text-gray-200">
              No interest, no credit checks & no hidden fees.
            </p>
            <p className="text-2xl font-bold text-gray-200">
              Book your next trip
            </p>
            <button className="bg-gray-100 text-primary px-24 py-4 rounded-3xl text-xl font-semibold w-fit mt-7 hover:bg-gray-50 transition-colors">
              Book Now
            </button>
          </div>
        </div>
      </div>
      <div className="col-start-10 col-end-21 row-start-1 relative">
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
