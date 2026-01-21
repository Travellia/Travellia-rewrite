"use client";

import { Formik, Form, input, ErrorMessage } from "formik";
import bookingSchema from "@/schemas/common/bookingSchema";
import { Button } from "@/components/ui/button";

const BookingForm = () => {
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
              First Name
            </label>
            <input
              name="firstName"
              placeholder="Your First name..."
              className="w-full p-5 bg-white rounded-md"
            />
            <ErrorMessage
              name="firstName"
              component="p"
              className="text-red-500 text-sm pl-5 pt-2 "
            />
          </div>

          <div>
            <label className="block text-sm font-bold pl-5 text-gray-500 mb-1">
              Last Name
            </label>
            <input
              name="lastName"
              placeholder="Your Last name..."
              className="w-full p-5 bg-white rounded-md"
            />
            <ErrorMessage
              name="lastName"
              component="p"
              className="text-red-500 text-sm pl-5 pt-2"
            />
          </div>
        </div>

        {/* Email & Phone */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-bold pl-5 text-gray-500 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="name@travellia.com"
              className="w-full p-5 bg-white rounded-md"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm pl-5 pt-2"
            />
          </div>

          <div>
            <label className="block text-sm font-bold pl-5 text-gray-500 mb-1">
              Phone
            </label>
            <input
              name="phone"
              placeholder="+44 55 66 77 88"
              className="w-full p-5 bg-white rounded-md"
            />
            <ErrorMessage
              name="phone"
              component="p"
              className="text-red-500 text-sm pl-5 pt-2"
            />
          </div>
        </div>

        {/* Instructions */}
        <div className="mb-4">
          <label className="block text-sm font-bold pl-5 text-gray-500 mb-1">
            Booking Instructions
          </label>
          <textarea
            as="textarea"
            name="instructions"
            className="w-full p-5 bg-white rounded-md h-40"
          />
          <ErrorMessage
            name="instructions"
            component="p"
            className="text-red-500 text-sm pl-5 pt-2"
          />
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
