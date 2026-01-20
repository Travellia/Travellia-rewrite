import * as Yup from "yup";

const bookThePackageSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too short!")
    .max(50, "Too long!")
    .required("First name is required"),

  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),

  phone: Yup.string()
    .matches(
      /^\+?\d{10,15}$/,
      "Phone number must be 10–15 digits and may start with +"
    )
    .required("Phone is required"),

  //   ticketType: Yup.string()
  //     .oneOf(["adult", "child"], "Invalid ticket type")
  //     .required("Ticket type is required"),

  adult: Yup.number()
    .typeError("Select number of adults")
    .required("Select number of adults")
    .min(1, "At least 1 adult required"),

  child: Yup.number()
    .typeError("Select number of children")
    .min(0, "Invalid number")
    .required("Select number of children"),

  date: Yup.date().required("Date is required").nullable(),

  message: Yup.string().max(500, "Message too long"),
});

export default bookThePackageSchema;
