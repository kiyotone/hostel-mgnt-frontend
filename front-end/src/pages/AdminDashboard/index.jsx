import SideBar from "./SideBar";
import { Route, Routes } from "react-router-dom";
import Settings from "./Settings";
import { useSelector } from "react-redux";
import DashHome from "./DashHome";

const AdminDashboard = () => {
  const usetId = useSelector((state) => state.auth.userId);

  return (
    <div className="text-black">
      <SideBar />

      <div className="ml-[20rem]">
        <Routes>
          <Route path={`/${usetId}`} element={<DashHome />} />
          <Route path={`/${usetId}/settings`} element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
