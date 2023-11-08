import { FaTrash, FaEdit, FaArrowLeft } from "react-icons/fa";
import { useState } from "react";
import FaqForm from "./FaqForm";
import "./faqs.css";
const Faq = () => {
  const [showForm, setShowForm] = useState(false);
  const handleFaqs = () => {
    setShowForm(true);
  };
  const hideForm = () => {
    setShowForm(false);
  };
  return (
    <main>
      <div className="relative">
        <div>
          <h1 className="text-center font-semibold text-xl">
            Frequently Asked Questions
          </h1>
        </div>
        <button
          className="bg-[#b91c1c] text-white px-8 py-2 rounded-[5rem] m-2 hover:bg-[#881111]"
          onClick={handleFaqs}
        >
          Add New
        </button>
        <div className="flex flex-col gap-4">
          <div className="grid__table">
            <div className="text-center">Questions</div>
            <div className="text-center">Answers</div>
            <div className="text-center">Actions</div>
          </div>
          <hr />
          <div className="grid__table">
            <div>Question 1</div>
            <div>Answer 1</div>
            <div className="flex items-center justify-center gap-4">
              <FaTrash />
              <FaEdit />
            </div>
          </div>
          <hr />
        </div>
      </div>
      {showForm ? (
        <div className="fixed bg-white w-full  z-10 h-[100vh] top-[20%]">
          <div className="fex w-full items-center justify-center">
            <button
              onClick={hideForm}
              className="ml-8 flex gap-2 items-center justify-center"
            >
              <FaArrowLeft />
              Back
            </button>
            <FaqForm />
          </div>
        </div>
      ) : (
        ""
      )}
    </main>
  );
};

export default Faq;
