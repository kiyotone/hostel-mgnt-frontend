import { FaTrash, FaEdit, FaArrowLeft } from "react-icons/fa";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { useState, useEffect } from "react";
import { getData } from "../../../services/axios.service";
// import { useParams } from "react-router-dom";
import "./food.module.css";
const FoodRoutine = () => {
  // State Management
  const [foodName, setFoodName] = useState("");
  const [foodTime, setFoodTime] = useState("");
  const [showForm, setShowForm] = useState(false);
  const [hostels, setHostels] = useState([]);

  // Request Data from Backend
  // const { id } = useParams();

  // get single hostel details
  const getSingleHostelDetail = async () => {
    const response = await getData(`hostels/65350ac7d1df3a00f85edea2`);
    console.log(response.hostel);
    if (response.success) {
      setHostels(response.hostel);
    }
  };

  useEffect(() => {
    getSingleHostelDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Formik Validation
  const initialValue = {
    name: "",
    time: "",
  };

  const validationSchema = object().shape({
    name: string().required("Food Name is required"),
    time: string().required("Time is required"),
  });

  // On Submit
  const handleSubmitForm = async (values) => {
    console.log(values);
  };

  return (
    <main className="max-w-[1080px] mx-auto">
      <div className="relative">
        <h1 className="text-center font-semibold text-2xl mb-2">
          Food Routine
        </h1>

        <button
          className="bg-[#2563eb] text-white px-8 py-2 rounded-[5rem] m-2 hover:bg-[#1c3a7d]"
          onClick={() => {
            setShowForm(true);
          }}
        >
          Add New Item
        </button>
        <div className="flex flex-col gap-4 max-w-[768px] mx-auto mt-2">
          <div className="grid grid-cols-3">
            <div className="text-center">Food Name</div>
            <div className="text-center">Time</div>
            <div className="text-center">Actions</div>
          </div>
          {hostels.timeSchedule.map((schedule) => {
            return (
              <div key={schedule.id}>
                <hr className="mb-4" />
                <div className="grid grid-cols-3">
                  <div className="text-center">{schedule.title}</div>
                  <div className="text-center">{schedule.time}</div>
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
                <h1 className="text-center text-2xl font-bold mb-10">
                  Food Schedule
                </h1>

                <Formik
                  initialValues={initialValue}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmitForm}
                >
                  <Form className="w-[80%]">
                    <div className="mb-6 relative w-full">
                      <Field
                        placeholder=""
                        type="text"
                        name="title"
                        className="w-full"
                        onSubmit={(e) => {
                          setFoodName(e.target.value);
                        }}
                      ></Field>
                      <label htmlFor="title">Food Name</label>
                      <ErrorMessage
                        component="div"
                        name="title"
                        className="text-red-500 absolute text-xs bottom-[-5px]"
                      />
                    </div>
                    <div className="mb-6 relative">
                      <Field
                        placeholder=""
                        type="text"
                        name="time"
                        onSubmit={(e) => {
                          setFoodTime(e.target.value);
                        }}
                      ></Field>
                      <label htmlFor="time">Time</label>
                      <ErrorMessage
                        component="div"
                        name="time"
                        className="text-red-500 absolute text-xs bottom-[-5px]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="bg-blue-500 hover:bg-blue-600 px-3 py-2 text-lg text-white fw-fw-bolder w-full rounded-md text-cente my-3"
                    >
                      {"Add to Routine"}
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

export default FoodRoutine;
