import { FaArrowLeft } from "react-icons/fa";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { successToast } from "../../../services/toastify.service";
import { useEffect, useState } from "react";
import "./location.module.css";
import {
  getDataWithoutHeader,
  updateDataWithHeader,
} from "../../../services/axios.service";
import { useSelector } from "react-redux";

const HostelLocation = () => {
  const [showForm, setShowForm] = useState(false);
  const [details, setDetails] = useState({});
  const [description, setDescription] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [city, setCity] = useState("");
  const [localLocation, setLocalLocation] = useState("");
  const { token } = useSelector((state) => state.auth);

  const getDetails = async () => {
    const response = await getDataWithoutHeader(
      "/hostels/65350ac7d1df3a00f85edea2"
    );
    console.log(response);
    if (response.success) {
      setDetails(response.hostel);
      console.log(details);
    }
  };

  useEffect(() => {
    getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Add Details

  // update info
  const updateDetails = async () => {
    showForm(true);
    const response = await updateDataWithHeader(
      `/hostels/65350ac7d1df3a00f85edea2`,
      {
        description: description,
        longitude: longitude,
        latitude: latitude,
        location: {
          city: city,
          localLocation: localLocation,
        },
      },
      token
    );
    console.log(response);
    const newDetail = {};

    newDetail.push(response.updHostel);

    setDetails(newDetail);
    setShowForm(false);
    successToast("Details Updated Successfully!");
  };

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

  return (
    <div className="flex flex-col gap-[3rem] max-w-[768px]">
      <div className="mx-[3rem]">
        <h1 className="text-center text-2xl font-semibold">Hostel Location</h1>
        <p className="mx-[3rem]">Enter your hostel&apos;s details here:</p>
      </div>
      <div className="mx-[3rem]">
        <div>
          Description:
          <div>{details.description}</div>
        </div>
        <div>
          Longitude:
          <div>{details.longitude}</div>
        </div>
        <div>
          Latitude:
          <div>{details.latitude}</div>
        </div>
        <div>
          City:
          <div>{details.location.city}</div>
        </div>
        <div>
          Local Location:
          <div>{details.location.localLocation}</div>
        </div>
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
                onSubmit={() => {
                  updateDetails();
                }}
              >
                <Form className="w-[80%]">
                  <div className="mb-6 relative w-full">
                    <textarea
                      rows="3"
                      placeholder="Enter a short description of your hostel"
                      type="text"
                      name="description"
                      id="description"
                      className="w-full border-[#ccc] border-2 rounded-md p-2 mt-2"
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    ></textarea>
                    <ErrorMessage
                      component="div"
                      name="description"
                      className="text-red-500 absolute text-xs bottom-[-15px]"
                    />
                  </div>
                  <div className="mb-6 relative w-full">
                    <input
                      placeholder=""
                      type="text"
                      name="longitude"
                      className="w-full"
                      onChange={(e) => {
                        setLongitude(e.target.value);
                      }}
                    ></input>
                    <label htmlFor="longitude">Longitude</label>
                    <ErrorMessage
                      component="div"
                      name="longitude"
                      className="text-red-500 absolute text-xs bottom-[-5px]"
                    />
                  </div>
                  <div className="mb-6 relative">
                    <input
                      placeholder=""
                      type="text"
                      name="latitude"
                      className="w-full"
                      onChange={(e) => {
                        setLatitude(e.target.value);
                      }}
                    ></input>
                    <label htmlFor="latitude">Latitude</label>
                    <ErrorMessage
                      component="div"
                      name="latitude"
                      className="text-red-500 absolute text-xs bottom-[-5px]"
                    />
                  </div>
                  <div className="mb-6 relative">
                    <input
                      placeholder=""
                      type="text"
                      name="city"
                      className="w-full"
                      onChange={(e) => {
                        setCity(e.target.value);
                      }}
                    ></input>
                    <label htmlFor="city">City</label>
                    <ErrorMessage
                      component="div"
                      name="city"
                      className="text-red-500 absolute text-xs bottom-[-5px]"
                    />
                  </div>
                  <div className="mb-6 relative">
                    <input
                      placeholder=""
                      type="text"
                      name="localLocation"
                      className="w-full"
                      onChange={(e) => {
                        setLocalLocation(e.target.value);
                      }}
                    ></input>
                    <label htmlFor="localLocation">Local Location</label>
                    <ErrorMessage
                      component="div"
                      name="localLocation"
                      className="text-red-500 absolute text-xs bottom-[-5px]"
                    />
                  </div>

                  <button
                    type="submit"
                    onClick={() => {
                      updateDetails();
                    }}
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
