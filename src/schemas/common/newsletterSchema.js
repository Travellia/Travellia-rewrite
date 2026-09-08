import * as Yup from "yup";

const newsletterSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
});

export default newsletterSchema;
