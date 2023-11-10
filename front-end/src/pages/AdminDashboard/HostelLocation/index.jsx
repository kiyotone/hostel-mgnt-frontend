import { FaArrowLeft } from "react-icons/fa";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { successToast } from "../../../services/toastify.service";
import { useState } from "react";
import "./location.module.css";

const HostelLocation = () => {
  const [showForm, setShowForm] = useState(false);

  // Formik Validation
  const initialValue = {
    description: "",
    longitude: "",
    latitude: "",
    city: "",
    localLocation: "",
  };

  const validationSchema = object().shape({
    description: string().required("Description is required"),
    longitude: string().required("Longitude is required"),
    latitude: string().required("Latitude is required"),
    city: string().required("City is required"),
    localLocation: string().required("Local Location is required"),
  });

  // On Submit
  const handleSubmitForm = async (values) => {
    console.log(values);
    setShowForm(false);
    successToast("Routine Added Successfully!");
  };

  // handle Delete
  // const handleDelete = () => {
  //   successToast("Routine Deleted Successfully!");
  // };

  return (
    <div className="h-[80vh] flex flex-col gap-[10rem] max-w-[768px]">
      <div>
        <h1 className="text-center text-2xl font-semibold">Hostel Location</h1>
        <p className="mx-[3rem]">Enter your hostel&apos;s details here:</p>
      </div>
      <button
        className="text-white mx-auto px-8 py-2 bg-[#2563eb] rounded-[5rem] hover:bg-[#2a55b3]"
        onClick={() => {
          setShowForm(true);
        }}
      >
        Click Here to Add
      </button>
      {showForm && (
        <div className="fixed bg-black/[0.85] z-10 h-[100vh] top-0 left-0 w-[100vw]">
          <div className="flex items-center flex-col gap-4 justify-center h-full max-w-[768px] mx-auto">
            <button
              onClick={() => {
                setShowForm(false);
              }}
              className="text-white mr-auto px-4 flex gap-2 items-center justify-center"
            >
              <FaArrowLeft />
              Back
            </button>

            <div className="max-w-md mx-auto bg-white mb-2 shadow-lg flex flex-col items-center justify-center py-4 rounded-md w-[100vw]">
              <h1 className="text-center text-2xl font-bold">Hostel Details</h1>

              <Formik
                initialValues={initialValue}
                validationSchema={validationSchema}
                onSubmit={handleSubmitForm}
              >
                <Form className="w-[80%]">
                  <div className="mb-6 relative w-full">
                    <Field
                      as="textarea"
                      rows="3"
                      placeholder="Enter a short description of your hostel"
                      type="text"
                      name="description"
                      id="description"
                      className="w-full border-[#ccc] border-2 rounded-md p-2 mt-2"
                    ></Field>
                    <ErrorMessage
                      component="div"
                      name="description"
                      className="text-red-500 absolute text-xs bottom-[-15px]"
                    />
                  </div>
                  <div className="mb-6 relative w-full">
                    <Field
                      placeholder=""
                      type="text"
                      name="longitude"
                      className="w-full"
                    ></Field>
                    <label htmlFor="longitude">Longitude</label>
                    <ErrorMessage
                      component="div"
                      name="longitude"
                      className="text-red-500 absolute text-xs bottom-[-5px]"
                    />
                  </div>
                  <div className="mb-6 relative">
                    <Field
                      placeholder=""
                      type="text"
                      name="latitude"
                      className="w-full"
                    ></Field>
                    <label htmlFor="latitude">Latitude</label>
                    <ErrorMessage
                      component="div"
                      name="latitude"
                      className="text-red-500 absolute text-xs bottom-[-5px]"
                    />
                  </div>
                  <div className="mb-6 relative">
                    <Field
                      placeholder=""
                      type="text"
                      name="city"
                      className="w-full"
                    ></Field>
                    <label htmlFor="city">City</label>
                    <ErrorMessage
                      component="div"
                      name="city"
                      className="text-red-500 absolute text-xs bottom-[-5px]"
                    />
                  </div>
                  <div className="mb-6 relative">
                    <Field
                      placeholder=""
                      type="text"
                      name="localLocation"
                      className="w-full"
                    ></Field>
                    <label htmlFor="localLocation">Local Location</label>
                    <ErrorMessage
                      component="div"
                      name="localLocation"
                      className="text-red-500 absolute text-xs bottom-[-5px]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 px-3 py-2 text-lg text-white fw-fw-bolder w-full rounded-md text-cente"
                  >
                    {"Add Details"}
                  </button>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HostelLocation;
