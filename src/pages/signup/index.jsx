import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { addData } from "../../services/axios.service";
import { errorToast, successToast } from "../../services/toastify.service";
import { Link, useNavigate } from "react-router-dom";
import styles from "./signup.module.css";
const SignUp = () => {
  const navigate = useNavigate();

  const initialValue = {
    name: "",
    phone: "",
    email: "",
    password: "",
  };

  const validationSchema = object().shape({
    name: string().required("Name field is required"),
    phone: string().required("Phone field is required"),
    email: string().required("email field is required"),
    password: string()
      .min(6, "password must be of 6 digit")
      .required("Password field is required"),
  });

  const handleSignupForm = async (values) => {
    console.log(values);
    const response = await addData("users", values);
    console.log(response);
    if (response.success) {
      successToast(
        response.message ? response.message : "User registered successfully"
      );
      navigate("/signin");
    } else {
      errorToast(
        response.message ? response.message : "Unable to register the user"
      );
    }
  };

  return (
    <>
      <div className="max-w-md mx-auto mb-2 bg-white shadow-lg  flex flex-col items-center justify-center py-2">
        <h1 className="text-center text-4xl font-bold mb-10">Register User</h1>

        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={handleSignupForm}
        >
          {({ isSubmitting }) => {
            return (
              <Form>
                <div className="mb-4 relative">
                  <Field
                    placeholder=""
                    type="text"
                    id="name"
                    name="name"
                    className={`w-full ${styles.input}`}
                  ></Field>
                  <label className={`${styles.label}`} htmlFor="name">
                    Name
                  </label>
                  <ErrorMessage
                    component="div"
                    name="name"
                    className="text-red-500 absolute text-xs bottom-[-5px]"
                  />
                </div>
                <div className="mb-4 relative">
                  <Field
                    placeholder=""
                    type="email"
                    id="email"
                    name="email"
                    className={`w-full ${styles.input}`}
                  ></Field>
                  <label className={`${styles.label}`} htmlFor="email">
                    Email
                  </label>
                  <ErrorMessage
                    component="div"
                    name="email"
                    className="text-red-500 absolute text-xs bottom-[-5px]"
                  />
                </div>
                <div className="mb-4 relative">
                  <Field
                    placeholder=""
                    type="password"
                    id="password"
                    name="password"
                    className={`w-full ${styles.input}`}
                  ></Field>
                  <label className={`${styles.label}`} htmlFor="password">
                    Password
                  </label>
                  <ErrorMessage
                    component="div"
                    name="password"
                    className="text-red-500 absolute text-xs bottom-[-5px]"
                  />
                </div>

                <div className="mb-4 relative">
                  <Field
                    placeholder=""
                    type="text"
                    id="phone"
                    name="phone"
                    className={`w-full ${styles.input}`}
                  ></Field>
                  <label className={`${styles.label}`} htmlFor="phone">
                    Phone
                  </label>
                  <ErrorMessage
                    component="div"
                    name="phone"
                    className="text-red-500 absolute text-xs bottom-[-5px]"
                  />
                </div>

                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 p-3 text-xl text-white fw-fw-bolder w-full rounded-md text-cente my-3 "
                >
                  {isSubmitting ? "Creating..." : "Register "}
                </button>
              </Form>
            );
          }}
        </Formik>

        <div>
          <Link to="/signin" className="text-xl mt-2">
            Already have an account? Signin
          </Link>
        </div>
      </div>
    </>
  );
};

export default SignUp;
