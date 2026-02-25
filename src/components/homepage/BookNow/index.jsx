import BookNow from "@/components/common/BookNow";
import React from "react";

const imageData = {
  image: "/home/book-now/girl-on-island.png",
  alt: "girl-on-island.png",
};

const index = () => {
  return (
    <section>
      <BookNow data={imageData} />
    </section>
  );
};

export default index;
