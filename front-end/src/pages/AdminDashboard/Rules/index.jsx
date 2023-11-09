import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { FaTrash, FaEdit, FaArrowLeft } from "react-icons/fa";
import { useState, useEffect } from "react";
import { getData } from "../../../services/axios.service";
import { useParams } from "react-router-dom";

const Rules = () => {
  const [showForm, setShowForm] = useState(false);
  const [hostels, setHostels] = useState([]);

  const initialValue = {
    rules: "",
  };

  const validationSchema = object().shape({
    rules: string().required("This field is required."),
  });

  const handleSubmitForm = async (values) => {
    console.log(values);
  };

  // Request Data from Backend
  const { id } = useParams();

  const getHostelDetail = async () => {
    const response = await getData(`hostels/${id}`);
    console.log(response);
    if (response.success) {
      setHostels(response);
      console.log(hostels);
    }
  };

  useEffect(() => {
    getHostelDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main className="max-w-[1080px] mx-auto">
      <div className="relative">
        <h1 className="text-center font-semibold text-2xl mb-2">
          Rules and Regulations
        </h1>

        <button
          className="bg-[#2563eb] text-white px-8 py-2 rounded-[5rem] m-2 hover:bg-[#1c3a7d]"
          onClick={() => {
            setShowForm(true);
          }}
        >
          Add New Rule
        </button>
        <div className="flex flex-col gap-4 max-w-[768px] mx-auto mt-2">
          <div className="grid grid-cols-2">
            <div className="text-center">Rules</div>
            <div className="text-center">Actions</div>
          </div>
          {hostels.map((hostel) => {
            return (
              <div key={hostel._id}>
                <hr className="mb-4" />
                <div className="grid grid-cols-2">
                  <div className="text-center">{hostel.name}</div>
                  <div className="flex items-center justify-center gap-4">
                    <FaTrash />
                    <FaEdit />
                  </div>
                </div>
              </div>
            );
          })}

          <hr />
        </div>
      </div>
      {showForm ? (
        <div className="fixed bg-white w-full z-10 h-[100vh] top-[21%] max-w-[1080px]">
          <div className="fex w-full items-center justify-center">
            <button
              onClick={() => {
                setShowForm(false);
              }}
              className="ml-8 flex gap-2 items-center justify-center"
            >
              <FaArrowLeft />
              Back
            </button>
            <>
              <div className="max-w-md mx-auto mb-2 shadow-lg flex flex-col items-center justify-center py-4 rounded-md w-full">
                <h1 className="text-center text-3xl font-bold mb-10">
                  Rules and Regulations
                </h1>

                <Formik
                  initialValues={initialValue}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmitForm}
                >
                  <Form className="w-[80%]">
                    <div className="mb-4 relative w-full">
                      <label htmlFor="rules">Rules</label>
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
          </div>
        </div>
      ) : (
        ""
      )}
    </main>
  );
};

export default Rules;
