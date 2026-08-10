import * as Yup from "yup";

const hotelSchema = Yup.object({
  routes: Yup.array()
    .of(
      Yup.object({
        from: Yup.string().required("Where To is required"),
        to: Yup.string(),

        depart: Yup.string().required("Check-in date is required"),

        return: Yup.string().required("Check-out date is required"),

        room: Yup.number().min(1, "At least 1 room required").required(),

        adult: Yup.number().min(0).required(),

        child: Yup.number().min(0),
        infant: Yup.number().min(0),

        name: Yup.string()
          .min(2, "Name must be at least 2 characters")
          .required("Name is required"),

        email: Yup.string()
          .email("Invalid email")
          .required("Email is required"),

        contact: Yup.string()
          .min(10, "Invalid contact number")
          .required("Contact number is required"),
      })
    )
    .min(1)
    .required(),
});

export default hotelSchema;
