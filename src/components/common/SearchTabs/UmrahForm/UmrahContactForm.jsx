"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import umrahSchema from "@/schemas/SearchTabs/Umrah/umrahSchema";

const UmrahContactForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        contact: "",
        email: "",
      }}
      validationSchema={umrahSchema}
      onSubmit={(values, { resetForm }) => {
        console.log("Form Data:", values);
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-5 w-[80%] mx-auto">
          <div className="space-y-3">
            {/* First Name */}
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-500">First Name</label>
              <Field name="firstName">
                {({ field }) => (
                  <Input
                    {...field}
                    placeholder="Your First Name......"
                    className="h-12 bg-white rounded-xl border-0 focus:ring-1 focus:ring-primary"
                  />
                )}
              </Field>
              <ErrorMessage
                name="firstName"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>
            {/* Contact */}
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-500">Your Contact</label>
              <Field name="contact">
                {({ field }) => (
                  <Input
                    {...field}
                    type="tel"
                    placeholder="Your Contact Details......"
                    className="h-12 bg-white rounded-xl border-0 focus:ring-1 focus:ring-primary"
                  />
                )}
              </Field>
              <ErrorMessage
                name="contact"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="font-medium text-gray-500">Your Email</label>
              <Field name="email">
                {({ field }) => (
                  <Input
                    {...field}
                    type="email"
                    placeholder="Your Email......"
                    className="h-12 bg-white rounded-xl border-0 focus:ring-1 focus:ring-primary"
                  />
                )}
              </Field>
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-500 text-sm"
              />
            </div>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="btn-main self-center px-10"
            disabled={isSubmitting}
          >
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default UmrahContactForm;
