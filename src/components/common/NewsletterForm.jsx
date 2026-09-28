"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button } from "@/components/ui/button";
import FormStatus from "@/components/common/FormStatus";
import HoneypotField from "@/components/common/HoneypotField";
import newsletterSchema from "@/schemas/common/newsletterSchema";
import useFormSubmit from "@/hooks/useFormSubmit";

const NewsletterForm = () => {
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
          <div className="flex w-full items-center gap-2 rounded-full border border-line bg-sand p-1.5 focus-within:ring-2 focus-within:ring-gold/50">
            <Field
              name="email"
              type="email"
              placeholder="Enter your email"
              aria-label="Email address"
              className="h-11 min-w-0 flex-1 bg-transparent px-5 text-ink outline-none placeholder:text-ink/45"
            />
            <Button
              type="submit"
              variant="ink"
              size="pill"
              disabled={isSubmitting}
              className="shrink-0"
            >
              {isSubmitting ? "Sending…" : "Subscribe"}
            </Button>
          </div>

          <HoneypotField />

          <ErrorMessage
            name="email"
            component="p"
            className="text-red-600 text-sm pl-5"
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
