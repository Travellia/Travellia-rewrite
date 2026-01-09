import * as Yup from "yup";

const bookingSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\+?\d{7,15}$/, "Invalid phone number"),
  instructions: Yup.string().required("Booking instructions required"),
});

export default bookingSchema;
