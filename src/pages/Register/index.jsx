import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import "../../../src/form.css";

const SignUp = () => {
  const initialValue = {
    name: "",
    hostelName: "",
    city: "",
    phone: "",
    email: "",
    password: "",
  };

  const validationSchema = object().shape({
    name: string().required("Name is required"),
    hostelName: string().required("Hostel Name is required"),
    city: string().required("City is required"),
    phone: string().required("Phone is required"),
    email: string().required("Email is required"),
    password: string()
      .min(6, "Password must be atleast 6 digits")
      .required("Password is required"),
  });

  const handleRegisterForm = async (values) => {
    console.log(values);
  };

  return (
    <>
      <div className="max-w-md mx-auto mb-2 shadow-lg flex flex-col items-center justify-center py-4 rounded-md w-full">
        <h1 className="text-center text-4xl font-bold mb-10">Register User</h1>

        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={handleRegisterForm}
        >
          <Form className="w-[80%]">
            <div className="mb-4 relative w-full">
              <Field
                placeholder=""
                type="text"
                name="name"
                className="w-full"
              ></Field>
              <label htmlFor="name">Name</label>
              <ErrorMessage
                component="div"
                name="name"
                className="text-red-500 absolute text-xs bottom-[-5px]"
              />
            </div>
            <div className="mb-4 relative">
              <Field placeholder="" type="text" name="hostelName"></Field>
              <label htmlFor="hostelName">Hostel Name</label>
              <ErrorMessage
                component="div"
                name="hostelName"
                className="text-red-500 absolute text-xs bottom-[-5px]"
              />
            </div>
            <div className="mb-4 relative">
              <Field
                placeholder=""
                type="text"
                name="city"
                className="input"
              ></Field>
              <label htmlFor="city">City</label>
              <ErrorMessage
                component="div"
                name="city"
                className="text-red-500 absolute text-xs bottom-[-5px]"
              />
            </div>
            <div className="mb-4 relative">
              <Field placeholder="" type="text" id="phone" name="phone"></Field>
              <label htmlFor="phone">Phone</label>
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500 absolute text-xs bottom-[-5px]"
              />
            </div>
            <div className="mb-4 relative">
              <Field
                placeholder=""
                type="email"
                id="email"
                name="email"
              ></Field>
              <label htmlFor="email">Email</label>
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 absolute text-xs bottom-[-5px]"
              />
            </div>
            <div className="mb-4 relative">
              <Field
                placeholder=""
                type="password"
                id="password"
                name="password"
              ></Field>
              <label htmlFor="password">Password</label>
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 absolute text-xs bottom-[-5px]"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-3 py-2 text-xl text-white fw-fw-bolder w-full rounded-md text-cente my-3"
            >
              {"Register "}
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default SignUp;
