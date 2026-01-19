"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";

import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import bookThePackageSchema from "@/schemas/hotel/BookThePackageSchema";
import { Button } from "@/components/ui/button";

const BookThePackageForm = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitted Data:", values);

    // API call later

    resetForm(); // Clear inputs
  };
  return (
    <Formik
      initialValues={{
        firstName: "",
        email: "",
        phone: "",
        adult: "",
        child: "",
        date: "",
        message: "",
      }}
      validationSchema={bookThePackageSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form className="w-full flex flex-col gap-5">
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

          {/* Date Picker */}

          <Popover>
            <PopoverTrigger asChild>
              <button
                className={`w-full p-5 text-left bg-gray-100 rounded-2xl text-gray-500 ${
                  values.date ? "text-black" : ""
                }`}
              >
                {values.date
                  ? format(new Date(values.date), "dd-MM-yyyy")
                  : "DD-MM-YY"}
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-gray-100 rounded-2xl">
              <Calendar
                mode="single"
                selected={values.date ? new Date(values.date) : undefined}
                onSelect={(date) => {
                  if (date) setFieldValue("date", date.toISOString());
                }}
                disabled={(date) => date < today}
                initialFocus
              />
            </PopoverContent>
          </Popover>
          <ErrorMessage
            name="date"
            component="p"
            className="text-red-500 text-sm pt-2"
          />

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

          <div className="flex justify-center">
            <Button type="submit" className="btn-main">
              Book Now
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BookThePackageForm;
