import * as yup from "yup";

export const basicSchema = yup.object().shape({
  phone: yup.string().required("Please enter a mobile"),
  password: yup.string().min(5),
});
