import React from "react";
import { FaStar } from "react-icons/fa";

const Card = ({ name, location, price }) => {
  return (
    <main className="max-w-xs rounded overflow-hidden shadow-lg bg-red-500 text-white">
      <img
        src="/hostel-image.png"
        alt="Hostel Image"
        className="w-full h-48 object-cover transform scale-100 hover:scale-105 transition-transform"
      />
      <div className="px-2 py-4 text-left">
        <div className="font-bold text-xl">{name}</div>
        <p className="text-gray-200 text-base mb-4">{location}</p>
        <p className="text-gray-200 text-base">
          <span className="text-white p-1 border-none rounded-sm bg-green-400 font-bold text-center">
            9.2 <FaStar size={16} className="inline" />
          </span>
          {" (Rating) "}
          Excellent
        </p>
        <p className="text-blue-200 text-2xl font-semibold mt-2">Rs. {price}</p>
      </div>
      <div className="px-6 py-4">
        <button className="bg-yellow-400 hover:bg-yellow-500 border-none text-red-500 font-bold py-2 px-4 rounded-full">
          Book Now
        </button>
      </div>{" "}
    </main>
  );
};

export default Card;
