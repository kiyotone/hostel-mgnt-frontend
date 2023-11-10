import { FaTrash, FaEdit, FaArrowLeft } from "react-icons/fa";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { useState } from "react";
import { successToast } from "../../../services/toastify.service";
// import { useParams } from "react-router-dom";
import "./food.module.css";

const FoodRoutine = () => {
  // State Management
  // const [title, setTitle] = useState("");
  // const [time, setTime] = useState("");
  const [showForm, setShowForm] = useState(false);
  // const [hostels, setHostels] = useState([]);

  // Request Data from Backend
  // const { id } = useParams();

  // get hostel details
  // const getHostelDetail = async () => {
  //   const response = await getData("/hostels/65350ac7d1df3a00f85edea2");
  //   console.log(response);
  //   if (response.success) {
  //     setHostels(response.hostel);
  //     console.log(hostels);
  //   }
  // };

  // useEffect(() => {
  //   getHostelDetail();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // Formik Validation
  const initialValue = {
    title: "",
    time: "",
  };

  const validationSchema = object().shape({
    title: string().required("Food Name is required"),
    time: string().required("Time is required"),
  });

  // On Submit
  const handleSubmitForm = async (values) => {
    console.log(values);
    setShowForm(false);
    successToast("Routine Added Successfully!");
  };

  // handle Delete
  const handleDelete = () => {
    successToast("Routine Deleted Successfully!");
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
          {/* {hostels.timeSchedule.map((schedule) => {
            return (
              <div key={schedule._id}>
                <hr className="mb-4" />
                <div className="grid grid-cols-3">
                  <div className="text-center">{schedule.title}</div>
                  <div className="text-center">7:00 AM</div>
                  <div className="flex items-center justify-center gap-4">
                    <FaTrash />
                    <FaEdit />
                  </div>
                </div>
              </div>
            );
          })} */}
          <div>
            <hr className="mb-4" />
            <div className="grid grid-cols-3">
              <div className="text-center">Breakfast</div>
              <div className="text-center">7:00 AM</div>
              <div className="flex items-center justify-center gap-4">
                <FaTrash
                  className="cursor-pointer w-[1.4rem] h-[1.4rem]"
                  onClick={handleDelete}
                />
                <FaEdit
                  className="cursor-pointer w-[1.4rem] h-[1.4rem]"
                  onClick={() => setShowForm(true)}
                />
              </div>
            </div>
          </div>

          <hr />
        </div>
      </div>
      {showForm && (
        <div className="fixed bg-black/[0.85] z-10 h-[100vh] top-0 left-0 w-[100vw]">
          <div className="flex items-center flex-col gap-8 justify-center h-full max-w-[768px] mx-auto">
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
                      // onSubmit={(e) => {
                      //   setTitle(e.target.value);
                      // }}
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
                      // onSubmit={(e) => {
                      //   setTime(e.target.value);
                      // }}
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
          </div>
        </div>
      )}
    </main>
  );
};

export default FoodRoutine;
