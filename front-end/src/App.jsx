import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Navbar from "./components/Navbar";
import Hostels from "./pages/Hostels";
import AboutUs from "./pages/AboutUs";
import SingleHostelPage from "./pages/SingleHostelPage";
import AdminDashboard from "./pages/AdminDashboard";
import HostelLocation from "./pages/AdminDashboard/HostelLocation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/hostels" element={<Hostels />} />
          <Route path="/hostels/:id" element={<SingleHostelPage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/users/*" element={<AdminDashboard />} />
          <Route path="/location" element={<HostelLocation />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  );
}

export default App;
