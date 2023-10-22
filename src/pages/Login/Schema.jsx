import * as yup from "yup";

export const basicSchema = yup.object().shape({
  email: yup.string().email("Please provide valid email").required(),
  password: yup.string().min(5),
});
