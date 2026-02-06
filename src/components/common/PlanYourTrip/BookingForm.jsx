"use client";

import { Formik, Form } from "formik";
import bookingSchema from "@/schemas/common/bookingSchema";
import { Button } from "@/components/ui/button";
import FormField from "@/components/common/FormField";

const bookingFields = [
  {
    label: "Last Name",
    name: "lastName",
    placeholder: "Your Last name...",
    grid: "col-span-1",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "name@travellia.com",
    grid: "col-span-1",
  },
  {
    label: "Phone",
    name: "phone",
    placeholder: "+44 55 66 77 88",
    grid: "col-span-1",
  },
  {
    label: "Booking Instructions",
    name: "instructions",
    as: "textarea",
    grid: "col-span-2",
    className: "h-40",
  },
];

const BookingForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitted Data:", values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        instructions: "",
      }}
      validationSchema={bookingSchema}
      onSubmit={handleSubmit}
    >
      <Form className="w-full">
        <div className="grid grid-cols-2 gap-4 mb-4">
          {bookingFields.map((field) => (
            <FormField key={field.name} {...field} wrapperClass={field.grid} />
          ))}
        </div>

        <div className="flex justify-center py-6">
          <Button type="submit" className="btn-main">
            Submit Booking
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default BookingForm;
