import Image from "next/image";
import React from "react";

const BookingDetails = ({ data }) => {
  const isFirstTwo = data.id === 1 || data.id === 2;

  return (
    <div className="flex items-center relative border py-2 border-gray-300  rounded-xl">
      <div className="p-3">
        <Image
          src={"/holidayPackage/ContactUs/map-icon.png"}
          alt="map"
          width={20}
          height={20}
        />
      </div>
      <div className="flex flex-col ">
        <h1 className={`${isFirstTwo ? "text-[15px] " : "text-sm font-bold"}`}>
          {data.title}
        </h1>
        <h1 className={`${isFirstTwo ? "text-sm font-bold" : "text-[15px] "}`}>
          {data.name}
        </h1>
      </div>
    </div>
  );
};

export default BookingDetails;
