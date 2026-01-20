import React from "react";
import BookThePackageForm from "./BookThePackageForm";

const BookThePackage = () => {
  return (
    <section className="flex flex-col gap-5">
      <h1 className="text-2xl lg:text-2xl xl:text-3xl font-bold  text-black">
        {" "}
        BOOK YOUR PACKAGE
      </h1>
      <BookThePackageForm />
    </section>
  );
};

export default BookThePackage;
