import { list } from "lucide-react";
import Image from "next/image";
import React from "react";

const ContactFooterCard = ({ data }) => {
  return (
    <section className="mx-auto md:mx-0 grid md:grid-cols-2 md:gap-10 xl:grid-cols-3 gap-4">
      {data.map((list, index) => (
        <div className="flex gap-5 items-center">
          <div>
            <Image
              src="/common/phone-white-logo.png"
              alt="whatsapp_logo"
              height={40}
              width={40}
              className="object-cover rounded-full "
            />
          </div>
          <div key={index} className="flex flex-col ">
            <h1 className="text-sm font-bold">{list[0]}</h1>
            <h1 className="text-xl tracking-wider font-bold text-primary">
              {list[1]}
            </h1>
            <p className="text-gray-600 text-base ">{list[2]}</p>
            <p className="text-gray-600 text-base ">{list[3]}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ContactFooterCard;
