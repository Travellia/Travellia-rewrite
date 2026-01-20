import ContentLayoutWrapper from "@/components/common/ContentLayoutWrapper";

import { FaLocationArrow } from "react-icons/fa";

import React from "react";
import Image from "next/image";
import BookPackageCard from "@/components/common/BookPackageCard";

const index = () => {
  const PACKAGES_DATA = [
    {
      stars: 5,
      package: "3 STAR PACKAGE",
      title: "Cras dapibus. Vivamus elementum ",
      discountPrice: 499,
      oldPrice: 699,
      description:
        "venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
      image: "/holidayPackage/TravelItinearies/Image-1.png",
    },
    {
      stars: 5,
      package: "4 STAR PACKAGE",
      title: "Cras dapibus. Vivamus elementum ",
      discountPrice: 499,
      oldPrice: 699,
      description:
        "venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
      image: "/holidayPackage/TravelItinearies/Image-2.png",
    },
    {
      stars: 5,
      package: "5 STAR PACKAGE",
      title: "Cras dapibus. Vivamus elementum ",
      discountPrice: 499,
      oldPrice: 699,
      description:
        "venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.",
      image: "/holidayPackage/TravelItinearies/Image-3.png",
    },
  ];

  const Bulltes = [
    { id: 1, text: "Ullam accumsan lorem in dui. Cras ultricies mi." },
    {
      id: 2,
      text: "posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam arcu. Duis arcu tortor, suscipit ege",
    },
    {
      id: 3,
      text: "nonummy metus. Vestibulum volutpat pretium libero. Cras eros et nisl sagittis vestibulum. Nullam",
    },
    {
      id: 4,
      text: "volutpat pretium libero. Cras eros et nisl sagittis vestibulum.",
    },
    {
      id: 5,
      text: "nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede. Sed lectus. Donec mollis hendrerit risus.",
    },
  ];

  return (
    <section className="w-full">
      <ContentLayoutWrapper className="flex flex-col gap-20 items-center w-full py-10">
        {/* -------------------- TravelItineraries --------------------  */}
        <div className="flex flex-col gap-8">
          <h1 className="heading-with-space">TRAVEL ITINERARIES</h1>
          {/* <div className="flex flex-col gap-8 "> */}
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3 xl:grid-rows-1 place-items-center gap-8">
            {PACKAGES_DATA.map((data, index) => {
              // 3rd card (index 2)
              if (index === 2) {
                return (
                  <div
                    key={index}
                    className="md:col-span-2 xl:col-span-1 md:flex md:justify-center"
                  >
                    <BookPackageCard data={data} isOdd={index % 2 !== 0} />
                  </div>
                );
              }

              return (
                <BookPackageCard
                  data={data}
                  isOdd={index % 2 !== 0}
                  key={index}
                />
              );
            })}
          </div>

          {/* </div> */}
        </div>
        {/* -------------------- Travellia referral program -------------------- */}
        <div className="flex flex-col gap-5">
          {/* heading */}
          <h1 className="heading">
            Travellia Referral Program <br /> Share the Blessings, Earn the
            Rewards
          </h1>

          {/* Description */}
          <p className="para font-bold">
            Whether you're planning a romantic honeymoon or a family vacation,
            our price section has got you covered. So, start browsing today and
            find the perfect vacation package at a price that won't leave you
            feeling guilty.
          </p>

          {/* Discount */}
          <div className="flex flex-col items-center lg:flex-row  gap-10">
            {/* Image */}
            <div className="h-full w-full">
              <Image
                src={"/holidayPackage/TravelItinearies/discount-card.png"}
                alt="discount card"
                width={500}
                height={400}
                className="bg-secondary p-5 rounded-3xl h-full w-full "
              />
            </div>

            {/* Bulltes */}
            <div className="flex flex-col gap-2 justify-center">
              {Bulltes.map((item) => (
                <div key={item.id} className="flex items-start gap-3">
                  <FaLocationArrow className="text-primary shrink-0 h-full " />

                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentLayoutWrapper>
    </section>
  );
};

export default index;
