import { string, number } from "prop-types";
import { useNavigate } from "react-router-dom";

const Card = ({ name, location, price, rating,noOfReviews, id }) => {
  const navigate=useNavigate()
  return (
    <main className="card bg-white cursor-pointer shadow-lg rounded-lg overflow-hidden">
      <img
        src="/hostel_image.jpeg"
        alt="Hostel"
        className="w-full h-48 object-cover hostel-image transition-all ease-in-out"
      />
      <div className="p-4">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600 mb-4">
          {rating}<span className="ml-2">&#9733;</span> ({noOfReviews} reviews)
        </p>
        <p className="text-gray-600 mb-4">
          <span className="mr-2">Location:</span>
          {location}
        </p>
        <p className="text-gray-600 mb-4">
          <span className="mr-2">Price:</span>
          {price}
        </p>
        <div className="flex justify-between">
          <button className="bg-[#d72e5e] text-white px-4 py-2 rounded-md hover:bg-[#ec3065]">
            Book Now
          </button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400" onClick={()=>navigate(`/hostels/${id}`)}>
            Details
          </button>
        </div>
      </div>
    </main>
  );
};

export default Card;

Card.propTypes = {
  name: string,
  location: string,
  id: string,
  price: number,
  rating: number,
  noOfReviews: number,
};