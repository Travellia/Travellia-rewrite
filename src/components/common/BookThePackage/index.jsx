import React from "react";
import BookThePackageForm from "./BookThePackageForm";

const BookThePackage = () => {
  return (
    <section className="flex flex-col gap-5 w-full">
      <h2 className="font-display text-xl font-bold uppercase tracking-tight text-ink">
        Book your package
      </h2>
      <BookThePackageForm />
    </section>
  );
};

export default BookThePackage;
