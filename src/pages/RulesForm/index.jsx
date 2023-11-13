import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";

const RulesForm = () => {
  const initialValue = {
    rules: "",
  };

  const validationSchema = object().shape({
    rules: string().required("This field is required."),
  });

  const handleRegisterForm = async (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="max-w-md mx-auto mb-2 shadow-lg flex flex-col items-center justify-center py-4 rounded-md w-full">
        <h1 className="text-center text-3xl font-bold mb-10">
          Rules and Regulations
        </h1>

        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={handleRegisterForm}
        >
          <Form className="w-[80%]">
            <div className="mb-4 relative w-full">
              <label htmlFor="rules">Rules and Policies</label>
              <Field
                as="textarea"
                rows="6"
                placeholder="Rules and Regulations goes here"
                type="text"
                name="rules"
                id="rules"
                className="w-full border-[#ccc] border-2 rounded-md p-2 mt-2"
              ></Field>
              <ErrorMessage
                component="div"
                name="rules"
                className="text-red-500 absolute text-sm bottom-[-20px]"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-3 py-2 text-xl text-white fw-fw-bolder w-full rounded-md text-cente my-3"
            >
              {"Submit"}
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
};

export default RulesForm;
