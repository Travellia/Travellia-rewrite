import * as Yup from "yup";

const returnSchema = Yup.object({
  routes: Yup.array()
    .min(1)
    .of(
      Yup.object({
        from: Yup.string().required("Departure city is required"),
        to: Yup.string().required("Arrival city is required"),
        depart: Yup.string().required("Departure date is required"),
        return: Yup.string().required("Return date is required"),
        adult: Yup.number()
          .min(1, "At least 1 adult")
          .required("Adults are required"),

        child: Yup.number().min(0).required("Children are required"),
        infant: Yup.number().min(0).required("Infants are required"),
      }),
    )
    .required(),

  category: Yup.string()
    .oneOf(["ECONOMY", "PREMIUM", "BUSINESS CLASS"])
    .required("Cabin class is required"),

  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),

  email: Yup.string().email("Invalid email").required("Email is required"),

  contact: Yup.string()
    .min(10, "Invalid contact number")
    .required("Contact number is required"),
});

export default returnSchema;
