"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import umrahSchema from "@/schemas/SearchTabs/Umrah/umrahSchema";
import FormStatus from "@/components/common/FormStatus";
import HoneypotField from "@/components/common/HoneypotField";
import useFormSubmit from "@/hooks/useFormSubmit";

const UmrahContactForm = () => {
  const { status, error, submit } = useFormSubmit("umrahEnquiry");

  const handleSubmit = async (values, { resetForm }) => {
    const sent = await submit(values, { hp: values._hp });
    if (sent) resetForm();
  };

  return (
    <Formik
      initialValues={{
        firstName: "",
        contact: "",
        email: "",
        _hp: "",
      }}
      validationSchema={umrahSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex flex-col gap-5 w-[80%] mx-auto relative">
          <div className="space-y-3">
            {/* First Name */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70">First Name</label>
              <Field name="firstName">
                {({ field }) => (
                  <Input
                    {...field}
                    placeholder="Your first name"
                    className="h-12 bg-white text-ink rounded-2xl border-0 shadow-none focus-visible:ring-2 focus-visible:ring-gold/60"
                  />
                )}
              </Field>
              <ErrorMessage
                name="firstName"
                component="p"
                className="text-red-300 text-sm"
              />
            </div>
            {/* Contact */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70">Phone</label>
              <Field name="contact">
                {({ field }) => (
                  <Input
                    {...field}
                    type="tel"
                    placeholder="Phone number"
                    className="h-12 bg-white text-ink rounded-2xl border-0 shadow-none focus-visible:ring-2 focus-visible:ring-gold/60"
                  />
                )}
              </Field>
              <ErrorMessage
                name="contact"
                component="p"
                className="text-red-300 text-sm"
              />
            </div>
            {/* Email */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold uppercase tracking-wide text-white/70">Your Email</label>
              <Field name="email">
                {({ field }) => (
                  <Input
                    {...field}
                    type="email"
                    placeholder="you@example.com"
                    className="h-12 bg-white text-ink rounded-2xl border-0 shadow-none focus-visible:ring-2 focus-visible:ring-gold/60"
                  />
                )}
              </Field>
              <ErrorMessage
                name="email"
                component="p"
                className="text-red-300 text-sm"
              />
            </div>
          </div>

          <HoneypotField />

          {/* Submit */}
          <Button
            type="submit"
            className="btn-main !bg-gold !text-ink hover:!brightness-105 w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending…" : "Submit"}
          </Button>
          <FormStatus status={status} error={error} />
        </Form>
      )}
    </Formik>
  );
};

export default UmrahContactForm;
