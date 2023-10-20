import * as yup from "yup";


export const basicSchema = yup.object().shape({

        name: yup.string().required("Please provide name"),
        email: yup.string().email("Please provide valid email").required(),
        password: yup.string().min(5),
        phone: yup.string().required("Please enter a mobile"),
        role : yup.mixed().oneOf(['user','admin','owner'])

});