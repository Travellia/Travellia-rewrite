import React from "react";

const AddressCard = ({ data }) => {
  return (
    <section className="mx-auto md:mx-0 grid md:grid-cols-2 md:gap-10 xl:grid-cols-4 gap-4">
      {data.map((office, index) => (
        <div key={index} className="flex flex-col gap-1">
          <h1 className="text-lg font-bold">{office[0]}</h1>
          <h1 className="text-xl  font-bold text-primary">{office[1]}</h1>
          <p className="text-gray-600 text-base ">{office[2]}</p>
          <p className="text-gray-600 text-base ">{office[3]}</p>
        </div>
      ))}
    </section>
  );
};

export default AddressCard;
