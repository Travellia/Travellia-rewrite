"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import bookingSchema from "@/schemas/holidayPackages/ContactUs";
import { Button } from "@/components/ui/button";

const BookingForm = ({ data }) => {
  console.log(data);

  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitted Data:", values);

    // API call later

    resetForm(); // Clear inputs
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
          <div>
            <label className="block text-sm font-bold pl-5 text-gray-500 mb-1">
              {data.firstNameLabel}
            </label>
            <Field
              name={data.firstNameName}
              placeholder={data.firstNamePlaceholder}
              className="w-full p-5 bg-white rounded-md"
            />
            <ErrorMessage
              name={data.firstNameName}
              component="p"
              className="text-red-500 text-sm pl-5 pt-2 "
            />
          </div>

          <div>
            <label className="block text-sm font-bold pl-5 text-gray-500 mb-1">
              {data.lastNameLabel}{" "}
            </label>
            <Field
              name={data.lastNameName}
              placeholder={data.lastNamePlaceholder}
              className="w-full p-5 bg-white rounded-md"
            />
            <ErrorMessage
              name={data.lastNameName}
              component="p"
              className="text-red-500 text-sm pl-5 pt-2"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-bold pl-5 text-gray-500 mb-1">
              {data.emailLabel}{" "}
            </label>
            <Field
              type={data.emailName}
              name={data.emailName}
              placeholder={data.emailPlaceholder}
              className="w-full p-5 bg-white rounded-md"
            />
            <ErrorMessage
              name={data.emailName}
              component="p"
              className="text-red-500 text-sm pl-5 pt-2"
            />
          </div>

          <div>
            <label className="block text-sm font-bold pl-5 text-gray-500 mb-1">
              {data.phoneLabel}{" "}
            </label>
            <Field
              name={data.phoneName}
              placeholder={data.phonePlaceholder}
              className="w-full p-5 bg-white rounded-md"
            />
            <ErrorMessage
              name={data.phoneName}
              component="p"
              className="text-red-500 text-sm pl-5 pt-2"
            />
          </div>
        </div>

        {/* Instructions */}
        <div className="mb-4">
          <label className="block text-sm font-bold pl-5 text-gray-500 mb-1">
            {data.messsgaeLabel}
          </label>
          <Field
            as="textarea"
            name={data.messsgaeName}
            placeholder={data.messsgaePlaceholder}
            className="w-full p-5 bg-white rounded-md h-40"
          />
          <ErrorMessage
            name={data.messsgaeName}
            component="p"
            className="text-red-500 text-sm pl-5 pt-2"
          />
        </div>

        <div className="flex justify-center py-6">
          <Button type="submit" className="btn-main">
            {data.button}
          </Button>
        </div>
      </Form>
    </Formik>
  );
};

export default BookingForm;
