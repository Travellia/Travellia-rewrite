import BookNow from "@/components/common/BookNow";
import React from "react";

const imageData = {
  image: "/holidayPackage/BookNow/bgImage.png",
  alt: "resturant",
};

const index = () => {
  return (
    <section>
      <BookNow data={imageData} />
    </section>
  );
};

export default index;
