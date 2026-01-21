import BookNow from "@/components/common/BookNow";
import React from "react";

const imageData = {
  image: "/hotel/BookNow/bg.png",
  alt: "resturant",
};

const index = () => {
  return (
    <div>
      <BookNow data={imageData} />
    </div>
  );
};

export default index;
