import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";

const FaqForm = () => {
  const initialValue = {
    question: "",
    answer: "",
  };

  const validationSchema = object().shape({
    question: string().required("Question is required"),
    answer: string().required("Answer is required"),
  });

  const handleRegisterForm = async (values) => {
    console.log(values);
  };
  return (
    <main className="m-4 relative h-full">
      <div className="max-w-md mx-auto my-2 shadow-lg flex flex-col items-center justify-center py-4 rounded-md w-full">
        <h1 className="text-center text-2xl font-semibold mb-5">Add Faq</h1>
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
                name="question"
                className="w-full"
              ></Field>
              <label htmlFor="question">Question</label>
              <ErrorMessage
                component="div"
                name="question"
                className="text-red-500 absolute text-xs bottom-[-5px]"
              />
            </div>

            <div className="mb-4 relative w-full">
              <Field
                as="textarea"
                rows="5"
                placeholder="Answer goes here"
                type="text"
                name="answer"
                id="answer"
                className="w-full border-[#ccc] border-2 rounded-md p-3 mt-2"
              ></Field>
              <ErrorMessage
                component="div"
                name="answer"
                className="text-red-500 absolute text-xs bottom-[-20px]"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 px-3 py-2 text-lg text-white fw-fw-bolder w-full rounded-md text-cente my-4"
            >
              {"Publish a FAQ"}
            </button>
          </Form>
        </Formik>
      </div>
    </main>
  );
};

export default FaqForm;
