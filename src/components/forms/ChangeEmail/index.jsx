import { ErrorMessage, Field, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { object, string } from "yup";
import { logedOut } from "../../../pages/signin/auth.slice";
import { updateDataWithHeader } from "../../../services/axios.service";
import { errorToast, successToast } from "../../../services/toastify.service";

const ChangeEmail = () => {
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const initialValue = {
    newEmail: "",
  };
  const validationSchema = object().shape({
    newEmail: string().required("new Email field is required"),
  });
  const handleChangeemailSubmit = async (values) => {
    const response = await updateDataWithHeader("reset-email", values, token);
    console.log(response);
    if (response.success) {
      dispatch(logedOut());
      successToast(
        response.message ? response.message : "Email has successfully changed"
      );
    } else {
      errorToast("Unable to change the email");
    }
  };
  return (
    <div className="max-w-md mx-auto mb-2 mt-10 p-5">
      <Formik
        initialValues={initialValue}
        validationSchema={validationSchema}
        onSubmit={handleChangeemailSubmit}
      >
        {({ isSubmitting }) => {
          return (
            <Form>
              <div className="mb-4">
                <label htmlFor="newEmail">New Email:</label>
                <Field
                  type="text"
                  name="newEmail"
                  className="mb-4 p-2 w-full border"
                ></Field>
                <ErrorMessage
                  component="div"
                  name="newEmail"
                  className="text-red-500"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white rounded-md p-2"
              >
                {isSubmitting ? "creating.." : "submit"}
              </button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ChangeEmail;
