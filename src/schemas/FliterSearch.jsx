import * as Yup from "yup";

const filterSearchSchema = Yup.object({
  from: Yup.string().required("Required"),
  to: Yup.string().required("Required"),
  travellers: Yup.string().required("Required"),
  departDate: Yup.date().required("Required"),
  returnDate: Yup.date().nullable(),
});
z;
