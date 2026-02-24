// umrahSchema.js
import * as Yup from "yup";

const umrahSchema = Yup.object({
  firstName: Yup.string()
    .min(2, "First name must be at least 2 characters")
    .required("First name is required"),

  contact: Yup.string()
    .min(10, "Invalid contact number")
    .required("Contact is required"),

  email: Yup.string().email("Invalid email").required("Email is required"),
});

export default umrahSchema;
