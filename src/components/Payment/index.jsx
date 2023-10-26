import React from "react";

const Payment = ({ price }) => {
  return (
    <main className="flex items-center justify-center min-w-[380px]">
      <div className="bg-white rounded-md shadow-md">
        <div className="bg-[#d72e5e] p-2 rounded-t-md text-white flex gap-4">
          <span>LOG IN NOW TO GET EXCLUSIVE DEALS </span>
          <button className="bg-[#f48775] px-2 rounded-sm outline-none">
            LOGIN
          </button>
        </div>
        <div className="p-4 flex flex-col gap-6">
          <div>
            <h2 className="text-xl font-bold">NPR{price}</h2>
            <p className="text-sm">inclusive of all taxes</p>
          </div>
          <div className="shadow-md p-2 flex items-center justify-between">
            <span>1 month</span>
            <span className="border-r border-[#68696b] text-white">
              {" "}
              .
            </span>{" "}
            <span>1 Room, 2 Students</span>
          </div>
          <div>
            <button className="bg-[#1ab64f] w-full rounded-sm py-2 font-bold text-white">
              Pay Now to Book
            </button>
          </div>
          <div>
            <p>
              By proceeding, you agree to our{" "}
              <a className="text-[#d72e5e]" href="#">
                Policies
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Payment;
