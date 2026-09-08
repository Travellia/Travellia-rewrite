"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import bookThePackageSchema from "@/schemas/hotel/BookThePackageSchema";
import { Button } from "@/components/ui/button";
import FormStatus from "@/components/common/FormStatus";
import HoneypotField from "@/components/common/HoneypotField";
import useFormSubmit from "@/hooks/useFormSubmit";

const BookThePackageForm = () => {
  const { status, error, submit } = useFormSubmit("bookThePackage");

  const handleSubmit = async (values, { resetForm }) => {
    const sent = await submit(values, { hp: values._hp });
    if (sent) resetForm();
  };
  return (
    <Formik
      initialValues={{
        firstName: "",
        email: "",
        phone: "",
        adult: "",
        child: "",
        message: "",
        _hp: "",
      }}
      validationSchema={bookThePackageSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue, isSubmitting }) => (
        <Form className="w-full flex flex-col gap-5 relative">
          {/* First Name */}
          <div>
            <Field
              name="firstName"
              placeholder="Your First name"
              className="w-full p-5 bg-gray-100 rounded-2xl"
            />
            <ErrorMessage
              name="firstName"
              component="p"
              className="text-red-500 text-sm pl-5 pt-2"
            />
          </div>

          {/* Email */}
          <div>
            <Field
              name="email"
              placeholder="Your Email"
              className="w-full p-5 bg-gray-100 rounded-2xl"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-500 text-sm pl-5 pt-2"
            />
          </div>

          {/* Phone */}
          <div>
            <Field
              name="phone"
              placeholder="Phone"
              className="w-full p-5 bg-gray-100 rounded-2xl"
            />
            <ErrorMessage
              name="phone"
              component="p"
              className="text-red-500 text-sm pl-5 pt-2"
            />
          </div>

          {/* Adults & Children */}
          <div className="grid grid-cols-2 gap-4">
            {/* Adults */}
            <div>
              <Select
                value={values.adult}
                onValueChange={(value) => setFieldValue("adult", value)}
              >
                <SelectTrigger className="w-full p-5 bg-gray-100 rounded-2xl">
                  <SelectValue placeholder="Adults" />
                </SelectTrigger>
                <SelectContent position="popper" side="bottom" align="start">
                  {[...Array(10)].map((_, i) => (
                    <SelectItem key={i + 1} value={i.toString()}>
                      {i}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <ErrorMessage
                name="adult"
                component="p"
                className="text-red-500 text-sm pl-5 pt-2"
              />
            </div>

            {/* Children */}
            <div>
              <Select
                value={values.child}
                onValueChange={(value) => setFieldValue("child", value)}
              >
                <SelectTrigger className="w-full p-5 bg-gray-100 rounded-2xl">
                  <SelectValue placeholder="Children" />
                </SelectTrigger>
                <SelectContent position="popper" side="bottom" align="start">
                  {[...Array(10)].map((_, i) => (
                    <SelectItem key={i} value={i.toString()}>
                      {i}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <ErrorMessage
                name="child"
                component="p"
                className="text-red-500 text-sm pl-5 pt-2"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <Field
              as="textarea"
              name="message"
              placeholder="Message"
              className="w-full p-5 h-40 bg-gray-100 rounded-2xl resize-none"
            />
            <ErrorMessage
              name="message"
              component="p"
              className="text-red-500 text-sm pl-5 pt-2"
            />
          </div>

          <HoneypotField />

          <div className="flex flex-col items-center gap-4">
            <Button type="submit" className="btn-main" disabled={isSubmitting}>
              {isSubmitting ? "Sending…" : "Book Now"}
            </Button>
            <FormStatus status={status} error={error} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BookThePackageForm;
