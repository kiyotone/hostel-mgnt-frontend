import * as yup from "yup";


export const basicSchema = yup.object().shape({

        name: yup.string().required("Please enter a name"),
        email: yup.string().email("Please enter a valid email").required(),
        password: yup.string().min(5),
        mobile: yup.string().required("Please enter a mobile"),

});