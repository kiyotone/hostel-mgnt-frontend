import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import "./food.module.css";

const FoodScheduleForm = () => {
  const initialValue = {
    title: "",
    time: "",
  };

  const validationSchema = object().shape({
    title: string().required("Title is required"),
    time: string().required("Time is required"),
  });

  const handleRegisterForm = async (values) => {
    console.log(values);
  };
  return (
    <>
      <div className="max-w-md mx-auto mb-2 shadow-lg flex flex-col items-center justify-center py-4 rounded-md w-full">
        <h1 className="text-center text-4xl font-bold mb-10">Food Schedule</h1>

        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={handleRegisterForm}
        >
          <Form className="w-[80%]">
            <div className="mb-6 relative w-full">
              <Field
                placeholder=""
                type="text"
                name="title"
                className="w-full"
              ></Field>
              <label htmlFor="title">Title</label>
              <ErrorMessage
                component="div"
                name="title"
                className="text-red-500 absolute text-xs bottom-[-5px]"
              />
            </div>
            <div className="mb-6 relative">
              <Field placeholder="" type="text" name="time"></Field>
              <label htmlFor="time">Time</label>
              <ErrorMessage
                component="div"
                name="time"
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

export default FoodScheduleForm;
