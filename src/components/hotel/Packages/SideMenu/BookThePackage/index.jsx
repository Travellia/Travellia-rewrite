import React from "react";
import BookThePackageForm from "./BookThePackageForm";

const BookThePackage = () => {
  return (
    <section className="flex flex-col gap-5">
      <h1 className="heading-black"> BOOK THIS PACKAGE</h1>
      <BookThePackageForm />
    </section>
  );
};

export default BookThePackage;
