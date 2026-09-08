"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@/components/ui/button";
import FormStatus from "@/components/common/FormStatus";
import HoneypotField from "@/components/common/HoneypotField";
import newsletterSchema from "@/schemas/common/newsletterSchema";
import useFormSubmit from "@/hooks/useFormSubmit";

const NewsletterForm = ({ inputBg = "bg-secondary" }) => {
  const { status, error, submit } = useFormSubmit("newsletter");

  const handleSubmit = async (values, { resetForm }) => {
    const sent = await submit(values, { hp: values._hp });
    if (sent) resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", _hp: "" }}
      validationSchema={newsletterSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-full flex flex-col gap-3 relative">
          <div
            className={`rounded-full h-20 w-full flex items-center ${inputBg}`}
          >
            <Field
              name="email"
              type="email"
              placeholder="Email"
              aria-label="Email address"
              className="h-full w-7/10 px-8 bg-transparent outline-none placeholder:text-lg placeholder:text-gray-600"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="rounded-full h-full w-3/10 text-xl sm:text-2xl"
            >
              {isSubmitting ? "Sending…" : "Submit"}
            </Button>
          </div>

          <HoneypotField />

          <ErrorMessage
            name="email"
            component="p"
            className="text-red-500 text-sm pl-8"
          />

          <FormStatus
            status={status}
            error={error}
            successMessage="Thanks — you're on the list."
          />
        </Form>
      )}
    </Formik>
  );
};

export default NewsletterForm;
