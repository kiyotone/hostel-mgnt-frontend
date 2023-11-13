import { useEffect, useState } from "react";
import {
  deleteData,
  getDataWithoutHeader,
  updateDataWithHeader,
} from "../../services/axios.service";
import { useSelector } from "react-redux";

const Test = () => {
  const [faqs, setfaqs] = useState([]);
  const [question, setquestion] = useState("");
  const [showMe, setshowMe] = useState(false);
  const [updId, setupdId] = useState("");
  const { token } = useSelector((state) => state.auth);

  const getAllFaqs = async () => {
    const response = await getDataWithoutHeader("faqs");
    console.log(response);
    if (response.success) {
      setfaqs(response.faqs);
    }
  };
  useEffect(() => {
    getAllFaqs();
  }, []);
  const deleteHandler = async (id) => {
    const response = await deleteData(`faqs/${id}`, token);
    console.log(response);
    if (response.success) {
      const updData = faqs.filter((data) => data._id != id);
      setfaqs(updData);
    }
  };
  const updateHandler = async (id) => {
    setshowMe(true);
    setupdId(id);
  };
  const updatemememee = async () => {
    console.log(updId);
    const response = await updateDataWithHeader(
      `faqs/${updId}`,
      { question: question },
      token
    );
    console.log(response);
    if (response.success) {
      console.log("memem");
      const newarr = [];
      faqs.map((el) => {
        console.log(el);
        console.log(response);
        if (el._id === updId) {
          newarr.push(response.updfaq);
        } else {
          newarr.push(el);
        }
      });
      console.log(newarr);
      setfaqs(newarr);
    }
  };
  return (
    <div>
      {faqs &&
        faqs.map((faq) => {
          return (
            <div key={faq._id} className="mt-10">
              <h1>{faq.question}</h1>
              <button className="ms-10" onClick={() => deleteHandler(faq._id)}>
                delete
              </button>
              <button className="ms-10" onClick={() => updateHandler(faq._id)}>
                edit
              </button>
            </div>
          );
        })}
      {showMe && (
        <div>
          <input
            type="text"
            value={question}
            className="border bg-blue-400"
            onChange={(e) => setquestion(e.target.value)}
          />
          <div>
            <button onClick={() => updatemememee()}>submit</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Test;
