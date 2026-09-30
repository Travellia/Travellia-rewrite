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
import ArrowButton from "@/components/ui/ArrowButton";
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
        <Form className="w-full flex flex-col gap-4 relative">
          {/* First Name */}
          <div>
            <Field
              name="firstName"
              aria-label="Your First name"
              placeholder="Your First name"
              className="w-full px-4 py-3.5 bg-sand/60 border border-line rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
            />
            <ErrorMessage
              name="firstName"
              component="p"
              className="text-red-600 text-sm pl-1 pt-1"
            />
          </div>

          {/* Email */}
          <div>
            <Field
              name="email"
              type="email"
              autoComplete="email"
              aria-label="Your Email"
              placeholder="Your Email"
              className="w-full px-4 py-3.5 bg-sand/60 border border-line rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
            />
            <ErrorMessage
              name="email"
              component="p"
              className="text-red-600 text-sm pl-1 pt-1"
            />
          </div>

          {/* Phone */}
          <div>
            <Field
              name="phone"
              type="tel"
              autoComplete="tel"
              aria-label="Phone"
              placeholder="Phone"
              className="w-full px-4 py-3.5 bg-sand/60 border border-line rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-gold/40"
            />
            <ErrorMessage
              name="phone"
              component="p"
              className="text-red-600 text-sm pl-1 pt-1"
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
                <SelectTrigger className="w-full px-4 py-3.5 bg-sand/60 border border-line rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-gold/40" aria-label="Adults">
                  <SelectValue placeholder="Adults" />
                </SelectTrigger>
                <SelectContent position="popper" side="bottom" align="start">
                  {[...Array(10)].map((_, i) => (
                    <SelectItem key={i + 1} value={(i + 1).toString()}>
                      {i + 1}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <ErrorMessage
                name="adult"
                component="p"
                className="text-red-600 text-sm pl-1 pt-1"
              />
            </div>

            {/* Children */}
            <div>
              <Select
                value={values.child}
                onValueChange={(value) => setFieldValue("child", value)}
              >
                <SelectTrigger className="w-full px-4 py-3.5 bg-sand/60 border border-line rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-gold/40" aria-label="Children">
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
                className="text-red-600 text-sm pl-1 pt-1"
              />
            </div>
          </div>

          {/* Message */}
          <div>
            <Field
              as="textarea"
              name="message"
              aria-label="Message"
              placeholder="Message"
              className="w-full px-4 py-3.5 h-28 bg-sand/60 border border-line rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-gold/40 resize-none"
            />
            <ErrorMessage
              name="message"
              component="p"
              className="text-red-600 text-sm pl-1 pt-1"
            />
          </div>

          <HoneypotField />

          <div className="flex flex-col items-start gap-4">
            <ArrowButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending…" : "Book now"}
            </ArrowButton>
            <FormStatus status={status} error={error} />
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BookThePackageForm;
