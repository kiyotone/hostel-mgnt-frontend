import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Navbar from "./components/Navbar";
import Hostels from "./pages/Hostels";
import AboutUs from "./pages/AboutUs";
import SingleHostelPage from "./pages/SingleHostelPage";
import SuperAdminSidebar from "./components/SideBar";
import AllUsers from "./pages/AllUsers";
import AllFaqs from "./pages/AllFaq";
import AllHostels from "./pages/AllHostels";
import AllOrders from "./pages/AllOrders";
import CreateFaq from "./components/forms/AddFaqs";
import UpdateFaq from "./components/forms/UpdateFaqs";
import AllUsersResponses from "./pages/UserResponses";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/hostels" element={<Hostels />} />
          <Route path="/hostels/:id" element={<SingleHostelPage />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Route>
        {/* superadmin Route start */}
        <Route path="/" element={<SuperAdminSidebar />}>
          <Route path="/superadmin/allusers" element={<AllUsers />} />
          <Route path="/superadmin/faqs" element={<AllFaqs />} />
          <Route path="/superadmin/hostels" element={<AllHostels />} />
          <Route path="/superadmin/orders" element={<AllOrders />} />
          <Route
            path="/superadmin/all-user-responses"
            element={<AllUsersResponses />}
          />
        </Route>

        {/* superadmin forms start */}

        <Route path="/superadmin/createFaq" element={<CreateFaq />} />
        <Route path="/superadmin/upd-faq/:id" element={<UpdateFaq />} />
        {/* superadmin forms ends */}
        {/* superadmin Route ends */}
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
