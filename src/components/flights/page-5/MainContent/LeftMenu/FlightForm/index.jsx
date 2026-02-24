"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import FlightFormSchema from "@/schemas/flight/FlightFormSchema";
import { Button } from "@/components/ui/button";

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
import { Search } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

const FlightForm = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const handleSubmit = (values, { resetForm }) => {
    console.log("Submitted Data:", values);
    resetForm();
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        phone: "",
        email: "",
        depart: "",
        return: "",
        adult: "",
        child: "",
        infant: "",
        instruction: "",
        subscribe: false,
        confirmSubmit: false,
      }}
      validationSchema={FlightFormSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => {
        return (
          <Form className="h-auto grid grid-cols-2  gap-3">
            {/* First Name */}
            <div className="col-start-1 col-end-2 row-start-1 row-end-2">
              <label className="block text-sm font-bold pl-5 text-gray-500 mb-1">
                First Name
              </label>
              <Field
                name="firstName"
                placeholder="Your First Name"
                className="w-full p-5 bg-gray-100 rounded-2xl"
              />
              <ErrorMessage
                name="firstName"
                component="p"
                className="text-red-500 text-sm pl-5 pt-2"
              />
            </div>

            {/* Phone */}
            <div className="col-start-2 col-end-3 row-start-1 row-end-2">
              <label className="block text-sm font-bold pl-5 text-gray-500 mb-1">
                Phone
              </label>
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

            {/* Email */}
            <div className="col-start-1 col-end-2 row-start-2 row-end-3">
              <label className="block text-sm font-bold pl-5 text-gray-500 mb-1">
                Email
              </label>
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

            {/* Depart Date */}
            <div className="col-start-2 col-end-3 row-start-2 row-end-3">
              <label className="block text-sm font-bold pl-5 text-gray-500 mb-1">
                Departure
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-auto w-full justify-start text-left font-normal bg-gray-100 rounded-xl p-5 border-0 focus:ring-1 focus:ring-gray-100  text-base"
                  >
                    {values.depart ? (
                      format(new Date(values.depart), "dd/MM/yyyy")
                    ) : (
                      <span className="text-muted-foreground">Depart date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  side="bottom"
                  align="center"
                  className="w-auto p-0"
                >
                  <Calendar
                    mode="single"
                    selected={values.depart ? new Date(values.depart) : null}
                    onSelect={(selected) => {
                      setFieldValue(
                        "depart",
                        selected ? format(selected, "yyyy-MM-dd") : "",
                      );
                    }}
                    disabled={(date) => date < today}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <ErrorMessage
                name="depart"
                component="p"
                className="text-red-500 text-sm pl-5 pt-2"
              />
            </div>

            {/* Return Date */}
            <div
              className="col-start-1 col-end-2 row-start-3 row-end-4
            "
            >
              <label className="block text-sm font-bold pl-5 text-gray-500 mb-1">
                Return
              </label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="h-auto w-full justify-start text-left font-normal bg-gray-100 rounded-xl p-5 border-0 focus:ring-1 focus:ring-gray-100  text-base"
                  >
                    {values.return ? (
                      format(new Date(values.return), "dd/MM/yyyy")
                    ) : (
                      <span className="text-muted-foreground">Return Data</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent
                  side="bottom"
                  align="center"
                  className="w-auto p-0"
                >
                  <Calendar
                    mode="single"
                    selected={values.return ? new Date(values.return) : null}
                    onSelect={(selected) => {
                      setFieldValue(
                        "return",
                        selected ? format(selected, "yyyy-MM-dd") : "",
                      );
                    }}
                    disabled={(date) => date < today}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <ErrorMessage
                name="return"
                component="p"
                className="text-red-500 text-sm pl-5 pt-2"
              />
            </div>

            {/* Adults */}
            <div className="col-start-2 col-end-3 row-start-3 row-end-4">
              <label className="block text-sm font-bold pl-5 text-gray-500 mb-1">
                Adult(s)
              </label>
              <Select
                value={values.adult}
                onValueChange={(value) => setFieldValue("adult", value)}
              >
                <SelectTrigger className=" bg-gray-100 rounded-xl pl-5 py-8 border-0 focus:ring-1 focus:ring-gray-100 w-full text-base">
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
                className="text-red-500 text-sm pl-5 pt-2"
              />
            </div>

            {/* Children */}
            <div>
              <label className="block text-sm font-bold pl-5 text-gray-500 mb-1">
                Child(ren)
              </label>
              <Select
                value={values.child}
                onValueChange={(value) => setFieldValue("child", value)}
              >
                <SelectTrigger className="bg-gray-100 rounded-xl pl-5 py-8 border-0 focus:ring-1 focus:ring-gray-100 w-full text-base">
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

            {/* Infant */}
            <div>
              <label className="block text-sm font-bold pl-5 text-gray-500 mb-1">
                Infant(s)
              </label>
              <Select
                value={values.infant}
                onValueChange={(value) => setFieldValue("infant", value)}
              >
                <SelectTrigger className="bg-gray-100 rounded-xl pl-5 py-8 border-0 focus:ring-1 focus:ring-gray-100 w-full text-base">
                  <SelectValue placeholder="Infant" />
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
                name="infant"
                component="p"
                className="text-red-500 text-sm pl-5 pt-2"
              />
            </div>

            {/* Message / Instruction */}
            <div className="col-start-1 col-end-3 row-start-5 row-end-6">
              <label className="block text-sm font-bold pl-5 text-gray-500 mb-1">
                Spectial Instructions
              </label>
              <Field
                as="textarea"
                name="instruction"
                placeholder="type here......"
                className="w-full p-5 h-40 bg-gray-100 rounded-2xl resize-none"
              />
              <ErrorMessage
                name="instruction"
                component="p"
                className="text-red-500 text-sm pl-5 pt-2"
              />
            </div>

            {/* CheckBox */}
            <div className="flex flex-col gap-5 p-1 col-start-1 col-end-3 row-start-6 row-end-7">
              <div className="flex items-center gap-5">
                <Checkbox
                  checked={values.subscribe}
                  onCheckedChange={(val) => setFieldValue("subscribe", val)}
                />
                <p>
                  Click to subscribe to our newsletter and get promotion deals.
                </p>
              </div>
              <ErrorMessage
                name="subscribe"
                component="p"
                className="text-red-500 text-sm pl-10"
              />

              <div className="flex items-center gap-5">
                <Checkbox
                  checked={values.confirmSubmit}
                  onCheckedChange={(val) => setFieldValue("confirmSubmit", val)}
                />
                <p>Click on Checkbox to submit the form</p>
              </div>
              <ErrorMessage
                name="confirmSubmit"
                component="p"
                className="text-red-500 text-sm pl-10"
              />
            </div>

            <div className="flex justify-center items-center gap-4  col-start-1 col-end-3 row-start-8 row-end-9">
              <Button
                type="submit"
                className={`btn-main ${
                  !(values.subscribe && values.confirmSubmit)
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
              >
                <Search />
                Search{" "}
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FlightForm;
