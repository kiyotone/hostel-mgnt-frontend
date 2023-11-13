import SimilarHostels from "./Similar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  addData,
  deleteData,
  getData,
  getDataWithoutHeader,
  postDataWithHeader,
  updateDataWithHeader,
} from "../../services/axios.service";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ImageSlider from "./Slides";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { useSelector } from "react-redux";
import {
  errorToast,
  loadingToast,
  successToast,
} from "../../services/toastify.service";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import "./singlehostel.module.css";
import Map from "./Map";

const SingleHostelPage = () => {
  const { token, isLogedInStatus, userId } = useSelector((state) => state.auth);
  const [reviewData, setreviewData] = useState({
    rating: 0,
    comment: "",
  });

  const [loading, setloading] = useState(true);
  const [allReviews, setallReviews] = useState([]);
  const [hostel, sethostel] = useState(null);
  const [allFood, setallFood] = useState([]);
  const [updData, setupdData] = useState({
    rating: 0,
    comment: "",
  });

  // modal for updating the rating
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { id } = useParams();

  const getSingleHostel = async () => {
    const response = await getData(`hostels/${id}`);
    console.log(response);
    if (response.success) {
      sethostel(response.hostel);
      console.log(hostel);
    }
  };

  // get hostel details
  const getAllFoodItems = async () => {
    const response = await addData(`time-hostel`, {
      hostelId: id,
    });
    if (response.success) {
      setallFood(response.times);
    }
  };

  useEffect(() => {
    getAllFoodItems();
  }, []);

  const getAllReviews = async () => {
    const response = await addData("reviews-of-hostels", { hostel: id });
    if (response.success) {
      setallReviews(response.reviews);
      console.log(allReviews);
    }
  };

  useEffect(() => {
    getSingleHostel();
    getAllReviews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleReviewFormSubmit = async () => {
    setloading(false);
    if (reviewData.rating === 0) {
      return errorToast("Please Provide the rating field value");
    } else if (reviewData.comment === "") {
      return errorToast("Please Provide the Comment field value");
    } else {
      const response = await postDataWithHeader(
        "reviews",
        { ...reviewData, hostel: id },
        token
      );
      if (response.success) {
        successToast(
          response.message ? response.message : "Review Added successfully"
        );
        if (response.review) {
          setallReviews([...allReviews, response.review]);
        } else {
          const newArr = [];
          allReviews.map((review) => {
            if (review.user._id === response.updReview.user._id) {
              newArr.push(response.updReview);
            } else {
              newArr.push(review);
            }
          });
          setallReviews(newArr);
          setloading(true);
        }
      }
    }
  };

  const deleteReviewHandler = async (reviewid) => {
    const response = await deleteData(`reviews/${reviewid}`, token);
    if (response.success) {
      const newReview = allReviews.filter(
        (reviews) => reviews._id !== reviewid
      );
      setallReviews(newReview);
      successToast(
        response.message ? response.message : "Review deleted successfully"
      );
    }
  };
  const updateReviewHandler = async (reviewid) => {
    handleOpen();
    localStorage.setItem("hostel_update", reviewid);
    const response = await getDataWithoutHeader(`reviews/${reviewid}`);
    console.log(response);
    if (response.success) {
      setupdData({
        comment: response.review.comment,
        rating: response.review.rating,
      });
    }
  };

  const submitUpdatedData = async () => {
    const updID = localStorage.getItem("hostel_update");
    loadingToast();
    const response = await updateDataWithHeader(
      `reviews/${updID}`,
      updData,
      token
    );
    if (response.success) {
      localStorage.removeItem("hostel_update");
      handleClose();
      const newArr = [];
      allReviews.map((review) => {
        if (review.user._id === response.updReview.user._id) {
          newArr.push(response.updReview);
        } else {
          newArr.push(review);
        }
      });
      setallReviews(newArr);
      successToast(
        response.message ? response.message : "Review updated successfully"
      );
    }
  };

  return (
    <>
      {hostel && (
        <main className="container mx-auto p-1 sm:p-4">
          <ImageSlider images={hostel.images} />

          <div className="flex gap-4 flex-col md:flex-row relative">
            <div className="rounded-md my-5 shadow-lg p-4">
              <h1 className="text-2xl font-bold mb-4">{hostel?.name}</h1>
              <p>
                Address:{hostel?.location?.city}-
                {hostel?.location?.localLocation}{" "}
              </p>
              <p>Phone no:{hostel?.phone} </p>
              <div className="mt-5">
                Description:
                <p>{hostel?.description}</p>
              </div>
              <div className="mt-5">
                Policies and Rules:
                <p>{hostel?.rules}</p>
                {/* {hostel.rules &&
                  hostel.rules.map((rule) => {
                    return (
                      <div key={rule._id} className="mb-4">
                        {rule}
                      </div>
                    );
                  })} */}
              </div>
              <div className="mt-5">
                <div className="relative">
                  <h1 className="text-center font-semibold text-2xl mb-2">
                    Weekly Food Routine
                  </h1>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-20 m-4">
                    {/* Sunday Food Items */}
                    <div className="border-4 p-8">
                      <h1 className="text-xl text-center font-semibold my-5 border-b-4">
                        Sunday
                      </h1>
                      <div className="grid grid-cols-2 font-semibold">
                        <div className="text-center">Time</div>
                        <div className="text-center">Food Name</div>
                      </div>
                      {allFood &&
                        allFood.map((food) => {
                          if (food.category === "sunday") {
                            return (
                              <div key={food._id} className="relative">
                                <hr className="m-2" />
                                <div className="grid grid-cols-2">
                                  <div className="text-center">
                                    {food?.time}
                                  </div>
                                  <div className="text-center">
                                    {food?.title}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        })}
                    </div>
                    {/* Monday food Items */}
                    <div>
                      <h1 className="text-xl text-center font-semibold my-5">
                        Monday
                      </h1>

                      <div className="grid grid-cols-2 font-semibold">
                        <div className="text-center">Time</div>
                        <div className="text-center">Food Name</div>
                      </div>
                      {allFood &&
                        allFood.map((food) => {
                          if (food.category === "monday") {
                            return (
                              <div key={food._id} className="relative">
                                <hr className="m-2" />
                                <div className="grid grid-cols-2">
                                  <div className="text-center">
                                    {food?.time}
                                  </div>
                                  <div className="text-center">
                                    {food?.title}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        })}
                    </div>
                    {/* Tuesday Food Items */}
                    <div>
                      <h1 className="text-xl text-center font-semibold my-5">
                        Tuesday
                      </h1>

                      <div className="grid grid-cols-2 font-semibold">
                        <div className="text-center">Time</div>
                        <div className="text-center">Food Name</div>
                      </div>
                      {allFood &&
                        allFood.map((food) => {
                          if (food.category === "tuesday") {
                            return (
                              <div key={food._id} className="relative">
                                <hr className="m-2" />
                                <div className="grid grid-cols-2">
                                  <div className="text-center">
                                    {food?.time}
                                  </div>
                                  <div className="text-center">
                                    {food?.title}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        })}
                    </div>
                    {/* Wednesday Food Items */}
                    <div>
                      <h1 className="text-xl text-center font-semibold my-5">
                        Wednesday
                      </h1>

                      <div className="grid grid-cols-2 font-semibold">
                        <div className="text-center">Time</div>
                        <div className="text-center">Food Name</div>
                      </div>
                      {allFood &&
                        allFood.map((food) => {
                          if (food.category === "wednesday") {
                            return (
                              <div key={food._id} className="relative">
                                <hr className="m-2" />
                                <div className="grid grid-cols-2">
                                  <div className="text-center">
                                    {food?.time}
                                  </div>
                                  <div className="text-center">
                                    {food?.title}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        })}
                    </div>

                    {/* Thursday Food Items */}
                    <div>
                      <h1 className="text-xl text-center font-semibold my-5">
                        Thursday
                      </h1>

                      <div className="grid grid-cols-2 font-semibold">
                        <div className="text-center">Time</div>
                        <div className="text-center">Food Name</div>
                      </div>
                      {allFood &&
                        allFood.map((food) => {
                          if (food.category === "thursday") {
                            return (
                              <div key={food._id} className="relative">
                                <hr className="m-2" />
                                <div className="grid grid-cols-2">
                                  <div className="text-center">
                                    {food?.time}
                                  </div>
                                  <div className="text-center">
                                    {food?.title}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        })}
                    </div>
                    {/* Friday Food Items */}
                    <div>
                      <h1 className="text-xl text-center font-semibold my-5">
                        Friday
                      </h1>

                      <div className="grid grid-cols-2 font-semibold">
                        <div className="text-center">Time</div>
                        <div className="text-center">Food Name</div>
                      </div>
                      {allFood &&
                        allFood.map((food) => {
                          if (food.category === "friday") {
                            return (
                              <div key={food._id} className="relative">
                                <hr className="m-2" />
                                <div className="grid grid-cols-2">
                                  <div className="text-center">
                                    {food?.time}
                                  </div>
                                  <div className="text-center">
                                    {food?.title}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        })}
                    </div>
                    {/* Saturday Food Items */}
                    <div>
                      <h1 className="text-xl text-center my-5 font-semibold">
                        Saturday
                      </h1>

                      <div className="grid grid-cols-2 font-semibold">
                        <div className="text-center">Time</div>
                        <div className="text-center">Food Name</div>
                      </div>
                      {allFood &&
                        allFood.map((food) => {
                          if (food.category === "saturday") {
                            return (
                              <div key={food._id} className="relative">
                                <hr className="m-2" />
                                <div className="grid grid-cols-2">
                                  <div className="text-center">
                                    {food?.time}
                                  </div>
                                  <div className="text-center">
                                    {food?.title}
                                  </div>
                                </div>
                              </div>
                            );
                          }
                        })}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-5">
                <h1 className="font-semibold text-2xl">
                  Reviews and Ratings:({hostel.noOfReviews})
                </h1>
                <div className="border mt-2 flex flex-col lg:flex-row items-center justify-between">
                  <div className=" flex w-full justify-center flex-col">
                    <div className="px-5">
                      {allReviews &&
                        allReviews.map((review) => {
                          return (
                            <div
                              key={review._id}
                              className="shadow-sm py-5 flex flex-col sm:flex-row justify-between pr-10 items-center gap-2"
                            >
                              <div>
                                <h1 className="font-medium">
                                  {review.user.name}
                                </h1>
                                <h1>{review.comment}</h1>
                                <h1>{review._id}</h1>
                                <Rating
                                  name="read-only"
                                  value={review.rating}
                                  readOnly
                                />
                              </div>
                              <div>
                                {review.user._id == userId &&
                                  isLogedInStatus && (
                                    <div className="flex gap-5">
                                      <button
                                        onClick={() =>
                                          deleteReviewHandler(review._id)
                                        }
                                      >
                                        <DeleteIcon />
                                      </button>
                                      <button
                                        onClick={() =>
                                          updateReviewHandler(review._id)
                                        }
                                      >
                                        <EditIcon />
                                      </button>
                                    </div>
                                  )}
                              </div>
                              <div>
                                <Modal
                                  open={open}
                                  onClose={handleClose}
                                  aria-labelledby="modal-modal-title"
                                  aria-describedby="modal-modal-description"
                                >
                                  <Box className="w-[400px] bg-white rounded-md absolute left-[30%] top-[30%] p-10">
                                    <h1 className="text-center mb-2 text-2xl text-slate-800">
                                      {" "}
                                      Update Review
                                    </h1>
                                    <label
                                      htmlFor="Comment"
                                      className="block text-xl"
                                    >
                                      Comment:
                                    </label>
                                    <input
                                      type="text"
                                      value={updData.comment}
                                      onChange={(e) =>
                                        setupdData({
                                          ...updData,
                                          comment: e.target.value,
                                        })
                                      }
                                      className="outline-none border-none w-[300px] p-2 rounded-md bg-gray-300 my-3"
                                    />
                                    <label
                                      htmlFor="rating"
                                      className="block my-2 text-xl"
                                    >
                                      {" "}
                                      Rating:
                                    </label>
                                    <Rating
                                      name="simple-controlled"
                                      value={updData.rating}
                                      onChange={(event, newValue) => {
                                        setupdData({
                                          ...updData,
                                          rating: newValue,
                                        });
                                      }}
                                    />

                                    <div className="mt-2 relative left-[70%]">
                                      <Button
                                        variant="contained"
                                        onClick={() => submitUpdatedData()}
                                      >
                                        Submit
                                      </Button>
                                    </div>
                                  </Box>
                                </Modal>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </div>

                  {isLogedInStatus && (
                    <div className="rating-review mx-2 p-4 shadow-lg">
                      <label
                        htmlFor="comment"
                        className="my-3 text-xl font-sans block"
                      >
                        {" "}
                        Comment:
                      </label>
                      <input
                        type="text"
                        className="outline-none border-none w-[250px] sm:w-[300px] p-2 rounded-md bg-gray-300 my-3"
                        value={reviewData.comment}
                        onChange={(e) =>
                          setreviewData({
                            ...reviewData,
                            comment: e.target.value,
                          })
                        }
                      />
                      <Box
                        sx={{
                          "& > legend": { mt: 2 },
                        }}
                      >
                        <Typography component="legend">Rating</Typography>
                        <Rating
                          name="simple-controlled"
                          value={reviewData.rating}
                          onChange={(event, newValue) => {
                            setreviewData({ ...reviewData, rating: newValue });
                          }}
                        />
                      </Box>
                      <button
                        className="p-2 bg-blue-700  text-white px-3 rounded-md ms-[80%]"
                        onClick={() => {
                          handleReviewFormSubmit();
                        }}
                      >
                        {loading ? "Post" : "Posting...."}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="my-5 shadow-lg p-4 rounded-md">
            <h1 className="text-3xl text-center">Google Maps</h1>
            <Map lat={hostel.latitude} lon={hostel.longitude} />
          </div>
          <div>
            <SimilarHostels />
          </div>
        </main>
      )}
    </>
  );
};

export default SingleHostelPage;
