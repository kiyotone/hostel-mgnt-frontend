import ImageSlider from "./Slides";
import Payment from "../../components/Payment";
import { FaStar } from "react-icons/fa";
import SimilarHostels from "./Similar";

const SingleHostelPage = () => {
  const hostelImages = [
    "/hostel_image.jpeg",
    "/hostel_image.jpeg",
    "/hostel_image.jpeg",
    "/hostel_image.jpeg",
    "/hostel_image.jpeg",
    "/hostel_image.jpeg",
  ];
  return (
    <main className="container mx-auto p-4">
      <ImageSlider images={hostelImages} />
      <div className="flex gap-4 flex-col md:flex-row relative">
        <div className=" rounded-md my-5 shadow-lg p-4">
          <h1 className="text-2xl font-bold mb-4">Hostel Name</h1>
          <p>Address: </p>
          <p>City, State - ZIP Code</p>
          <div className="mt-5">
            Description:
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis, sit rem sunt facilis provident ad expedita tempore
              quaerat vel? Deserunt, ducimus! Id officia eligendi beatae facere,
              vitae et praesentium? Pariatur!
            </p>
          </div>
          <div className="mt-5">
            Policies and Rules:
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perspiciatis, sit rem sunt facilis provident ad expedita tempore
              quaerat vel? Deserunt, ducimus! Id officia eligendi beatae facere,
              vitae et praesentium? Pariatur!
            </p>
          </div>
          <div className="mt-5">
            Reviews and Ratings:
            <div className="border mt-2 flex flex-col lg:flex-row items-center justify-center">
              <div className="h-full w-full flex items-center justify-center flex-col lg:flex-row gap-4">
                <div className="bg-[#8fc402] rounded-md p-1 text-white my-2">
                  <span className="text-center">3.4 </span>
                  <FaStar className="inline" size={14} />{" "}
                </div>
                <div>
                  <h2 className="text-center">FAIR</h2>
                  <p className="text-center">10 ratings</p>
                </div>
              </div>
              <div className="min-w-[60%] h-full lg:border-l">
                <div className="w-full max-w-lg mx-auto py-4 flex flex-col-reverse">
                  <div className="flex justify-center gap-2 items-center">
                    <span className="text-sm text-gray-600">
                      1 <FaStar className="inline text-[#e5e7eb]" size={12} />
                    </span>
                    <div className="bg-gray-200 h-4 w-48 rounded-full">
                      <div className="bg-[#f48775] h-4 w-1/5 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-2 items-center mb-2">
                    <span className="text-sm text-gray-600">
                      2 <FaStar className="inline text-[#e5e7eb]" size={12} />
                    </span>
                    <div className="bg-gray-200 h-4 w-48 rounded-full">
                      <div className="bg-[#f48775] h-4 w-2/5 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-2 items-center mb-2">
                    <span className="text-sm text-gray-600">
                      3 <FaStar className="inline text-[#e5e7eb]" size={12} />
                    </span>
                    <div className="bg-gray-200 h-4 w-48 rounded-full">
                      <div className="bg-[#f48775] h-4 w-3/5 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-2 items-center mb-2">
                    <span className="text-sm text-gray-600">
                      4 <FaStar className="inline text-[#e5e7eb]" size={12} />
                    </span>
                    <div className="bg-gray-200 h-4 w-48 rounded-full">
                      <div className="bg-[#f48775] h-4 w-4/5 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-center gap-2 items-center mb-2">
                    <span className="text-sm text-gray-600">
                      5 <FaStar className="inline text-[#e5e7eb]" size={12} />
                    </span>
                    <div className="bg-gray-200 h-4 w-48 rounded-full">
                      <div className="bg-[#f48775] h-4 w-full rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="my-5 sticky top-1/2">
          <Payment price={15000} />
        </div>
      </div>
      <div className="my-5 shadow-lg p-4 rounded-md">
        <h1 className="text-3xl text-center">Google Maps</h1>
      </div>
      <div>
        <SimilarHostels />
      </div>
    </main>
  );
};

export default SingleHostelPage;
